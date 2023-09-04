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
      <div v-if="isMenuOpen" class="hamburger-menu">
        <NuxtLink to="/" class="ham-link Home">Home</NuxtLink>
        <NuxtLink to="/about" class="ham-link About">About</NuxtLink>
        <NuxtLink to="/blog" class="ham-link Blog">Blog</NuxtLink>
        <NuxtLink to="/contact" class="ham-link Contact">Contact</NuxtLink>
      </div>
      <div class="nav-right nav-content">
        <NuxtLink to="/download" class="link btn download">Download</NuxtLink>
        <svg class="hammenu" width="26px" height="26px" viewBox="0 0 24 24" version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" @click="toggleMenu">
          <g id="vuesaxoutlinemenu">
            <path d="M24 0L24 0L24 24L0 24L0 0L24 0Z" id="vuesaxoutlinemenu" fill="none" stroke="none" />
            <g id="vuesaxoutlinemenu">
              <g id="menu">
                <path
                  d="M3 7.75C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25L21 6.25C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75L3 7.75Z"
                  id="Vector" fill="#FFFFFF" stroke="none" />
                <path
                  d="M3 12.75C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25L21 11.25C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75L3 12.75Z"
                  id="Vector" fill="#FFFFFF" stroke="none" />
                <path
                  d="M3 17.75C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25L21 16.25C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75L3 17.75Z"
                  id="Vector" fill="#FFFFFF" stroke="none" />
                <path d="M24 0L24 24L0 24L0 0L24 0Z" id="Vector" fill="none" fill-rule="evenodd" stroke="none" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default{
  data(){
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  // mounted(){
  //   document.addEventListener('click', (event) => {
  //     if (this.isMenuOpen = true) {
  //       console.log("true")
  //       // const menu = document.querySelector('.hamburger-menu');
  //       // if (menu && !menu.contains(event.target as Node) && this.isMenuOpen) {
  //       //   this.isMenuOpen = false;
  //       // }
  //     }
  //   });
  // }
}
</script>

<style lang="scss" scoped>
$background: #030303;
$small-text: #ababab;
$normal-text: #ffffff;
$card-outline: rgb(255 255 255 / .1);
$card-padding: .5rem;

.hamburger-menu {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  -o-backdrop-filter: blur(10px);
  filter: none !important;
  width: 100%;
  padding: 80px;
  padding-right: 32px;
  z-index: 10000;
  flex-direction: column;
  gap: 16px;
  text-align: right;
}

.navbar {
  height: 80px;
  position: fixed;
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
    padding-inline: 32px;
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
      transition: all .3s;
    }

    .link:hover {
      color: white;
      transition: all .3s;
    }

    .links {
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
      transition: all .3s;
    }

    .download:hover {
      background-color: #2c2c2c;
      transition: all .3s;
    }

    .hammenu {
      display: none;
      z-index: 10001;
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

@media (max-width: 700px) {

  .links,
  .download {
    display: none !important;
  }

  .hammenu {
    display: block !important;
  }
}
</style>
