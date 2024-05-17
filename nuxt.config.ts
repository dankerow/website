export default defineNuxtConfig({
  srcDir: 'src',

  nitro: {
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
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/critters',
    '@vite-pwa/nuxt',
    'nuxt-icon',
    'nuxt-og-image'
  ],

  fonts: {
    experimental: {
      addPreloadLinks: true,
      processCSSVariables: true
    },
    families: [
      { name: 'Rubiks', weights: [300, 400, 500, 600, 700] }
    ],
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
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
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
  }
})
