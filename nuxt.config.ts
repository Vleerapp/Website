// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtseo/module", "@nuxt/image"],
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
  site: {
    url: "https://vleer.app",
    name: "Vleer",
    description:
      "Discover a redefined way of listing to music, all conveniently accessible right at your fingertips",
    defaultLocale: "en",
    identity: {
      type: "Organization",
    },
    twitter: "@vleerapp",
    trailingSlash: true,
  },
  app: {
    head: {
      titleTemplate: "%siteName %separator %s",
      templateParams: {
        separator: "-",
      },
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
