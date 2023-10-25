<template>
  <NuxtLayout>
    <div class="contact-container">
      <div class="contact">
        <h1 class="contact-title">Contact us</h1>
        <p class="text">You can contact us on:</p>
        <div class="tags">
          <a href="https://twitter.com/vleerapp">
          <img src="/xbanner.png" alt="xbanner" class="x banner">
          </a>
          <a href="https://discord.gg/5cGXbeD8zN">
          <img src="/discordbanner.png" alt="discordbanner" class="discord banner">
          </a>
        </div>
        <p class="text">or via Email at <a href="mailto:contact@vleer.app">contact@vleer.app</a></p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Vleer - Contact us",
  description: 'Contact us if you want to help us build a better future for music apps',
  ogTitle: 'Vleer - Contact us',
  ogDescription: 'Contact us if you want to help us build a better future for music apps',
  ogImage: '/logo.webp',
  ogUrl: 'https://vleer.app',
  twitterTitle: 'Vleer - Contact us',
  twitterDescription: 'Contact us if you want to help us build a better future for music apps',
  twitterImage: '/logo.webp',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://vleer.app/contact',
    },
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style lang="scss">
.contact-container {
  max-width: 1136px;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 32px;

  .contact {
    display: flex;
    text-align: left;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    gap: 16px;

    .tags {
      display: flex;
      gap: 16px;
    }

    .x {
      width: 230px;
      height: 60px;
    }

    .discord {
      width: 252px;
      height: 60px;
    }

    .text {
      color: #bfbfbf;
    }

    .contact-title {
      font-size: 48px;
      text-align: left;
    }
  }
}

@media (max-width: 700px) {
  .contact-container{
    margin-top: 40px;
  }
}
</style>
