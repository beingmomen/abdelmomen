// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title:
        "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري | Abdelmomen Elshatory",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "الموقع الرسمي للمهندس عبدالمؤمن الشطوري - مطور واجهات أمامية متخصص في Vue.js و Nuxt.js. خبرة في تطوير تطبيقات ويب تفاعلية عالية الأداء | Official website of Abdelmomen Elshatory - Frontend Developer",
        },
        {
          name: "keywords",
          content:
            "عبدالمؤمن الشطوري, beingmomen, الشطورى, Elshatory, Abdelmomen Elshatory, مطور واجهات أمامية, Vue.js, Nuxt.js, تطوير ويب, مبرمج, frontend developer",
        },
        { name: "google-site-verification", content: "81yw9t6e3WHEXdyKeGn-9UWQys3yharvd3GOdNTvTqo" },
        { name: "author", content: "Abdelmomen Elshatory" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "googlebot", content: "index, follow" },
      ],
      htmlAttrs: {
        class: "",
        lang: "ar",
        dir: "rtl",
      },
      link: [
        {
          rel: "icon",
          type: "image/webp",
          href: `${process.env.CLOUDINARY_URL}beingmomen/xhjsrjkz4pfcsworh2mt`,
        },
        {
          rel: "canonical",
          href: "https://beingmomen.com",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: false,
    },
  },

  devtools: { enabled: true },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/cloudinary",
    "@vite-pwa/nuxt",
    "nuxt-booster",
    "nuxt-delay-hydration",
    "@nuxtjs/fontaine",
    "@vueuse/motion/nuxt",
    "@nuxtjs/seo",
  ],

  // site: {
  //   url: 'https://beingmomen.com',
  //   name: 'الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري | Abdelmomen Elshatory',
  //   description: 'عبدالمؤمن الشطوري، مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js',
  //   defaultLocale: 'ar'
  // },

  pwa: {
    manifest: {
      name: "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري | Abdelmomen Elshatory",
      short_name: "عبدالمؤمن الشطوري",
      description: "Frontend Developer - Abdelmomen Elshatory",
      theme_color: "#000000",
      lang: "ar",
      icons: [
        {
          src: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_auto,w_64,h_64,c_fill/v1729081164/beingmomen/edisxdkamb8dn3z0bhez.webp",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_auto,w_144,h_144,c_fill/v1729081164/beingmomen/edisxdkamb8dn3z0bhez.webp",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_auto,w_192,h_192,c_fill/v1729081164/beingmomen/edisxdkamb8dn3z0bhez.webp",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_auto,w_512,h_512,c_fill/v1729081164/beingmomen/edisxdkamb8dn3z0bhez.webp",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // debug: process.env.NODE_ENV === "development",
    mode: "mount",
  },

  booster: {
    // @ts-ignore
    detection: {
      performance: true,
      browserSupport: true,
    },

    performanceMetrics: {
      // @ts-ignore
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
    },

    // @ts-ignore
    targetFormats: ["webp", "avif", "jpg|jpeg|png|gif"],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: "0%",
      asset: "0%",
    },
  },

  cloudinary: {
    cloudName: "dyqfclwdk",
    uploadPreset: "beingmomen",
  },

  css: [],

  imports: {
    dirs: [],
  },

  image: {
    // inject: true,
    quality: 80,
    cloudinary: {
      baseURL: process.env.CLOUDINARY_URL,
    },
    dir: "assets",
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      "4k": 1921,
    },

    domains: ["img.youtube.com", "i.vimeocdn.com"],

    alias: {
      youtube: "https://img.youtube.com",
      vimeo: "https://i.vimeocdn.com",
    },
  },

  ui: {
    global: true,
  },

  colorMode: {
    preference: "dark",
  },

  runtimeConfig: {
    public: {
      logo: process.env.LOGO,
      baseURL: process.env.BASE_URL,
    },
  },

  devServer: {
    port: 9731,
  },

  compatibilityDate: "2024-08-30",

  // Enable Nuxt's experimental tree-shaking
  experimental: {
    viewTransition: true,
    treeshakeClientOnly: true,
  },

  vite: {
    build: {
      cssCodeSplit: true, // Split CSS into chunks
      rollupOptions: {
        output: {
          manualChunks: {
            // Group vendor modules into a separate chunk
            vendor: [],
          },
        },
      },
    },
    // Enable CSS optimization
    css: {
      postcss: {
        plugins: [
          require("postcss-import"),
          // require('tailwindcss'),
          // require('autoprefixer'),
        ],
      },
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  build: {},

  sourcemap: {
    server: true,
    client: true,
  },
});
