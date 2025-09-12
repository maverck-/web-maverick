export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    }
  },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "@nuxtjs/device"
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
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
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
