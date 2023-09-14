<script setup lang="ts">
const description = 'Software developer, building whatever in my bed.'
const image = 'https://danmutombo.com/icon.png'

const route = useRoute()

useHead({
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr'
  },
  title: 'Dan Mutombo',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: description },
    {
      name: 'twitter:site',
      content: '@dankerow'
    },
    {
      name: 'twitter:creator',
      content: '@dankerow'
    },
    {
      name: 'twitter:title',
      content: 'Dan Mutombo'
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image',
      content: image
    },
    {
      name: 'og:url',
      content: `https://danmutombo.com${route.path}`
    },
    {
      name: 'og:description',
      content: description
    },
    {
      name: 'og:image',
      content: image
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: `https://danmutombo.com${route.path}` },
    { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },
    { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' }
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js',
      defer: true
    }
  ]
})
</script>

<template>
  <div>
    <Header />

    <main>
      <NuxtPage />
    </main>

    <LazyFooter />

    <LazyCookieBanner />
  </div>
</template>
