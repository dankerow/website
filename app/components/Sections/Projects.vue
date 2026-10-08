<script setup lang="ts">
const { getFeaturedProjects } = useProjects()
</script>

<template>
  <section
    id="projects"
    class="py-15 scroll-m-12"
  >
    <UContainer>
      <div class="flex items-center">
        <h2 class="text-white text-4xl mb-1 me-4">
          Projects
        </h2>

        <div class="heading-line grow" />
      </div>

      <p class="mb-12 lead">
        Some of the projects I've worked on.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardProject
          v-for="(project, index) in getFeaturedProjects()"
          :key="`project-${index}`"
          v-bind="project"
          :index="index"
          class="h-full"
        />
      </div>

      <UButton
        to="/projects"
        variant="ghost"
        size="lg"
        class="mt-6"
        trailing-icon="ph:arrow-right-light"
      >
        View all projects
      </UButton>
    </UContainer>
  </section>
</template>
