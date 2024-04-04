// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Vleer",
      script: [
        ...(process.env.NODE_ENV === "production"
          ? [
              {
                src: "https://plausible.pandadev.net/js/script.outbound-links.js",
                defer: true,
                "data-domain": "vleer.app",
              },
            ]
          : []),
      ],
    },
  },
})
