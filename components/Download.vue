<template>
  <a href="https://github.com/vleerapp/Vleer" target="_blank">
    <div id="button-outter" class="button-outter">
      <div class="button-inner">
        Star it us Github
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
let rotation = 90;
let animationId: any = null;

const startAnimation = async () => {
  while (true) {
    document.documentElement.style.setProperty("--rotation", rotation + "deg")
    rotation += 2;
    await new Promise(resolve => animationId = setTimeout(resolve, 16))
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
  --rotation: 90deg;
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
</style>