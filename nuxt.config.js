export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Procorex",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Encuentra las mejores herramientas para tu empresa"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/procorex-imagotipo.png" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/clickaway.js",
    "~/plugins/composition-api.js",
    "~/plugins/VueWait.js",
    "~/plugins/rich-text-renderer.js",
    "~/plugins/map.js",
    { src: "~/plugins/google-maps.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "storyblok-nuxt",
      {
        accessToken: process.env.VUE_APP_STORYBLOK,
        cacheProvider: "memory"
      }
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    GOOGLE_MAPS: process.env.VUE_APP_MAPS
  }
};
