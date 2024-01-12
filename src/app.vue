<script setup lang="ts">
const description = 'Software developer, building whatever in my bed.'

const route = useRoute()

useHead({
  title: () => route.meta.title as string ?? 'Dan Mutombo',
  meta: [
    { name: 'description', content: route.meta.description as string ?? description },
    {
      name: 'twitter:title',
      content: route.meta.title as string ?? 'Dan Mutombo'
    },
    {
      name: 'twitter:description',
      content: route.meta.description as string ?? description
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
    }
  ],
  link: [
    { rel: 'canonical', href: `https://danmutombo.com${route.path}` }
  ]
})

defineOgImage({
  component: 'Page'
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
