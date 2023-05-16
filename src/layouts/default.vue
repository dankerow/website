<script setup lang="ts">
const description = 'Software developer, looking for more challenges.'
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
      name: 'twitter:card',
      content: 'summary'
    },
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
      content: 'danmutombo.com'
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
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:site_name',
      content: 'danmutombo.com'
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
      src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0-alpha3/js/bootstrap.bundle.min.js',
      defer: true
    }
  ]
})
</script>

<template>
  <div>
    <Header />

    <main>
      <slot />
    </main>

    <LazyFooter />

    <LazyCookieBanner />
  </div>
</template>
