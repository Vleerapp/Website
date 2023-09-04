<template>
  <div class="ready">
    <img src="/app logo big.webp" alt="" class="app-logo">
    <h1 class="ready-title">Ready to take off?</h1>
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

  .app-logo{
    width: 120px;
  }

  .ready-title{
    font-size: 48px;
    font-family: Maax;
  }
}
</style>