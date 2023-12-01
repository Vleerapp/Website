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
      script: [
        {
          src: "https://cdn.obvtiger.ch/jsdlrv/locomotive-scroll.min.js",
          async: true,
          defer: true,
        },
        ...(process.env.NODE_ENV === "production"
          ? [
              {
                src: "https://plausible.pandadev.net/js/script.js",
                defer: true,
                "data-domain": "vleer.app",
              },
            ]
          : []),
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.obvtiger.ch/jsdlrv/locomotive-scroll.min.css",
        },
      ],
    },
  },
});
