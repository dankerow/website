<script setup lang="ts">
const projects = [
  {
    name: 'MIA Gospel',
    description: 'A website for a Gospel Ministry.',
    url: 'https://miagospel.org',
    image: 'miagospel.webp',
    tags: ['Vue', 'Nuxt', 'TypeScript']
  }
]
</script>

<template>
  <div id="projects" class="py-10">
    <div class="container">
      <h2 class="text-white">
        Projects
      </h2>

      <p class="mb-5 lead">
        Some of the projects I've worked on.
      </p>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
        <div
          v-for="(project, index) in projects"
          :key="`project-${index}`"
          class="col"
        >
          <CardProject
            v-bind="project"
            class="h-100"
          />
        </div>
      </div>

      <NuxtLink to="/projects" class="d-inline-flex align-items-center btn btn-link text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover mt-4 ps-0">
        View all projects

        <Icon
          name="ph:arrow-right-light"
          class="ms-2"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
#projects {
  scroll-margin-top: 3rem;
  will-change: transform;
}
</style>
