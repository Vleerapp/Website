<template>
  <NuxtLayout>
    <div class="about-container">
      <div class="about">
        <h1 class="about-title">The Story of Vleer</h1>
        <p class="text">Once upon a time, in the world of digital tunes and streaming melodies, two friends embarked on a
          mission. <a href="https://pandadev.net">PandaDEV</a> and <a href="https://waradu.dev">Waradu</a> had a simple dream – to create an uncomplicated music app that wouldn't break the
          bank. You see, PandaDEV was tired of wrestling with complicated music apps that demanded hard-earned money.
          <br><br>
          One day, PandaDEV decided to take matters into his own hands. He wanted to craft a music player that was easy to
          use and, more importantly, free. His trusty partner, Waradu, joined the cause, and together they set out on an
          unexpected journey.
          <br><br>
          Building Vleer was no walk in the park, but their unwavering determination attracted a community of like-minded
          individuals. Strangers and friends joined hands to redefine how we all experience music.
          <br><br>
          As Vleer's direction shifted dramatically, it became more than just an app; it became a movement. PandaDEV and
          Waradu found themselves at the helm of an extraordinary endeavor. With each line of code, every bit of feedback,
          and shared ideas, Vleer transformed into something they could have never anticipated.
          <br><br>
          Their mission remained clear: simplicity and accessibility for everyone. Vleer would be open-source, a symbol of
          transparency and trust. It would be a haven for music enthusiasts, a place where the joy of sound knew no
          limits.
          <br><br>
          And so, here we are, united by Vleer, bonded by our love for music and the dream of a simpler way to experience
          it. As we journey forward, let the melodies guide us, and let the story of Vleer inspire us to create something
          beautiful together.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Vleer - The Story about us",
  description: 'Learn more about us the creators of Vleer',
  ogTitle: 'Vleer - The Story about us',
  ogDescription: 'Learn more about us the creators of Vleer',
  ogImage: '/logo.webp',
  ogUrl: 'https://vleer.app',
  twitterTitle: 'Vleer - The Story about us',
  twitterDescription: 'Learn more about us the creators of Vleer',
  twitterImage: '/logo.webp',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://vleer.app/about',
    },
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style lang="scss">
.about-container {
  max-width: 1136px;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 32px;

  .about {
    display: flex;
    text-align: left;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    gap: 16px;

    .text {
      color: #bfbfbf;
    }

    .about-title {
      font-size: 48px;
      text-align: left;
    }
  }
}

@media (max-width: 700px) {
  .about-container{
    margin-top: 40px;
  }
}
</style>
