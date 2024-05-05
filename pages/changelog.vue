<template>
  <div class="changelog-content">
    <div class="changelog-container">
      <h1 class="header">Changelog</h1>
      <article v-for="log in changelog" :key="log.tag_name" class="changelog-entry">
        <div class="info">
          <a :href="log.url" class="tag">{{ log.tag_name }}</a>
          <p>{{ formatDate(log.date) }}</p>
        </div>
        <div class="description" v-html="log.description"></div>
      </article>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      changelog: [],
      mdParser: null
    }
  },
  created() {
    this.mdParser = new MarkdownIt({
      linkify: true
    })
  },
  methods: {
    async fetchData() {
      const res = await $fetch("/api/changelog");
      this.changelog = res.map(log => {
        const tempDescription = log.description
          .replace(/https:\/\/github\.com\/Vleerapp\/Vleer\/pull\/(\d+)/g, 'PULL_REQUEST_$1')
          .replace(/<br>/g, "\n")
          .replace(/\) - ([a-f0-9]{64})/g, (match, p1) => `) - ${p1.substring(0, 16)}...`);

        let renderedDescription = this.mdParser.render(tempDescription);

        renderedDescription = renderedDescription.replace(/PULL_REQUEST_(\d+)/g, '<a href="https://github.com/Vleerapp/Vleer/pull/$1">#$1</a>');
        renderedDescription = renderedDescription.replace(/@(\w+)/g, '<a href="https://github.com/$1">@$1</a>');
        renderedDescription = renderedDescription.replace(/\n/g, '<br>');
        renderedDescription = renderedDescription.replace(/<p><br><\/p>/g, '<br>');

        return {
          ...log,
          description: renderedDescription
        };
      });
    },
    formatDate(inputDate) {
      return new Date(inputDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
  },
  async mounted() {
    await this.fetchData();
    this.$nextTick(() => {
      document.querySelectorAll('.description h2').forEach(element => {
        Object.assign(element.style, {
          color: 'white',
          textDecoration: 'none',
          fontSize: '24px'
        });
      });

      document.querySelectorAll('.description ul').forEach(element => {
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

      document.querySelectorAll('.description li').forEach(element => {
        Object.assign(element.style, {
          listStyleType: 'none',
          position: "relative"
        });

        const beforeStyle = document.createElement('style');
        document.head.appendChild(beforeStyle);
        beforeStyle.sheet.insertRule(`
        .description li::before {
          content: "";
          position: absolute;
          top: .55em;
          width: 12px;
          height: 1px;
          background-color: rgba(255, 255, 255, .5);
        }
      `, beforeStyle.sheet.cssRules.length);
      });

      document.querySelectorAll('.description li').forEach(element => {
        Object.assign(element.style, {
          listStyleType: 'none',
          position: "relative"
        });

        const beforeStyle = document.createElement('style');
        document.head.appendChild(beforeStyle);
        beforeStyle.sheet.insertRule(`
        @media (max-width: 720px) {
          .description li::before {
            left: -36px;
          }
        }
      `, beforeStyle.sheet.cssRules.length);
      });

      document.querySelectorAll('.description p').forEach(element => {
        Object.assign(element.style, {
          fontSize: "20px",
          color: "#d3d3d4"
        });
      });

      document.querySelectorAll('.description a').forEach(element => {
        Object.assign(element.style, {
          color: "#4493f8"
        });
      });
    });
  }
}
</script>

<script setup>
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