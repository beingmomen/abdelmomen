// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: process.env.BROWSER_TITLE,
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://upload-widget.cloudinary.com/global/all.js' },
      ],
      link: [{ rel: 'icon', type: 'image/svg', href: `/images/${process.env.LOGO}.svg` }]

    }
  },
  css: [
    '~/assets/style.scss'
  ],

  imports: {
    dirs: ['stores'],
  },


  modules: [
    '@nuxt/image-edge',
    '@nuxthq/ui',
    '@pinia/nuxt',
    'nuxt-icons',
    'nuxt-icon',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@tailvue/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Nunito': true,
        'Shrikhand': true,
        'Courgette': true,
        download: true,
        inject: true
      }
    }]
  ],

  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },

  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default 


    lazy: true,
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.json'
      }
    ],
    defaultLocale: 'en',
  },

  ui: {
    icons: 'all'
  },

  colorMode: {
    preference: 'light' // disable system
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },




  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_ACCESS_REFRESH_TOKEN_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    jwtCookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN,




    public: {
      // Cloudinary
      cloudinaryCloudName: process.env.CLOUD_NAME,
      cloudinaryUploadPreset: process.env.UPLOAD_PRESET,

      // Site
      siteTitle: process.env.SITE_TITLE,
      logo: process.env.LOGO
    }
  }
})
