import { $fetch } from 'ofetch';
import NodeCache from 'node-cache';

const myCache = new NodeCache();

export default defineEventHandler(async (event) => {
  const cacheKey = 'latest-version-tag';
  const cachedVersion = myCache.get(cacheKey);

  if (cachedVersion) {
    const etag = myCache.get(`${cacheKey}-etag`);
    try {
      const headers = etag ? { headers: { 'If-None-Match': etag } } : {};
      const response = await $fetch('https://api.github.com/repos/vleerapp/vleer/tags', {
        ...headers,
        method: 'HEAD'
      });

      if (response.status === 304) {
        return { version: cachedVersion };
      }
    } catch (error) {
      // If the conditional request fails, fall back to cached version
      return { version: cachedVersion };
    }
  }

  const tags = await $fetch('https://api.github.com/repos/vleerapp/vleer/tags');
  if (tags.length === 0) return 'No tags found';

  const order = ['alpha', 'beta', 'pre', ''];
  tags.sort((a, b) => {
    const aVersion = a.name.match(/v\d+\.\d+\.\d+-(\w+)/) || ['', ''];
    const bVersion = b.name.match(/v\d+\.\d+\.\d+-(\w+)/) || ['', ''];
    const aIndex = order.indexOf(aVersion[1]);
    const bIndex = order.indexOf(bVersion[1]);
    return aIndex - bIndex;
  });

  const latestVersion = tags[0].name;
  myCache.set(cacheKey, latestVersion);
  myCache.set(`${cacheKey}-etag`, tags[0].etag);

  return { version: latestVersion };
})