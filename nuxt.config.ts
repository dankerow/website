export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/critters',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  $development: {
    sourcemap: true,
    debug: true,
  },

  devtools: {
    enabled: true
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
      ]
    }
  },

  css: [
    '@/assets/scss/bedrock.scss'
  ],

  site: {
    name: 'danker'
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['js', 'ts', 'json', 'bash'],
          preload: ['js', 'ts', 'bash']
        }
      }
    },
    experimental: { nativeSqlite: true }
  },

  experimental: {
    buildCache: true,
    typedPages: true,
    writeEarlyHints: true
  },

  compatibilityDate: '2025-01-31',

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

  eslint: {
    config: {
      stylistic: true
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
  }
})
