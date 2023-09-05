<template>
  <NuxtLayout>
    <div class="download-content">
      <div class="logo-container">
        <img src="/logo.webp" alt="" class="logo">
      </div>
      <div class="inner-content">
        <h1 class="download-title">Download our App</h1>
        <h2 class="download-description">Lighting fast Desktop experience on all platforms</h2>
        <a href="">
          <div id="button-outter" class="button-outter">
            <div class="button-inner-page">
              <img v-if="mac" class="button-inner-logo" src="/apple.svg" alt="">
              <img v-if="win" class="button-inner-logo" src="/windows.svg" alt="">
              Download
            </div>
          </div>
        </a>
      </div>
      <p v-if="mac" class="tag">Compatible with Apple Silicon and Intel</p>
      <p v-if="win" class="tag">Compatible with Windwos 11/10</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
let rotation = 90;
let animationId: any = null;

const startAnimation = async () => {
  while (true) {
    document.documentElement.style.setProperty("--rotation", rotation + "deg")
    rotation += 1;
    await new Promise(resolve => animationId = setTimeout(resolve, 7))
    if (rotation >= 360) rotation = 0
  }
}

onMounted(startAnimation)

onUnmounted(() => {
  clearTimeout(animationId);
})
</script>

<script lang="ts">
export default{
  data() {
    return{
      mac: false,
      win: true
    }
  },
  mounted() {
    var platform = navigator.platform;
    console.log(platform.toLowerCase())
    if (platform.toLowerCase().includes("mac")) {
      this.mac = true
      this.win = false
    }
    if (platform.toLowerCase().includes("win")) {
      this.win = true
      this.mac = false
    }
  }
}
</script>

<style lang="scss">
:root {
  --rotation: 90deg;
}

.button-outter {
  background: linear-gradient(var(--rotation), #ffffff 40%, #000000 60%);
  width: 206px;
  height: 50px;
  border-radius: 12px;
  padding: 1px;
  position: relative;

  .button-inner-page {
    background-color: black;
    width: 100%;
    height: 100%;
    border-radius: 11px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
  
    .button-inner-logo{
      width: 24px;
    }
  }
}


////////////////////////////

.download-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 523px;

  .logo-container{
    height: 260px;
    margin-bottom: 48px;
  }

  .logo {
    max-width: 260px;
    height: auto;
    border-radius: 260px;
  }

  .inner-content {
    gap: 24px;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-inline: 32px;


    .download-title {
      font-weight: 400;
      font-size: 48px;
      font-family: Maax-Regular;
    }

    .download-description {
      font-size: 16px;
      font-family: Maax-Regular;
      color: #ABABAB;
    }
  }

  .tag {
    margin: 16px;
    font-size: 12px;
    color: #ABABAB;
  }
}

@media (max-height: 750px) {
  .download-content {
    position: relative;
    top: 300px;
  }
}
</style>
