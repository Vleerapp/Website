import { $fetch } from 'ofetch';
import NodeCache from 'node-cache';

const myCache = new NodeCache();

export default defineEventHandler(async (event) => {
  const repo = 'vleerapp/vleer';
  const cacheKey = `${repo}-all-descriptions`;
  const cachedDescriptions = myCache.get(cacheKey);
  const etag = myCache.get(`${cacheKey}-etag`);

  if (cachedDescriptions && etag) {
    try {
      const headers = { headers: { 'If-None-Match': etag } };
      const response = await $fetch(`https://api.github.com/repos/${repo}/releases`, {
        ...headers,
        method: 'HEAD'
      });

      if (response.status === 304) {
        return cachedDescriptions;
      }
    } catch (error) {
      if (error.response?.status === 403) {
        return cachedDescriptions;
      }
      return cachedDescriptions;
    }
  }

  try {
    const releases = await $fetch(`https://api.github.com/repos/${repo}/releases`);
    const descriptions = releases.map(release => ({
      tag_name: release.tag_name,
      description: release.body || 'No description available',
      url: release.html_url,
      date: release.published_at
    }));

    const latestEtag = releases.length > 0 ? releases[0].etag : '';
    myCache.set(cacheKey, descriptions);
    myCache.set(`${cacheKey}-etag`, latestEtag);

    return descriptions;
  } catch (error) {
    if (error.response?.status === 403 && cachedDescriptions) {
      return cachedDescriptions;
    }
    throw error; // rethrow the error if it's not a 403 or no cache is available
  }
});