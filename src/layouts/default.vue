<script setup lang="ts">
import type { Directions, LocaleObject } from 'vue-i18n-routing'

const { t, locale, locales } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const description = t('metadata.shortDescription')
const image = ref('https://danmutombo.com/icon.png')

const localeMap = (locales.value as LocaleObject[]).reduce((acc, l) => {
  acc[l.code!] = l.dir ?? 'auto'
  return acc
}, {} as Record<string, Directions>)

useHead({
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => localeMap[locale.value] ?? 'auto'
  },
  title: 'Dan Mutombo',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: description },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'google', content: 'notranslate' },
    { name: 'robots', content: 'noydir,noodp,noarchive,nocache,notranslate,follow,imageindex,index' },
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
    },
    ...(head.value.meta || [])
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ...(head.value.link || [])
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
