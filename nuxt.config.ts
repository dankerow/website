export default defineNuxtConfig({
  rootDir: './',
  srcDir: 'src',

  nitro: {
    compressPublicAssets: true
  },

  experimental: {
    typedPages: true,
    watcher: 'parcel'
  },

  css: [
    '@/assets/scss/bedrock.scss'
  ],

  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/critters',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],

  googleFonts: {
    families: {
      Rubik: {
        wght: [300, 400, 500, 600, 700]
      },
      'Roboto Mono': {
        wght: [400]
      }
    },
    display: 'swap'
  },

  pwa: {
    meta: {
      mobileAppIOS: true,
      name: 'Dan Mutombo',
      appleStatusBarStyle: 'black-translucent'
    },
    manifest: {
      name: 'Dan Mutombo',
      start_url: '/',
      short_name: 'Dan M.',
      lang: 'en',
      display: 'fullscreen',
      background_color: '#1c2125',
      theme_color: '#92a4b8'
    },
    workbox: {
      enabled: false
    }
  },

  $development: {
    debug: true,
    sourcemap: true,

    modules: [
      '@nuxt/devtools'
    ]
  },

  $production: {
    modules: [
      'nuxt-gtag',
      'nuxt-purgecss',
      'nuxt-simple-sitemap'
    ],

    gtag: {
      id: process.env.GTAG_ID ?? undefined
    },

    purgecss: {
      keyframes: true,
      safelist: ['svg']
    },

    sitemap: {
      siteUrl: process.env.BASE_URL
    }
  }
})
