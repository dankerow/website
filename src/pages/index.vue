<script setup lang="ts">
definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name: 'Dan Mutombo',
        jobTitle: 'Software Developer',
        sameAs: [
          'https://github.com/dankerow',
          'https://www.linkedin.com/in/dan-mutombo/',
          'https://twitter.com/dankerow'
        ],
        url: 'https://danmutombo.com/'
      },
    },
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        url: 'https://danmutombo.com/',
        name: 'Dan Mutombo'
      }
    }
  ]
})
</script>

<template>
  <div>
    <SectionsHero />

    <SectionsExperience />

    <SectionsProjects />
  </div>
</template>

<style lang="scss">
.section-heading {
  color: white;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bolder;
}
</style>
