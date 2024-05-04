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
    if (osSpecificAsset) {
      return osSpecificAsset.browser_download_url;
    } else {
      return 'No file found in the latest release';
    }
  } else {
    return 'No releases found';
  }
})