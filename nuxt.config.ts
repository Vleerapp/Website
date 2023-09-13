// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-simple-sitemap", "@nuxtjs/robots"],
  site: {
    url: "https://vleer.app",
  },
  app: {
    head: {
      title: "Vleer",
      script:
        process.env.NODE_ENV === "production"
          ? [
              {
                src: "https://umami-pandadev.vercel.app/script.js",
                async: true,
                "data-website-id": "dce944c8-095d-4019-90ec-8ea131c78d98",
              },
            ]
          : [],
    },
  },
});
