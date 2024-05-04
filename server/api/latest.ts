import { $fetch } from 'ofetch';

export default defineEventHandler(async (event) => {
  const userAgent = event.req.headers['user-agent'].toLowerCase();
  const os = userAgent.includes('mac') ? 'macos' :
    userAgent.includes('win') ? 'windows' :
      userAgent.includes('linux') ? 'linux' : 'linux';

  const releases = await $fetch('https://api.github.com/repos/vleerapp/vleer/releases');
  if (releases.length > 0) {
    const latestRelease = releases[0];
    const extension = os === 'macos' ? '.dmg' : os === 'windows' ? '.msi' : os === 'linux' ? '.deb' : "";
    const osSpecificAsset = latestRelease.assets.find(asset => asset.name.endsWith(extension));
    const otherPlatforms = latestRelease.assets
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
        version: latestRelease.tag_name,
        version_link: osSpecificAsset.browser_download_url,
        other_platforms: otherPlatforms
      };
    } else {
      return {
        version: latestRelease.tag_name,
        version_link: 'No file found for this platform in the latest release',
        other_platforms: otherPlatforms
      };
    }
  } else {
    return {
      version: 'unknown',
      version_link: 'No releases found',
      other_platforms: []
    };
  }
})