<template>
  <NuxtLayout>
    <div class="hero">
      <h1 class="title">Enjoy music again with Vleer</h1>
      <h2 class="description">Discover a redefined way of listeing to music, all conveniently accessible right at your
        fingertips</h2>
      <Download />
    </div>
    <div class="hero-img-container">
      <img src="/hero.png" alt="" id="hero-image" class="hero-image">
    </div>
    <div class="cards">
      <h1 class="cards-text">Superchare your experience with the features of Vleer</h1>
      <div class="card-grid">
        <div class="text">A</div>
      </div>
      <div class="card-grid">
        <div class="text">B</div>
      </div>
      <div class="card-grid">
        <div class="text">C</div>
      </div>
      <div class="card-grid">
        <div class="text">D</div>
      </div>
      <div class="card-grid">
        <div class="text">E</div>
      </div>
    </div>
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
  outline: 1px solid #544d5e6b;
  outline-offset: 8px;
  border-radius: 22px;
}

.hero-img-container {
  margin-inline: 40px;
}

.cards {
  padding-top: 180px;
  padding-bottom: 180px;
  max-width: 1185px;
  height: auto;
  width: 100%;
  border-radius: 22px;
  display: grid;
  justify-items: center;

  .cards-text {
    max-width: 900px;
    text-align: center;
    font-size: 50px;
    margin-bottom: 40px;
  }

  .cards-grid {
    width: 1200px;
    height: 572px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(384px, 2);
    grid-template-rows: repeat(274px, 3);
  }
}

@media (max-width: 1000px) {
  .hero-image {
    border-radius: 10px;
  }
}

@media (max-width: 700px) {
  .title {
    font-size: 48px;
    line-height: 50px;
  }

  .hero {
    padding-top: 80px;
  }

  .hero-img-container {
    margin-inline: 0px;
  }

  .hero-image {
    max-width: 1185px;
    height: auto;
    width: 100%;
    outline: 1px solid #544d5e6b;
    outline-offset: 8px;
    border-radius: 0px;
  }
}
</style>
