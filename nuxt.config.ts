export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    minify: true,
    compressPublicAssets: true,
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

  features: {
    inlineStyles: false
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
    'nuxt-og-image'
  ],

  content: {
   build: {
     markdown: {
       highlight: {
         theme: 'github-dark',
         langs: ['js', 'ts', 'json', 'bash'],
         preload: ['js', 'ts', 'bash']
       }
     }
   }
  },

  fonts: {
    processCSSVariables: true,
    families: [
      { name: 'Rubik', weights: [300, 400, 500, 600, 700] }
    ]
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
      '@nuxtjs/sitemap'
    ]
  },

  compatibilityDate: '2025-01-31'
})