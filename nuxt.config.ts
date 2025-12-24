export default defineNuxtConfig({
  compatibilityDate: '2024-12-24',
  future: {
    compatibilityVersion: 4
  },
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@nuxtjs/device"
  ],
  icon: {
    serverBundle: 'auto',
  },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "es",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-white dark:bg-black min-h-screen",
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/avatar.png'
        }
      ]
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      }
    }
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
