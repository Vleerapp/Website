<template>
  <NuxtLayout>
    <div class="hero">
      <h1 class="title">Enjoy music again with Vleer</h1>
      <h2 class="description">Discover a redefined way of listeing to music, all conveniently accessible right at your fingertips</h2>
      <Download/>
    </div>
    <div class="img-border">
      <img src="/hero.png" alt="" class="hero-image">
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.title{
  font-family: Maax;
  font-size: 64px;
  max-width: 600px;
  text-align: center;
  line-height: 60px;
}

.description{
  color: #ABABAB;
  font-size: 16px;
  font-weight: normal;
  margin-top: 24px;
  margin-bottom: 32px;
  max-width: 370px;
  text-align: center;
}

.hero{
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}

.hero-image{
  max-width: 1185px;
}

.img-border{
  padding: 8px;
  border: 1px solid #544d5e6b;
  border-radius: 30px;
}
</style>
