<script setup lang="ts">
interface Repository {
  name: string
  language: string
  stargazers_count: number
  description: string
  html_url: string
}

definePageMeta({
  title: 'Projects'
})

const projects = [
  {
    name: 'MIA Gospel',
    description: 'A website for a Gospel Ministry.',
    url: 'https://miagospel.org',
    image: 'miagospel.webp',
    tags: ['Vue', 'Nuxt', 'TypeScript']
  }
]

const { data: repos, status } = await useLazyFetch('https://api.github.com/users/dankerow/repos?per_page=100', {
  key: 'repos',
  default: () => [],
  transform: (data: Repository[]) => {
    return data
        .map((repo) => ({
          name: repo.name,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          description: repo.description,
          html_url: repo.html_url
        }))
        .sort((a, b) => b?.stargazers_count - a?.stargazers_count)
  },
  deep: false
})
</script>

<template>
  <main class="container pt-12 pb-4">
    <h1 class="text-white text-uppercase fw-bolder">
      Projects
    </h1>

    <p class="lead mb-6">
      Projects I've worked on.
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

    <hr class="my-5">

    <p class="mb-4 border-start border-3 border-light-subtle ps-2">
      GitHub repositories sorted by stars.
    </p>

    <div v-if="status === 'pending'" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
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
  </main>
</template>
