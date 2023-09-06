<template>
  <NuxtLayout>
    <div class="hero">
      <h1 class="title">Enjoy music again with Vleer</h1>
      <h2 class="description">
        Discover a redefined way of listing to music, all conveniently
        accessible right at your fingertips
      </h2>
      <Download />
    </div>
    <div id="hero-img-container" class="hero-img-container">
      <img
        :style="{ height: height + 'px', width: width + 'px' }"
        src="/hero.webp"
        alt=""
        id="hero-image"
        class="hero-image"
      />
    </div>
    <div class="cards">
      <h1 class="cards-text">
        Superchare your experience with the features of Vleer
      </h1>
      <div class="card-grid">
        <div class="card">
          <div class="soundwave3"></div>
          <div class="text">Full Control</div>
        </div>
        <div class="card">
          <div class="soundwave2"></div>
          <div class="text">Thank you for choosing us</div>
          <div class="soundwave1"></div>
        </div>
        <div class="card">
          <div class="text">Offline</div>
        </div>
        <div class="card">
          <div class="text">All formats</div>
        </div>
        <div class="card">
          <div class="soundwave1"></div>
          <div class="text">Search</div>
        </div>
      </div>
    </div>
    <Ready />
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  data() {
    return {
      height: (46 / 79) * (document.body.offsetWidth - 64),
      width: document.body.offsetWidth - 64,
    };
  },
  methods: {
    updateHeight() {
      if (document.body.offsetWidth <= 1200) {
        this.height = (46 / 79) * (document.body.offsetWidth - 64);
        this.width = document.body.offsetWidth - 64;
      } else {
        this.height = 690;
        this.width = 1185;
      }
    },
  },
  mounted() {
    if (document.body.offsetWidth <= 1200) {
      this.height = (46 / 79) * (document.body.offsetWidth - 64);
      this.width = document.body.offsetWidth - 64;
    } else {
      this.height = 690;
      this.width = 1185;
    }
    window.addEventListener("resize", this.updateHeight);
  },
};
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
  color: #ababab;
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
    grid-template-rows: auto auto;
    grid-template-columns: 384px 384px 384px;
    place-items: center;

    .card {
      position: relative;
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
        z-index: 1;
      }

      &:nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        font-size: 45px;
        text-align: center;

        .text {
          margin-left: 0px;
          margin-top: 0px;
          max-width: 80%;
        }
      }
    }
  }
}

@media (min-width: 1248px) {
  .soundwave {
    display: none;
  }

  .card:nth-child(1) {
    background-image: url("/card1.webp");
  }

  .card:nth-child(2) {
    background-image: url("/card3.webp");
  }

  .card:nth-child(3) {
    background-image: url("/card4.webp");
  }

  .card:nth-child(4) {
    background-image: url("/card2.webp");
  }

  .card:nth-child(5) {
    background-image: url("/card5.webp");
  }
}

@media (max-width: 1248px) {
  .card-grid {
    width: 100% !important;
    height: 870px !important;
    grid-template-rows: 274px 274px 274px !important;
    grid-template-columns: calc(50% - 12px) calc(50% - 12px) !important;
  }

  .card {
    background-size: cover;
    overflow: hidden;
  }

  .soundwave1 {
    width: 274px;
    position: absolute;
    background-image: url("/sound-wave.webp");
    background-size: 385px;
    background-repeat: no-repeat;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 0;
    background-position: 70px 64px !important;

    &:nth-child(1) {
      background-position: 70px -236px !important;
    }

    &:nth-child(2) {
      background-position: 70px 64px !important;
    }
  }

  .soundwave3 {
    width: 274px;
    position: absolute;
    background-image: url("/sound-wave.webp");
    background-size: 385px;
    background-repeat: no-repeat;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
    rotate: 180deg;
    background-position: 80px -230px;
  }

  .soundwave2 {
    width: 274px;
    position: absolute;
    background-image: url("/sound-wave.webp");
    background-size: 385px;
    background-repeat: no-repeat;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
    rotate: 180deg;
    background-position: 80px 70px;
  }

  .card:nth-child(1) {
    grid-row: 1/1 !important;
    grid-column: 1/1 !important;
    background-image: url("/card1-half.webp");
  }

  .card:nth-child(2) {
    grid-row: 2/2 !important;
    grid-column: 1/3 !important;
    background-image: url("/card3-half.webp");

    .text {
      width: 400px;
    }
  }

  .card:nth-child(3) {
    grid-row: 1/1 !important;
    grid-column: 2/2 !important;
    background-image: url("/card4-half.webp");
  }

  .card:nth-child(4) {
    background-image: url("/card2-half.webp");
  }

  .card:nth-child(5) {
    background-image: url("/card5-half.webp");
  }
}

@media (max-width: 900px) {
  .soundwave1 {
    background-size: 300px;
    background-position: 130px 130px !important;

    &:nth-child(1) {
      display: none;
    }
  }

  .soundwave3 {
    display: none;
  }

  .soundwave2{
    background-size: 300px;
    background-position: 130px 130px;
  }

  .card-grid {
    width: 100% !important;
    height: 1370px !important;
    grid-template-rows: repeat(274px, 5) !important;
    grid-template-columns: 100% !important;

    .card {
      height: 274px !important;
      grid-column: 1/2 !important;
      grid-row: auto !important;

      &:nth-child(2) {
        .text {
          font-size: 32px;
          max-width: 250px !important;
        }
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
