<script setup lang="ts">
const route = useRoute()

const title = computed(() => route.meta.title as string ? `${route.meta.title} - Dan Mutombo` : 'Dan Mutombo')
const description = computed(() => route.meta.description as string ?? 'Software developer, building whatever in my bed')

useHead({
  title: () => route.meta.title as string || '',
  titleTemplate: title => (title ? `${title} - Dan Mutombo` : 'Dan Mutombo'),
  meta: [
    {
      name: 'description',
      content: description
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'og:title',
      content: title
    },
    {
      name: 'og:url',
      content: `https://danmutombo.com${route.path}`
    },
    {
      name: 'og:description',
      content: description
    }
  ],
  link: [
    { rel: 'canonical', href: `https://danmutombo.com${route.path}` }
  ]
})

useScriptNpm({
  packageName: 'bootstrap',
  file: 'dist/js/bootstrap.min.js',
  version: '5.3.7'
})

useScriptRybbitAnalytics({
  scriptInput: {
    src: 'https://rybbit.vtower.me/api/script.js'
  },
  siteId: '1'
})

defineOgImageComponent('Page')
</script>

<template>
  <div>
    <Header />

    <NuxtPage />

    <LazyFooter />
  </div>
</template>
