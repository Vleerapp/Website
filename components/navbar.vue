<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="nav-left nav-content">
        <NuxtLink to="/" alt="" class="nav-image"></NuxtLink>
        <div class="nav-left-text">
          Vleer
        </div>
      </div>
      <div class="links">
        <NuxtLink to="/" class="link Home">Home</NuxtLink>
        <NuxtLink to="/about" class="link About">About</NuxtLink>
        <NuxtLink to="/blog" class="link Blog">Blog</NuxtLink>
        <NuxtLink to="/contact" class="link Contact">Contact</NuxtLink>
      </div>
      <div class="nav-right nav-content">
        <NuxtLink to="download" class="link btn download">Download</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
$background: #030303;
$small-text: #ababab;
$normal-text: #ffffff;
$card-outline: rgb(255 255 255 / .1);
$card-padding: .5rem;

.navbar {
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(40px);
  color: $normal-text;

  .navbar-inner {
    max-width: 1200px;
    width: 100%;
    margin: 20px;
    margin-inline: 0;
    padding-inline: 30px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .nav-image {
      height: 40px;
      width: 40px;
      // filter: grayscale(100%) brightness(200%);
      border: 1px solid $card-outline;
      border-radius: 12px;
      transition: .2s;
      background-image: url('/logo.png');
      background-position: 50% 50%;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    .nav-image:hover {
      scale: 1.2;
      border: 1px solid transparent;
    }

    // .nav-image:focus {
    //   background-size: 90%;
    //   scale: 1;
    //   border: 1px solid $card-outline;
    // }

    .nav-left-text {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 20px;
      line-height: 2rem;
    }

    .link {
      text-decoration: none;
      color: $small-text;
      font-size: 14px;
      line-height: 1.5rem;
      font-weight: 400;
      cursor: pointer;
    }

    .links{
      display: flex;
      gap: 32px;
    }

    .download {
      text-decoration: none;
      color: $small-text;
      font-size: 14px;
      line-height: 1.5rem;
      font-weight: 400;
      padding: 8px;
      padding-inline: 24px;
      width: 116px;
      height: 36px;
      display: grid;
      place-items: center;
      cursor: pointer;
    }

    .btn {
      background: #212121;
      border: 1px solid $card-outline;
      padding-inline: 16px;
      color: $normal-text;
      font-size: .875rem;
      line-height: 1rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
