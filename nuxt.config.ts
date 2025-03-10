export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    minify: true,
    compressPublicAssets: true,
    routeRules: {
      '/': {
        swr: true
      },
      '/blog/**': {
        swr: true
      }
    },
    publicAssets: [
      {
        dir: 'public/img',
        maxAge: 24 * 60 * 60 * 365, // 1 year (versioned)
        baseURL: 'img'
      }
    ]
  },

  experimental: {
    buildCache: true,
    typedPages: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    '@/assets/scss/bedrock.scss'
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/critters',
    '@vite-pwa/nuxt',
    'nuxt-og-image'
  ],

  content: {
   build: {
     markdown: {
       highlight: {
         theme: 'github-dark',
         preload: ['js', 'ts', 'json', 'vue']
       }
     }
   }
  },

  fonts: {
    experimental: {
      processCSSVariables: true
    },
    families: [
      { name: 'Rubik', weights: [300, 400, 500, 600, 700] }
    ]
  },

  pwa: {
    manifest: {
      name: 'Dan Mutombo',
      start_url: '/',
      short_name: 'Dan M.',
      lang: 'en',
      display: 'fullscreen',
      background_color: '#1c2125',
      theme_color: '#92a4b8'
    },
    pwaAssets: {
      config: true
    },
    disable: true
  },

  scripts: {
    defaultScriptOptions: {
      bundle: true
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
      'nuxt-purgecss',
      '@nuxtjs/sitemap'
    ],

    purgecss: {
      keyframes: true,
      safelist: ['svg']
    }
  },

  compatibilityDate: '2025-01-31'
})