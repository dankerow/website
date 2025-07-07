<script setup lang="ts">
const route = useRoute()

const title = computed(() => route.meta.title as string ? `${route.meta.title} - Dan Mutombo` : 'Dan Mutombo')
const description = computed(() => route.meta.description as string ?? 'Software developer, building whatever in my bed')

useHead({
  title: () => route.meta.title as string || '',
  titleTemplate: title => (title ? `${title} - Dan Mutombo` : 'Dan Mutombo'),
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ],
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

useSchemaOrg(
  definePerson({
    name: 'Dan Mutombo',
    url: 'https://danmutombo.com',
    image: 'https://danmutombo.com/icon.png',
    jobTitle: 'Software Developer',
    sameAs: [
      'https://github.com/dankerow',
      'https://www.linkedin.com/in/dan-mutombo/',
      'https://x.com/dankerow'
    ]
  })
)
</script>

<template>
  <div>
    <Header />

    <NuxtPage />

    <LazyFooter />
  </div>
</template>
