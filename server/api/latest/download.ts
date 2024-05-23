import { defineEventHandler, getHeader } from 'h3';

export default defineEventHandler(async (event) => {
  const userAgent = event.req.headers['user-agent']?.toLowerCase() || '';
  const os = userAgent.includes('mac') ? 'macos' :
    userAgent.includes('win') ? 'windows' :
      userAgent.includes('linux') ? 'linux' : 'linux';

  try {
    const response = await fetch('http://localhost:3000/api/latest');
    const data = await response.json();

    let downloadUrl = data.version_link;

    event.res.writeHead(302, { Location: downloadUrl });
    event.res.end();
  } catch (error) {
    console.error('Failed to fetch latest release data:', error);
    return 'Error fetching latest release data';
  }
});