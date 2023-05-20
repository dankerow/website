const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  rootDir: './',
  srcDir: 'src',

  debug: isDevelopment,
  sourcemap: isDevelopment,

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
    'nuxt-security',
    '@kevinmarrec/nuxt-pwa',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/critters',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
    'nuxt-icon',
    'nuxt-purgecss',
    'nuxt-simple-sitemap'
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

  gtag: {
    id: isProduction && process.env.GTAG_ID ? process.env.GTAG_ID : undefined,
  },

  purgecss: {
    keyframes: true,
    safelist: ['svg']
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

  security: {
    enabled: !isDevelopment
  },

  sitemap: {
    enabled: !isDevelopment,
    siteUrl: process.env.BASE_URL
  }
})
