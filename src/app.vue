<script setup lang="ts">
const description = 'Software developer, building whatever in my bed.'
const image = 'https://danmutombo.com/icon.png'

const route = useRoute()

useHead({
  htmlAttrs: {
    lang: 'en-US',
    dir: 'ltr'
  },
  title: () => route.meta.title as string ?? 'Dan Mutombo',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: route.meta.description as string ?? description },
    {
      name: 'twitter:site',
      content: '@dankerow'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:creator',
      content: '@dankerow'
    },
    {
      name: 'twitter:title',
      content: route.meta.title as string ?? 'Dan Mutombo'
    },
    {
      name: 'twitter:description',
      content: route.meta.description as string ?? description
    },
    {
      name: 'twitter:image',
      content: image
    },
    {
      name: 'og:title',
      content: route.meta.title as string ?? 'Dan Mutombo',
    },
    {
      name: 'og:url',
      content: `https://danmutombo.com${route.path}`
    },
    {
      name: 'og:description',
      content: route.meta.description as string ?? description
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
