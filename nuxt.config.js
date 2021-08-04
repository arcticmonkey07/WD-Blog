export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My Web Development Blog'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
      }
    ]
  },

  loading: {
    color: 'red',
    height: '5px'
  },

  // /*
  // ** Set ssr to false to see the loading indicator - https://nuxtjs.org/docs/2.x/features/rendering-modes
  // */
  // ssr: false,

  // /*
  // ** modifying the loading indicator for spa  - https://nuxtjs.org/docs/2.x/features/loading
  // */
  // loadingIndicator: {
  //   name: 'chasing-dots',
  //   color: 'purple',
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  //
  env: {
    baseUrl:
      process.env.BASE_URL ||
      'https://nuxt-blog-cd86c-default-rtdb.europe-west1.firebasedatabase.app'
  }
};
