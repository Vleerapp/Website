<template>
  <div class="ready">
    <div class="ready-image-container">
      <nuxt-img src="/app-logo-big.webp" alt="" class="app-logo" />
    </div>
    <h3 class="ready-title">Ready to take off?</h3>
    <Download/>
  </div>
</template>

<style lang="scss">
.ready{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin: calc((100vh - 270px) / 4);
  margin-inline: 0;
  text-align: center;

  .ready-image-container{
    height: 120px;
  }

  .app-logo{
    width: 120px;
  }

  .ready-title{
    font-size: 48px;
    font-family: Maax;
  }
}
</style>