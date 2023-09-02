<template>
  <NuxtLayout>
    <div class="hero">
      <h1 class="title">Enjoy music again with Vleer</h1>
      <h2 class="description">Discover a redefined way of listeing to music, all conveniently accessible right at your
        fingertips</h2>
      <Download />
    </div>
    <img src="/hero.svg" alt="" class="hero-image">
  </NuxtLayout>
</template>

<style lang="scss">
.title {
  font-family: Maax;
  font-size: 64px;
  max-width: 600px;
  text-align: center;
  line-height: 60px;
}

.description {
  color: #ABABAB;
  font-size: 16px;
  font-weight: normal;
  margin-top: 24px;
  margin-bottom: 32px;
  max-width: 370px;
  text-align: center;
}

.hero {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  margin-inline: 32px;
  padding-top: 180px;
}

.hero-image {
  max-width: 1185px;
  height: auto;
  width: 100%;
  padding-inline: 32px;
}

@media (max-width: 700px) {
  .title{
    font-size: 48px;
    line-height: 50px;
  }

  .hero{
    padding-top: 80px;
  }
}
</style>
