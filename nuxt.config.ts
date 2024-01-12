export default defineNuxtConfig({
  srcDir: 'src',

  nitro: {
    compressPublicAssets: true
  },

  experimental: {
    headNext: true,
    typedPages: true
  },

  app: {
    head: {
      htmlAttrs: {
        dir: 'ltr'
      },
      meta: [
        {
          name: 'twitter:site',
          content: '@dankerow'
        },
        {
          name: 'twitter:creator',
          content: '@dankerow'
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },
        { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.2/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
          defer: true
        }
      ]
    }
  },

  css: [
    '@/assets/scss/bedrock.scss'
  ],

  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/critters',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-og-image'
  ],

  googleFonts: {
    families: {
      Rubik: {
        wght: [300, 400, 500, 600, 700]
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

  site: {
    url: process.env.BASE_URL,
    name: 'danker'
  },

  $development: {
    debug: true,
    sourcemap: true,
  },

  $production: {
    modules: [
      'nuxt-gtag',
      'nuxt-purgecss',
      '@nuxtjs/sitemap'
    ],

    gtag: {
      id: process.env.GTAG_ID ?? undefined
    },

    purgecss: {
      keyframes: true,
      safelist: ['svg']
    }
  }
})
