<template>
  <NuxtLayout>
    <div class="hero">
      <h1 class="title">Enjoy music again with Vleer</h1>
      <h2 class="description">Discover a redefined way of listeing to music, all conveniently accessible right at your
        fingertips</h2>
      <Download />
    </div>
    <div class="hero-img-container">
      <img :style="{ 'border-radius': borderRadius }" src="/hero.png" alt="" id="hero-image" class="hero-image">
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  data() {
    return {
      borderRadius: "22px"
    }
  },
  methods: {
    updateBorderRadius() {
      const heroImage = document.getElementById("hero-image") as HTMLImageElement;
      this.borderRadius = (heroImage.offsetWidth * 0.02) + 'px';
    }
  },
  mounted() {
    this.updateBorderRadius();
    window.addEventListener('resize', this.updateBorderRadius);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateBorderRadius);
  }
}
</script>

<style lang="scss">
.title {
  font-family: Maax;
  font-size: 64px;
  max-width: 600px;
  text-align: center;
  line-height: 60px;
}

.description {
  color: #ABABAB;
  font-size: 16px;
  font-weight: normal;
  margin-top: 24px;
  margin-bottom: 32px;
  max-width: 370px;
  text-align: center;
}

.hero {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  margin-inline: 32px;
  padding-top: 180px;
}

.hero-image {
  max-width: 1185px;
  height: auto;
  width: 100%;
  outline: 1px solid #544d5e6b;
  outline-offset: 8px;
  border-radius: 22px;
}

.hero-img-container {
  margin-inline: 32px;
}

@media (max-width: 700px) {
  .title {
    font-size: 48px;
    line-height: 50px;
  }

  .hero {
    padding-top: 80px;
  }
}
</style>
