<script setup lang="ts">
const route = useRoute()

const title = computed(() => route.meta.title as string ? `${route.meta.title} - Dan Mutombo` : 'Dan Mutombo')
const description = computed(() => route.meta.description as string ?? 'Software developer, building whatever in my bed')

useHead({
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
  ]
})

useSeoMeta({
  title: () => (route.meta.title as string) || null,
  description: () => description.value,
  ogTitle: () => title.value,
  ogDescription: () => description.value,
  twitterCard: 'summary_large_image',
  twitterSite: 'DisQ',
  twitterCreator: '@disqink',
  twitterTitle: () => title.value,
  twitterDescription: () => description.value
})

useScriptRybbitAnalytics({
  analyticsHost: 'https://rybbit.vtower.fyi/api',
  siteId: '1',
  scriptOptions: {
    bundle: false
  }
})

defineOgImage('Page', {
  title: title.value,
  description: description.value
})

useSchemaOrg(
  definePerson({
    name: 'Dan Mutombo',
    url: 'https://danmutombo.com',
    image: 'https://danmutombo.com/icon.png',
    jobTitle: 'Software Developer',
    sameAs: [
      'https://github.com/dankerow',
      'https://www.linkedin.com/in/dan-mutombo/'
    ]
  })
)
</script>

<template>
  <UApp>
    <Header />

    <NuxtPage />

    <LazyFooter />
  </UApp>
</template>
