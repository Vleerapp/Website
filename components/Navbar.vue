<template>
  <div class="navbar-container">
    <div class="navbar">
      <NuxtLink to="/" class="icon">
        <img alt="logo" src="~/assets/images/logo96x.webp">
        <p>Vleer</p>
      </NuxtLink>
      <div class="links">
        <a class="link plausible-event-name=Issues" href="https://github.com/Vleerapp/Vleer/issues">Issues</a>
        <NuxtLink class="link" to="/changelog">
          Changelog
        </NuxtLink>
        <a class="link plausible-event-name=Discord" href="https://discord.gg/invite/Y7SbYphVw9">Discord</a>
        <a class="link plausible-event-name=Twitter" href="https://x.com/vleerapp">Twitter</a>
      </div>
      <div class="download">
        <Download/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/css/navbar.scss';
</style>