import { $fetch } from 'ofetch';
import NodeCache from 'node-cache';

const myCache = new NodeCache();

export default defineEventHandler(async (event) => {
  const userAgent = event.req.headers['user-agent'].toLowerCase();
  const os = userAgent.includes('mac') ? 'macos' :
    userAgent.includes('win') ? 'windows' :
      userAgent.includes('linux') ? 'linux' : 'linux';

  const cacheKey = 'latest-release';
  const cachedRelease = myCache.get(cacheKey);

  if (cachedRelease) {
    const etag = myCache.get(`${cacheKey}-etag`);
    try {
      const headers = etag ? { headers: { 'If-None-Match': etag } } : {};
      const response = await $fetch('https://api.github.com/repos/vleerapp/vleer/releases', {
        ...headers,
        method: 'HEAD'
      });

      if (response.status === 304) {
        return formatReleaseData(cachedRelease, os);
      } else if (response.status === 403) {
        return formatReleaseData(cachedRelease, os); // Return cached data if GitHub API returns 403
      }
    } catch (error) {
      return formatReleaseData(cachedRelease, os);
    }
  }

  try {
    const releases = await $fetch('https://api.github.com/repos/vleerapp/vleer/releases');
    if (releases.length === 0) {
      return {
        version: 'unknown',
        version_link: 'No releases found',
        other_platforms: []
      };
    }

    const latestRelease = releases[0];
    myCache.set(cacheKey, latestRelease);
    myCache.set(`${cacheKey}-etag`, latestRelease.etag);

    return formatReleaseData(latestRelease, os);
  } catch (error) {
    if (error.response?.status === 403 && cachedRelease) {
      return formatReleaseData(cachedRelease, os); // Return cached data if GitHub API returns 403
    }
    throw error; // rethrow the error if it's not a 403 or no cache is available
  }
});

function formatReleaseData(release, os) {
  const extension = os === 'macos' ? '.dmg' : os === 'windows' ? '.msi' : os === 'linux' ? '.deb' : "";
  const osSpecificAsset = release.assets.find(asset => asset.name.endsWith(extension));
  const otherPlatforms = release.assets
    .filter(asset => asset.name.endsWith('.dmg') || asset.name.endsWith('.msi') || asset.name.endsWith('.deb'))
    .map(asset => ({
      platform: asset.name.endsWith('.dmg') ? 'macos' :
        asset.name.endsWith('.msi') ? 'windows' :
          asset.name.endsWith('.deb') ? 'linux' : 'unknown',
      url: asset.browser_download_url
    }))
    .filter(platform => platform.url !== osSpecificAsset?.browser_download_url);

  if (osSpecificAsset) {
    return {
      version: release.tag_name,
      version_link: osSpecificAsset.browser_download_url,
      other_platforms: otherPlatforms
    };
  } else {
    return {
      version: release.tag_name,
      version_link: 'No file found for this platform in the latest release',
      other_platforms: otherPlatforms
    };
  }
}