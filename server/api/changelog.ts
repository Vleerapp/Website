import NodeCache from 'node-cache';

const myCache = new NodeCache();

export default defineEventHandler(async (event) => {
  const repo = 'vleerapp/vleer';
  const cacheKey = `${repo}-all-descriptions`;
  const cachedDescriptions: any = myCache.get(cacheKey);
  const etag: string | undefined = myCache.get(`${cacheKey}-etag`);

  if (cachedDescriptions && etag) {
    const headers: HeadersInit = { 'If-None-Match': etag };
    const response = await $fetch(`https://api.github.com/repos/${repo}/releases`, {
      headers,
      method: 'HEAD'
    });

    if ((response as Response).status === 304) {
      return cachedDescriptions;
    }
  }

  const releases: any[] = await $fetch(`https://api.github.com/repos/${repo}/releases`);
  const descriptions = releases.map((release: any) => ({
    title: release.name,
    tag_name: release.tag_name,
    description: release.body || 'No description available',
    url: release.html_url,
    date: release.published_at
  }));

  const latestEtag = releases.length > 0 ? releases[0].etag : '';
  myCache.set(cacheKey, descriptions);
  myCache.set(`${cacheKey}-etag`, latestEtag);

  return descriptions;
});
