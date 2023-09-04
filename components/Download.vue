<template>
  <nuxt-link to="/download">
    <div id="button-outter" class="button-outter">
      <div class="button-inner">
        Download
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

let rotation = 0;
let animationId = null;

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

<style lang="scss">
:root {
  --rotatio: 0deg;
}

.button-outter {
  background: linear-gradient(var(--rotation), #ffffff 40%, #000000 60%);
  width: 206px;
  height: 50px;
  border-radius: 12px;
  padding: 1px;
  position: relative;
}

.button-inner {
  background-color: black;
  width: 100%;
  height: 100%;
  border-radius: 11px;
  display: grid;
  place-items: center;
}

.particle-canvas {
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
}
</style>