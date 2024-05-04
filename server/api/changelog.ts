import { $fetch } from 'ofetch';
import NodeCache from 'node-cache';

const myCache = new NodeCache();

export default defineEventHandler(async (event) => {
  const repo = 'vleerapp/vleer'; // Hardcoded repository
  const cacheKey = `${repo}-all-descriptions`;
  const cachedDescriptions = myCache.get(cacheKey);
  const etag = myCache.get(`${cacheKey}-etag`);

  if (cachedDescriptions && etag) {
    try {
      const headers = { 'If-None-Match': etag };
      const response = await $fetch(`https://api.github.com/repos/${repo}/releases`, {
        headers,
        method: 'HEAD'
      });

      if (response.status === 304) {
        return { descriptions: cachedDescriptions };
      }
    } catch (error) {
      console.error('Error with conditional request:', error);
      return { descriptions: cachedDescriptions };
    }
  }

  try {
    const releases = await $fetch(`https://api.github.com/repos/${repo}/releases`);
    const descriptions = releases.map(release => ({
      tag_name: release.tag_name,
      description: release.body || 'No description available'
    }));

    const latestEtag = releases.length > 0 ? releases[0].headers.get('etag') : '';
    myCache.set(cacheKey, descriptions);
    myCache.set(`${cacheKey}-etag`, latestEtag);

    return { descriptions };
  } catch (fetchError) {
    console.error('Failed to fetch releases:', fetchError);
    return { descriptions: cachedDescriptions || [] };
  }
});