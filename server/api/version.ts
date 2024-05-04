import { $fetch } from 'ofetch';

export default defineEventHandler(async (event) => {
  const getLatestVersionTag = async () => {
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


    return tags[0].name;
  };

  const latestVersion = await getLatestVersionTag();
  return { version: latestVersion };
})