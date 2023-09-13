<template>
  <NuxtLayout>

  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Contact us",
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
  titleTemplate: "%siteName - %s",
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style lang="scss"></style>
