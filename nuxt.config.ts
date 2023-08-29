// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-simple-sitemap", "@nuxtjs/robots"],
  app: {
    head: {
      title: "Vleer",
    }
  }
})
