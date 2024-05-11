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

<script>
import { $fetch } from "ofetch";

export default {
  data() {
    return {
      version: "v0.0.0",
      os: "os 0+",
      install: "",
    };
  },
  methods: {
    async init() {
      const os = window.navigator.userAgent.toLowerCase().includes("mac")
        ? "macos"
        : window.navigator.userAgent.toLowerCase().includes("win")
        ? "windows"
        : window.navigator.userAgent.toLowerCase().includes("linux")
        ? "linux"
        : "linux";

      this.os =
        os == "macos"
          ? "macOS 10.15+"
          : os == "windows"
          ? "win 7+"
          : "webkit2gtk 4.1+";

      /////////////

      if (os == "macos") {
        this.install = "Install with homebrew";
      }

      /////////////

      const version = await $fetch("/api/latest");
      this.version = version.version;
    },
    copyInstall() {
      if (this.install == "") return;

      const os = window.navigator.userAgent.toLowerCase().includes("mac")
        ? "macos"
        : window.navigator.userAgent.toLowerCase().includes("win")
        ? "windows"
        : window.navigator.userAgent.toLowerCase().includes("linux")
        ? "linux"
        : "linux";

      if (os == "macos") {
        const codeToCopy =
          "brew tap 0PandaDEV/repo\nbrew install --cask vleer@beta";
        navigator.clipboard.writeText(codeToCopy);
      }
    },
  },
  async mounted() {
    await this.init();
  },
};
</script>

<script setup>
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
