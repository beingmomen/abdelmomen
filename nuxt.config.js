export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Abdelmo’men',
        htmlAttrs: {
            lang: 'en',
            dir: "",
            class: ''
        },
        bodyAttrs: {
            class: 'dark-layout'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/code.png' },
            { rel: 'stylesheet', type: 'image/x-icon', href: '/code.png' }
        ],
        script: [
            {
                body: true,
                src: "https://apps.elfsight.com/p/platform.js",
            },
            // {
            //     body: true,
            //     src: "https://apps.elfsight.com/p/platform.js",
            // },

        ],
    },

    pageTransition: {
        name: 'my-page',
        mode: 'out-in',
        beforeEnter(el) {
            // console.warn('Before enter...');
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/@core/scss/core.scss',
        '~/assets/scss/rtl.scss',
        '~/assets/scss/transition.scss',
        '~/assets/scss/style.scss',
        '~/assets/scss/fonts.scss',
        '~/assets/scss/bootstrap.min.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/components/fontawesome.js',
        "~plugins/components/vee-validate.js",
        '~/plugins/mixins/ui/forms.js',
        '~/plugins/mixins/ui/transition.js',
        '~/plugins/mixins/ui/layout.js',
        '~/plugins/mixins/dashboard/title.js',
        '~/plugins/mixins/dashboard/projects.js',
        '~/plugins/mixins/dashboard/skills.js',
        '~/plugins/mixins/dashboard/messages.js',
        '~/plugins/mixins/dashboard/hireMe.js',
        '~/plugins/mixins/dashboard/companies.js',
        // '~/plugins/firebase.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [

        // '@nuxtjs/google-fonts',
    ],

    // googleFonts: {
    //     families: {
    //         Cairo: true,
    //         'Josefin+Sans': true,
    //         Lato: [100, 300],
    //         Raleway: {
    //             wght: [100, 400],
    //             ital: [100]
    //         },
    //     },
    //     // display: 'swap',
    //     download: true
    // },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/auth-next',
        '@nuxt/image',
        "@nuxtjs/i18n",
        'nuxt-vue-select',
        'cookie-universal-nuxt', [
            "vue-toastification/nuxt",
            {
                timeout: 3000,
                draggable: false,
                position: "top-center",
            },
        ],
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "AIzaSyD9L-CLiD5t7FgnWaldEPT5-yuJ4xhKt0o",
                    authDomain: "beingmomen.firebaseapp.com",
                    databaseURL: "https://beingmomen-default-rtdb.firebaseio.com",
                    projectId: "beingmomen",
                    storageBucket: "beingmomen.appspot.com",
                    messagingSenderId: "863482997017",
                    appId: "1:863482997017:web:f06f4d0ebc89c3c84f3d88",
                    measurementId: "G-5TGYRK0S9B"
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
                    remoteConfig: true
                }
            }
        ]
    ],


    i18n: {
        lazy: true,
        langDir: 'locales/',
        strategy: 'no_prefix',
        locales: [
            { code: 'ar', iso: 'ar-EG', file: 'ar', dir: 'rtl' },
            { code: 'en', iso: 'en-US', file: 'en', dir: 'ltr' },
        ],
        defaultLocale: 'en',
        // parsePages: false,
        // pages: {
        //     dashboard: false
        // },
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     cookieKey: 'i18n_redirected',
        //     redirectOn: 'root',  // recommended
        // }

    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: 'idToken',
                },
                endpoints: {
                    login: { url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9L-CLiD5t7FgnWaldEPT5-yuJ4xhKt0o                    `, method: "post" },
                    user: false
                },
            },
        },
        redirect: {
            login: '/dashboard',
            logout: '/login',
            callback: '/dashboard',
            home: '/dashboard'
        }
    },
    pwa: {
        icon: {
            fileName: 'zoro.jpg',
        },
        manifest: {
            name: 'Abdelmomen Portfolio',
            short_name: 'Abdelmomen',
            lang: 'en',
            display: 'standalone',
        },
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    generate: {
        fallback: true
    },

    loading: {
        color: ' #7367f0',
        height: '4px'
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    env: {
        login: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE",
        register: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE"
    }
}
