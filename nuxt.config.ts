// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-simple-sitemap", "@nuxtjs/robots"],
  image: {
    quality: 80,
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 3072,
    },
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
