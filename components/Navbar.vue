<template>
  <div class="navbar-container">
    <div class="navbar">
      <NuxtLink to="/" class="icon">
        <img src="~/assets/images/logo96x.png">
        <p>Vleer</p>
      </NuxtLink>
      <div class="links">
        <a class="link" href="https://github.com/Vleerapp/Vleer/issues">Issues</a>
        <NuxtLink class="link" to="/changelog">
          Changelog
        </NuxtLink>
        <a class="link" href="https://discord.gg/invite/Y7SbYphVw9">Discord</a>
        <a class="link" href="https://x.com/vleerapp">Twitter</a>
      </div>
      <div class="download">
        <Download/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/css/navbar.scss';
</style>