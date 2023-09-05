<template>
  <NuxtLayout>
    <div class="hero">
      <h1 class="title">Enjoy music again with Vleer</h1>
      <h2 class="description">Discover a redefined way of listing to music, all conveniently accessible right at your
        fingertips</h2>
      <Download />
    </div>
    <div id="hero-img-container" class="hero-img-container">
      <img src="/hero.webp" alt="" id="hero-image" class="hero-image">
    </div>
    <div class="cards">
      <h1 class="cards-text">Superchare your experience with the features of Vleer</h1>
      <div class="card-grid">
        <div class="card">
          <div class="text">Full Control</div>
        </div>
        <div class="card">
          <div class="text">Thank you for choosing us</div>
        </div>
        <div class="card">
          <div class="text">Offline</div>
        </div>
        <div class="card">
          <div class="text">All formats</div>
        </div>
        <div class="card">
          <div class="text">Search</div>
        </div>
      </div>
    </div>
    <Ready />
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  methods: {
    updateHeight() {
      var image_container = document.getElementById("hero-img-container") as HTMLElement;

      if(document.body.offsetWidth <= 1200){
        image_container.style.height = (46 / 79) * (document.body.offsetWidth - 64) + "px";
      } else{
        image_container.style.height = "auto";
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateHeight);
  }
}
</script>

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
  padding-top: 180px;
}

.hero-image {
  max-width: 1185px;
  height: auto;
  width: 100%;
  outline: 1px solid #544d5e6b;
  outline-offset: 8px;
  border-radius: 22px;
  opacity: 75%;
}

.hero-img-container {
  margin-inline: 8px;
}

.cards {
  padding-top: 180px;
  max-width: 1200px;
  height: auto;
  width: 100%;
  border-radius: 22px;
  display: grid;
  justify-items: center;

  .cards-text {
    max-width: 900px;
    text-align: center;
    font-size: 50px;
    margin-bottom: 80px;
  }

  .card-grid {
    width: 1200px;
    height: 572px;
    display: grid;
    gap: 24px;
    grid-template-rows: 274px 274px;
    grid-template-columns: 384px 384px 384px;
    place-items: center;

    .card {
      outline: 1px solid #544d5e6b;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      border-radius: 24px;
      font-size: 30px;

      .text {
        /* margin-left: -40px;
        margin-top: -40px; */
        max-width: 80%;
      }

      &:nth-child(1) {
        background-image: url('/card1.webp');
      }

      &:nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        background-image: url('/card3.webp');
        font-size: 45px;
        text-align: center;

        .text {
          margin-left: 0px;
          margin-top: 0px;
          max-width: 80%;
        }
      }

      &:nth-child(3) {
        background-image: url('/card4.webp');
      }

      &:nth-child(4) {
        background-image: url('/card2.webp');
      }

      &:nth-child(5) {
        background-image: url('/card5.webp');
      }
    }
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

  .hero-image {
    outline-offset: 6px;
    border-radius: 10px;
  }
}
</style>
