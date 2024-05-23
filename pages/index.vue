<template>
  <div class="hero">
    <div class="hero-text">
      <h1>Your library to everything.</h1>
      <h2>
        Explore high-quality music with Vleer a fast, simple, and reliable app,
        tailored to your preferences.
      </h2>
    </div>
    <div class="hero-img">
      <NuxtImg src="/hero-bg.svg" />
    </div>
    <div class="hero-download">
      <Download class="download" />
      <div class="info">
        <p>{{ version }}</p>
        <p>{{ os }}</p>
        <p id="install" @click="copyInstall" v-if="install != ''">
          {{ install }}
        </p>
      </div>
    </div>
  </div>
  <div class="image-section">
    <div class="container">
      <div class="text">
        <h3 class="text-h3">Listen without any interruptions.</h3>
        <p class="text-p">One application, all you ever need.</p>
      </div>
      <div class="wrapper">
        <div class="image-outer">
          <div class="image-inner">
            <div class="image-content">

            </div>
            <NuxtImg height="730" alt="image" loading="lazy" src="/image.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="before-footer">
    <div class="text">
      <h3 class="text-h3">Take the easy way.</h3>
      <p class="text-p">Download and use Vleer for free.</p>
    </div>
    <div class="hero-download">
      <Download class="download" />
      <div class="info">
        <p>{{ version }}</p>
        <p>{{ os }}</p>
        <p v-if="install != ''">{{ install }}</p>
      </div>
    </div>
  </div>
  <div class="footer">
    <NuxtImg alt="footer-image" src="/footer.svg" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRequestHeaders } from '#app';
import { useAsyncData } from '#app';

interface CacheData {
  version: string;
}

const cache = useState<CacheData | null>('latestCache', () => null);

if (!cache.value) {
  const { data } = await useAsyncData('latest', () => $fetch<CacheData>('/api/latest'));
  cache.value = data.value;
}

const version = ref<string>(cache.value?.version || '');

const headers = useRequestHeaders(['user-agent']);
const userAgent = headers['user-agent'] || (typeof window !== 'undefined' ? window.navigator.userAgent : '');
const os = ref<string>('');

if (userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("mac")) {
    os.value = "macOS 10.15+";
  } else if (ua.includes("win") || ua.includes("windows")) {
    os.value = "win 7+";
  } else if (ua.includes("linux")) {
    os.value = "webkit2gtk 4.1+";
  } else {
    os.value = "webkit2gtk 4.1+";
  }
}

const install = computed<string>(() => {
  return os.value === "macOS 10.15+" ? "Install with homebrew" : "";
});

function copyInstall(): void {
  if (install.value === "") return;

  const userAgent = window.navigator.userAgent.toLowerCase();
  const currentOS = userAgent.includes("mac")
    ? "macos"
    : userAgent.includes("win")
      ? "windows"
      : userAgent.includes("linux")
        ? "linux"
        : "linux";

  if (currentOS === "macos") {
    const codeToCopy =
      "brew tap 0PandaDEV/repo\nbrew install --cask vleer";
    navigator.clipboard.writeText(codeToCopy);
  }
}

useSeoMeta({
  title: "Vleer - Your library to everything.",
  description:
    "Explore high-quality music with Vleer a fast, simple, and reliable app, tailored to your preferences.",
  ogTitle: "Vleer - Your library to everything.",
  ogDescription:
    "Explore high-quality music with Vleer a fast, simple, and reliable app, tailored to your preferences.",
  ogImage: "/logo.png",
  ogUrl: "https://vleer.app/",
  twitterTitle: "Vleer - Your library to everything.",
  twitterDescription:
    "Explore high-quality music with Vleer a fast, simple, and reliable app, tailored to your preferences.",
  twitterImage: "/logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
    {
      rel: "canonical",
      href: "https://vleer.app/",
    },
  ],
});
</script>

<style lang="scss">
@import "~/assets/css/index.scss";
</style>
