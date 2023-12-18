<script setup lang="ts">
const projects = [
  {
    name: 'danmutombo.com',
    description: 'My personal website and blog.',
    url: 'https://danmutombo.com',
    image: 'dankerow.png',
    tags: ['Vue', 'Nuxt', 'TypeScript']
  },
  {
    name: 'Adrian Salvador\'s Portfolio',
    description: 'A photography portfolio, built for a friend.',
    url: 'https://salvadoradrian.com',
    image: 'adriansalvador.png',
    tags: ['Vue', 'Nuxt', 'TypeScript']
  }
]

const repos = ref<object[]>([])
const { data: repositoriesData, pending } = await useLazyFetch('https://api.github.com/users/dankerow/repos?per_page=100', {
  immediate: process.client,
  default: () => shallowRef(),
  transform: (data) => {
    return data
      .map((repo: any) => ({
        name: repo.name,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        description: repo.description,
        html_url: repo.html_url
      }))
      .sort((a, b) => b?.stargazers_count - a?.stargazers_count)
  }
})

watch(repositoriesData, (newData) => {
  repos.value = newData
})
</script>

<template>
  <section id="projects" class="py-5">
    <div class="container">
      <h2 class="section-heading mb-5">
        Projects
      </h2>

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

      <hr class="my-5">

      <div v-if="pending" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
        <div v-for="i in 6" :key="`skeleton-${i}`" class="col">
          <div class="card shadow-sm" aria-hidden="true">
            <div class="card-body placeholder-glow">
              <h4 class="card-title text-truncate mb-4">
                <span class="rounded placeholder col-1 me-2" />
                <span class="rounded placeholder col-2" />
                <span class="mx-1">/</span>
                <span class="rounded placeholder col-3" />
              </h4>

              <p class="card-text">
                <span class="rounded placeholder placeholder-sm col-7 my-2 d-block" />
                <span class="rounded placeholder placeholder-sm col-4 my-2 d-block" />
                <span class="rounded placeholder placeholder-sm col-8 my-2 d-block" />
              </p>
            </div>

            <div class="card-footer placeholder-glow">
              <span class="rounded placeholder col-1" />
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
          <div
            v-for="(repo, index) in repos"
            :key="`repo-${index}`"
            class="col"
          >
            <CardRepository
              :name="repo.name"
              :language="repo.language"
              :stars="repo.stargazers_count"
              :description="repo.description"
              :url="repo.html_url"
              class="h-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  will-change: transform;
}
</style>
