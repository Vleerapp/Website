<template>
  <div class="changelog-content">
    <div v-if="loading" class="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-else class="changelog-container">
      <h1 class="header">Changelog</h1>
      <article v-for="log in changelog" :key="log.tag_name" class="changelog-entry">
        <div class="info">
          <a target="_blank" :href="log.url" class="tag">{{ log.title }}</a>
          <p>{{ formatDate(log.date) }}</p>
        </div>
        <div class="description" v-html="log.description"></div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useState } from '#app';
import MarkdownIt from 'markdown-it';

interface ChangelogEntry {
  title: string;
  tag_name: string;
  description: string;
  url: string;
  date: string;
}

const loading = ref(true);
const changelog = useState<ChangelogEntry[]>('changelog', () => []);

if (!changelog.value.length) {
  const mdParser = new MarkdownIt({ linkify: true });
  const fetchChangelog = async () => {
    const res: ChangelogEntry[] = await $fetch('/api/changelog');
    changelog.value = res.map((log: ChangelogEntry) => {
      const tempDescription = log.description
        .replace(/https:\/\/github\.com\/Vleerapp\/Vleer\/pull\/(\d+)/g, 'PULL_REQUEST_$1')
        .replace(/<br>/g, "\n")
        .replace(/\) - ([a-f0-9]{64})/g, (match: string, p1: string) => `) - ${p1.substring(0, 16)}...`);

      let renderedDescription = mdParser.render(tempDescription);

      renderedDescription = renderedDescription.replace(/PULL_REQUEST_(\d+)/g, '<a target="_blank" href="https://github.com/Vleerapp/Vleer/pull/$1">#$1</a>');
      renderedDescription = renderedDescription.replace(/@(\w+)/g, '<a target="_blank" href="https://github.com/$1">@$1</a>');
      renderedDescription = renderedDescription.replace(/\n/g, '<br>');
      renderedDescription = renderedDescription.replace(/<p><br><\/p>/g, '<br>');

      return {
        ...log,
        description: renderedDescription
      };
    });
  };
  await fetchChangelog();
}

const formatDate = (inputDate: string) => {
  return new Date(inputDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

onMounted(() => {
  loading.value = false;
  nextTick(() => {
    document.querySelectorAll<HTMLElement>('.description h2').forEach(element => {
      Object.assign(element.style, {
        color: 'white',
        textDecoration: 'none',
        fontSize: '24px'
      });
    });

    document.querySelectorAll<HTMLElement>('.description ul').forEach(element => {
      Object.assign(element.style, {
        marginLeft: '42px',
        fontSize: "20px",
        color: "#d3d3d4",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      });
      element.innerHTML = element.innerHTML.replace(/<br>/g, '');
    });

    document.querySelectorAll<HTMLElement>('.description li').forEach(element => {
      Object.assign(element.style, {
        listStyleType: 'none',
        position: "relative"
      });

      const beforeStyle = document.createElement('style');
      document.head.appendChild(beforeStyle);
      if (beforeStyle.sheet) {
        beforeStyle.sheet.insertRule(`
        .description li::before {
          content: "";
          position: absolute;
          top: .55em;
          width: 12px;
          height: 1px;
          left: -36px;
          background-color: rgba(255, 255, 255, .5);
        }
      `, beforeStyle.sheet.cssRules.length);
      }
    });

    document.querySelectorAll<HTMLElement>('.description p').forEach(element => {
      Object.assign(element.style, {
        fontSize: "20px",
        color: "#d3d3d4"
      });
    });

    document.querySelectorAll<HTMLElement>('.description a').forEach(element => {
      Object.assign(element.style, {
        color: "#4493f8"
      });
    });
  });
});

useSeoMeta({
  title: 'Vleer - Changelog',
  description: 'Explore high-quality music with Vleer a fast, simple, and reliable app, tailored to your preferences.',
  ogTitle: 'Vleer - Changelog',
  ogDescription: 'Explore high-quality music with Vleer a fast, simple, and reliable app, tailored to your preferences.',
  ogImage: '/logo.png',
  ogUrl: 'https://vleer.app/changelog',
  twitterTitle: 'Vleer - Changelog',
  twitterDescription: 'Explore high-quality music with Vleer a fast, simple, and reliable app, tailored to your preferences.',
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    },
    {
      rel: 'canonical',
      href: 'https://vleer.app/changelog',
    }
  ]
})
</script>

<style scoped lang="scss">
@import '~/assets/css/changelog.scss';
</style>