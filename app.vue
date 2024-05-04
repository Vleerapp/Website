<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <SpeedInsights />
  <Navbar />
  <NuxtPage />
</template>


<style>
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url("~/assets/fonts/Inter.woff2") format("woff2");
}

@font-face {
  font-family: 'CommitMono';
  src: url('~/assets/fonts/CommitMono.woff2') format('woff2');
  font-weight: 100 900;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #121212;
  color: #FFFFFF;
  font-family: Inter;
}
</style>