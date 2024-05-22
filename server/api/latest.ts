import NodeCache from 'node-cache';
import type { NitroFetchOptions } from 'nitropack';

const myCache = new NodeCache();

export default defineEventHandler(async (event) => {
  console.log("fetch");
  const userAgent = event.req.headers['user-agent']?.toLowerCase() || '';
  const os = userAgent.includes('mac') ? 'macos' :
    userAgent.includes('win') ? 'windows' :
      userAgent.includes('linux') ? 'linux' : 'linux';

  const cacheKey = 'latest-release';
  const cachedRelease: any = myCache.get(cacheKey);

  if (cachedRelease) {
    const etag: string | undefined = myCache.get(`${cacheKey}-etag`);
    try {
      const headers: HeadersInit | undefined = etag ? { 'If-None-Match': etag } : undefined;
      const response = await $fetch('https://api.github.com/repos/vleerapp/vleer/releases', {
        headers,
        method: 'head'
      } as NitroFetchOptions);

      if (response.status === 304) {
        return formatReleaseData(cachedRelease, os);
      } else if (response.status === 403) {
        return formatReleaseData(cachedRelease, os);
      }
    } catch (error: any) {
      return formatReleaseData(cachedRelease, os);
    }
  }

  try {
    const releases: any[] = await $fetch('https://api.github.com/repos/vleerapp/vleer/releases');
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
  } catch (error: any) {
    if (error.response?.status === 403 && cachedRelease) {
      return formatReleaseData(cachedRelease, os); 
    }
    throw error;
  }
});

function formatReleaseData(release: any, os: string) {
  const extension = os === 'macos' ? '.dmg' : os === 'windows' ? '.msi' : os === 'linux' ? '.deb' : "";
  const osSpecificAsset = release.assets.find((asset: any) => asset.name.endsWith(extension));
  const otherPlatforms = release.assets
    .filter((asset: any) => asset.name.endsWith('.dmg') || asset.name.endsWith('.msi') || asset.name.endsWith('.deb'))
    .map((asset: any) => ({
      platform: asset.name.endsWith('.dmg') ? 'macos' :
        asset.name.endsWith('.msi') ? 'windows' :
          asset.name.endsWith('.deb') ? 'linux' : 'unknown',
      url: asset.browser_download_url
    }))
    .filter((platform: any) => platform.url !== osSpecificAsset?.browser_download_url);

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