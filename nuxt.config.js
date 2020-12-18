export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'BitClass',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Vinicius Pereira' },
      { name: 'robots', content: 'index, follow' },
      {
        hid: 'description',
        name: 'description',
        content:
          'O BitClass é uma plataforma onde estão todos os vídeos postados no YouTube pela equipe da iniciativa CodeLab Bits no canal do grupo de extensão USPCodeLab, que é sediado no IME-USP.',
      },
      {
        name: 'keywords',
        content:
          'BitClass, BitsClass, Bits, UCL, USPCodeLab, USPCodeLabs, CodeLab, CodeLabs, IME, USP',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/global.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'vue-scrollto/nuxt',
      {
        container: 'body',
        duration: 500,
        easing: 'ease',
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true,
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  vuetify: {
    icons: {
      iconfont: 'faSvg',
    },
  },

  fontawesome: {
    component: 'faIcon',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    fallback: true,
  },
}
