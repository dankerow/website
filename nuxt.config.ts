const isDevelopment = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  rootDir: './',
  srcDir: 'src',

  debug: isDevelopment,
  sourcemap: isDevelopment,

  nitro: {
    compressPublicAssets: true
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
    '@nuxtjs/i18n',
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

  i18n: {
    baseUrl: process.env.BASE_URL,
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    vueI18n: {
      fallbackLocale: 'en',
      locale: 'en'
    }
  },

  purgecss: {
    keyframes: true,
    safelist: ['svg']
  },

  pwa: {
    meta: {
      mobileApp: true,
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
