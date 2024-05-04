// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap", "nuxt-schema-org"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "PandaDEV",
      script:
        process.env.NODE_ENV === "production"
          ? [
            {
              src: "https://plausible.pandadev.net/js/script.outbound-links.tagged-events.js",
              defer: true,
              "data-domain": "vleer.app",
            },
          ]
          : [],
    },
  },
  site: {
    url: "https://vleer.app",
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Vleer',
      url: 'https://vleer.app',
      logo: 'https://vleer.app/logo.png'
    }
  }
})
