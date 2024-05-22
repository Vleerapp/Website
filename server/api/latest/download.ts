export default defineEventHandler((event) => {
  const userAgent = event.req.headers['user-agent'].toLowerCase();
  const os = userAgent.includes('mac') ? 'macos' :
    userAgent.includes('win') ? 'windows' :
      userAgent.includes('linux') ? 'linux' : 'linux';

  const releasesResponse = fetch('https://api.github.com/repos/vleerapp/vleer/releases');
  releasesResponse.then(releases => {
    if (releases.length > 0) {
      const latestRelease = releases[0];
      const extension = os === 'macos' ? '.dmg' : os === 'windows' ? '.msi' : os === 'linux' ? '.deb' : "";
      const osSpecificAsset = latestRelease.assets.find(asset => asset.name.endsWith(extension));
      if (osSpecificAsset) {
        event.res.writeHead(302, { Location: osSpecificAsset.browser_download_url });
        event.res.end();
      } else {
        return 'No file found in the latest release';
      }
    } else {
      return 'No releases found';
    }
  }).catch(error => {
    console.error('Failed to fetch releases:', error);
    return 'Error fetching releases';
  });
})
