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
      <img alt="hero-bg" src="~/assets/images/hero-bg.svg" />
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
        <h3 class="text-h3">Listen without any inerruptions.</h3>
        <p class="text-p">One application, all you every need.</p>
      </div>
      <div class="wrapper">
        <div class="image-outer">
          <div class="image-inner">
            <div class="image-content">

            </div>
            <img alt="image" loading="lazy" src="~/assets/images/image.webp" />
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
    <img alt="footer-image" src="~/assets/images/footer.svg" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRequestHeaders } from '#app';
import { useAsyncData } from '#app';

const cache = useState('latestCache', () => null);

if (!cache.value) {
  const { data } = await useAsyncData('latest', () => $fetch('/api/latest'));
  cache.value = data.value;
}

const version = ref(cache.value.version);

const headers = useRequestHeaders(['user-agent']);
const userAgent = headers['user-agent'] || (typeof window !== 'undefined' ? window.navigator.userAgent : '');
const os = ref('');

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

const install = computed(() => {
  return os.value === "macos" ? "Install with homebrew" : "";
});

function copyInstall() {
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
      "brew tap 0PandaDEV/repo\nbrew install --cask vleer@beta";
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
