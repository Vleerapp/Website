<template>
  <Navbar />
  <div class="content">
    <slot />
  </div>
</template>

<style lang="scss">
.content{
  justify-content: center;
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
  margin-inline: 32px;
}
</style>