import { $fetch } from 'ofetch';

export default defineEventHandler(async (event) => {
  const getLatestVersionTag = async () => {
    try {
      const tags = await $fetch('https://api.github.com/repos/vleerapp/vleer/tags');
      return tags.length > 0 ? tags[0].name : 'No tags found';
    } catch (error) {
      return 'Error fetching tags';
    }
  };

  const latestVersion = await getLatestVersionTag();
  return { version: latestVersion };
})
