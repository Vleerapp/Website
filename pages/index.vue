<template>
  <div class="hero">
    <div class="hero-text">
      <h1>Your library to everything.</h1>
      <p>Explore high-quality music with Vleer a fast, simple, and reliable app, tailored to your preferences.</p>
    </div>
    <div class="hero-img">
      <img src="~/assets/images/hero-bg.svg" alt="">
    </div>
    <div class="hero-download">
      <Download class="download" />
      <div class="info">
        <p>{{ version }}</p>
        <p>{{ os }}</p>
        <p id="install" @click="copyInstall" v-if="install != ''">{{ install }}</p>
      </div>
    </div>
  </div>
  <div class="image-section">
    <div class="container">
      <div class="text">
        <h4>Listen wihout any inerruptions.</h4>
        <p>One application, all you every need.</p>
      </div>
      <div class="wrapper">
        <div class="image-outer">
          <div class="image-inner">
            <img src="~/assets/images/image.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="before-footer">
    <div class="text">
      <h4>Take the easy way.</h4>
      <p>Download and use Vleer for free.</p>
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
    <img src="~/assets/images/footer.svg" alt="">
  </div>
</template>

<script>
import { $fetch } from 'ofetch';

export default {
  data() {
    return {
      version: "v0.0.0",
      os: "os 0+",
      install: ""
    }
  },
  methods: {
    async init() {
      const os = window.navigator.userAgent.toLowerCase().includes('mac') ? 'macos' :
      window.navigator.userAgent.toLowerCase().includes('win') ? 'windows' :
      window.navigator.userAgent.toLowerCase().includes('linux') ? 'linux' : 'linux';
      
      console.log(os);
      
      this.os = os == 'macos' ? "macOS 10.15+" : os == 'windows' ? "win 7+" : "webkit2gtk 4.1+";
      
      /////////////
      
      if (os == "macos") {
        this.install = "Install with homebrew"
      }

      /////////////

      const version = await $fetch('/api/version');
      this.version = version.version;
    },
    copyInstall() {
      if (this.install == "") return;
      
      const os = window.navigator.userAgent.toLowerCase().includes('mac') ? 'macos' :
        window.navigator.userAgent.toLowerCase().includes('win') ? 'windows' :
          window.navigator.userAgent.toLowerCase().includes('linux') ? 'linux' : 'linux';

      if (os == "macos") {
        const codeToCopy = "brew tap 0PandaDEV/repo\nbrew install --cask vleer@beta";
        navigator.clipboard.writeText(codeToCopy);
      }
    }
  },
  async mounted() {
    await this.init();

  }
}
</script>

<style lang="scss">
@import '~/assets/css/index.scss';
</style>