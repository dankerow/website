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
          'https://instagram.com/danielito.mtb/',
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

    <hr class="mx-2 mx-md-10 mx-lg-12">

    <SectionsBlog />

    <hr class="mx-2 mx-md-5 mx-lg-8">

    <SectionsExperience />

    <hr class="mx-2 mx-md-5 mx-lg-8">

    <SectionsProjects />
  </div>
</template>

<style lang="scss">
.section-heading {
  color: white;
  display: inline-block;
  background: rgba(146, 164, 184, 0.3);
  border: 1.5px solid rgba(146, 164, 184, 0.8);
  border-left: 3px solid rgba(146, 164, 184, 1);
  border-radius: 0.20rem;
  padding: 0.5rem 0.7rem;
  position: relative;
  text-transform: lowercase;

  &:before {
    content: '~/';
    color: rgb(200, 200, 200);
  }
}
</style>
