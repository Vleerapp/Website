<template>
  <div class="navbar-container">
    <div class="navbar" :class="{ 'menu-open': menuOpen }">
      <div class="icon-container">
        <NuxtLink to="/" class="icon">
          <img alt="logo" src="~/assets/images/logo96x.webp">
          <p>Vleer</p>
        </NuxtLink>
        <div class="hamburger" @click="toggleMenu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="links">
        <a class="link plausible-event-name=Github" href="https://github.com/Vleerapp/" target="_blank">Github</a>
        <NuxtLink class="link" to="/changelog">
          Changelog
        </NuxtLink>
        <a class="link plausible-event-name=Discord" href="https://discord.gg/invite/Y7SbYphVw9"
          target="_blank">Discord</a>
        <a class="link plausible-event-name=Twitter" href="https://x.com/vleerapp" target="_blank">Twitter</a>
      </div>
      <div class="download">
        <Download />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const menuOpen = ref(false);
    const router = useRouter();

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenuOnOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.navbar')) {
        menuOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', closeMenuOnOutsideClick);
      router.beforeEach((to, from, next) => {
        menuOpen.value = false;
        next();
      });
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    });

    return {
      menuOpen,
      toggleMenu
    };
  }
});
</script>

<style scoped lang="scss">
@import '~/assets/css/navbar.scss';
</style>
