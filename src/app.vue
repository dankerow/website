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

useScriptNpm({
  packageName: 'bootstrap',
  file: 'dist/js/bootstrap.min.js',
  version: '5.3.3',
  scriptOptions: {
    bundle: true
  }
})

defineOgImage({
  component: 'Page'
})
</script>

<template>
  <div>
    <NuxtPwaAssets />

    <Header />

    <main>
      <NuxtPage />
    </main>

    <LazyFooter />
  </div>
</template>
