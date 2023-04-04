<script setup lang="ts">
definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name: 'Dan Mutombo',
        jobTitle: 'Web Developer',
        url: 'https://danmutombo.com/'
      }
    }
  ]
})
</script>

<template>
  <div>
    <SectionsHero />

    <hr class="mx-2 mx-md-12 mx-lg-16">

    <SectionsAbout />

    <hr class="mx-5 mx-md-15 mx-lg-20">

    <SectionsBlog />

    <hr class="mx-5 mx-md-15 mx-lg-20">

    <SectionsExperience />

    <hr class="mx-5 mx-md-15 mx-lg-20">

    <SectionsProjects />
  </div>
</template>

<style lang="scss">
.section-heading {
    color: white;
    display: inline-block;
    background: rgba(146, 164, 184, 0.3);
    border: 2px solid rgba(146, 164, 184, 0.8);
    border-radius: 0.20rem;
    padding: 0.25rem 0.45rem;
    position: relative;

    &:before {
        content: '~/';
        color: rgb(200, 200, 200);
    }
}
</style>
