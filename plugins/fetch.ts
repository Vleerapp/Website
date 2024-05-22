import { ref } from 'vue';
import { useAsyncData } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const data: any = ref(null);

  async function useLatestData() {
    if (!data.value) {
      const { data: fetchedData } = await useAsyncData('latest', () => $fetch('/api/latest'));
      data.value = fetchedData.value;
    }
    return data;
  }

  nuxtApp.provide('useLatestData', useLatestData);
});