export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Beingmomen",
    htmlAttrs: {
      lang: "en",
      dir: "ltr",
      class: "english-dir",
    },
    bodyAttrs: {
      class: "light-layout",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/code.png" },
      { rel: "stylesheet", type: "image/x-icon", href: "/img/code.png" },
    ],
    script: [
      {
        hid: "tawk.to",
        src: "https://embed.tawk.to/64b6839d94cf5d49dc6453f0/1h5kf47v7",
        defer: true,
      },
    ],
  },

  pageTransition: {
    name: "my-page",
    mode: "out-in",
    beforeEnter(el) {
      // console.warn('Before enter...');
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/bootstrap.min.css",
    "~/@core/scss/core.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
    // '~/assets/css/bootstrap.rtl.min.css',
    "~/assets/scss/rtl.scss",
    "~/assets/scss/style.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/settings/fontawesome.js",
    "~/plugins/settings/vee-validate.js",
    "~/plugins/settings/layout.js",
    "~/plugins/mixins/dashboard/title.js",
    "~/plugins/mixins/dashboard/projects.js",
    "~/plugins/mixins/dashboard/skills.js",
    "~/plugins/mixins/dashboard/messages.js",
    "~/plugins/mixins/dashboard/hireMe.js",
    "~/plugins/mixins/dashboard/companies.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/i18n",
    "nuxt-vue-select",
    "cookie-universal-nuxt",
    [
      "vue-toastification/nuxt",
      {
        timeout: 4000,
        draggable: false,
        position: "top-center",
      },
    ],
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyD9L-CLiD5t7FgnWaldEPT5-yuJ4xhKt0o",
          authDomain: "beingmomen.firebaseapp.com",
          databaseURL: "https://beingmomen-default-rtdb.firebaseio.com",
          projectId: "beingmomen",
          storageBucket: "beingmomen.appspot.com",
          messagingSenderId: "863482997017",
          appId: "1:863482997017:web:f06f4d0ebc89c3c84f3d88",
          measurementId: "G-5TGYRK0S9B",
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true,
        },
      },
    ],
  ],

  i18n: {
    lazy: true,
    langDir: "locales/",
    // strategy: 'no_prefix',   use it when tou won’t prefix in route
    locales: [
      { code: "ar", iso: "ar-EG", file: "ar", dir: "rtl" },
      { code: "en", iso: "en-US", file: "en", dir: "ltr" },
    ],
    defaultLocale: "en",
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "idToken",
        },
        endpoints: {
          login: {
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE`,
            method: "post",
          },
          user: false,
        },
      },
    },
    redirect: {
      login: "/dashboard",
      logout: "/login",
      callback: "/dashboard",
      home: "/dashboard",
    },
  },

  pwa: {
    icon: {
      fileName: "code.png",
    },
    manifest: {
      name: "Abdelmo’men Portfolio",
      short_name: "Abdelmo’men",
      lang: "en",
      display: "standalone",
    },
  },

  generate: {
    fallback: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    login:
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE",
    register:
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE",
  },
};
