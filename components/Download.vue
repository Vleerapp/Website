<template>
  <div id="button-outter" class="button-outter">
    <div class="button-inner">
      Download
    </div>
  </div>
</template>

<script setup lang="ts">
var rotation = 0

onMounted(async () => {
  while (true) {
    document.documentElement.style.setProperty("--rotation", rotation + "deg")
    rotation += 1;
    await new Promise(resolve => setTimeout(resolve, 7))
    if (rotation >= 360) rotation = 0
  }
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