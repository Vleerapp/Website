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
  margin-top: 260px;
  flex-direction: column;
  align-items: center;
}
</style>