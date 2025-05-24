<script setup lang="ts">
import { motion } from 'motion-v'

const { getFeaturedProjects } = useProjects()
const isLinkHovered = ref(false)
</script>

<template>
  <div
    id="projects"
    class="py-10"
  >
    <div class="container">
      <div class="d-flex align-items-center">
        <motion.h2
          class="text-white h3 mb-0 me-3"
          :initial="{ opacity: 0, y: -20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{
            once: true,
            margin: '0px 0px -20px 0px',
            amount: 0.1
          }"
          :transition="{ duration: 0.5, delay: 0.35 }"
        >
          Projects
        </motion.h2>

        <motion.div
          class="heading-line flex-grow-1"
          :initial="{ scaleX: 0 }"
          :in-view="{ scaleX: 1 }"
          :in-view-options="{
            once: true,
            margin: '0px 0px -20px 0px',
            amount: 0.1
          }"
          :transition="{ duration: 0.5, delay: 0.35 }"
        />
      </div>

      <motion.p
        class="mb-5 lead"
        :initial="{ opacity: 0, y: -10 }"
        :in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{
          once: true,
          margin: '0px 0px -20px 0px',
          amount: 0.1
        }"
        :transition="{ duration: 0.5, delay: 0.4 }"
      >
        Some of the projects I've worked on.
      </motion.p>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
        <div
          v-for="(project, index) in getFeaturedProjects()"
          :key="`project-${index}`"
          class="col"
        >
          <CardProject
            v-bind="project"
            :index="index"
            class="h-100"
          />
        </div>
      </div>

      <AnimatePresence>
        <Motion
          as-child
          :initial="{ opacity: 0, x: -10 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{
            once: true,
            amount: 0.5
          }"
          :transition="{ duration: 0.5, delay: 0.55 }"
          :animate="isLinkHovered ? { scale: 1.05 } : {}"
        >
          <NuxtLink
            to="/projects"
            class="d-inline-flex align-items-center btn btn-link link-body-emphasis link-offset-3 link-underline-opacity-25 link-underline-opacity-75-hover mt-4 ps-0"
            style="text-decoration: underline;"

            @mouseenter="isLinkHovered = true"
            @mouseleave="isLinkHovered = false"
          >
            View all projects

            <Icon
              name="ph:arrow-right-light"
              class="ms-2"
              size="1.25em"
            />
          </NuxtLink>
        </Motion>
      </AnimatePresence>
    </div>
  </div>
</template>

<style scoped>
#projects {
  scroll-margin-top: 3rem;
  will-change: transform;
}
</style>
