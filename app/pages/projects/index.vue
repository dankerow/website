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

const { projects, getProjectRepoNames } = useProjects()
const projectRepoNames = getProjectRepoNames()

const { data: repos, status } = await useAsyncData<Repository[]>('repos',
  () => $fetch('https://api.github.com/users/dankerow/repos?per_page=100'),
  {
    deep: true,
    default: () => [],
    transform: (data: Repository[]) => {
      return data
        .map(repo => ({
          name: repo.name,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          description: repo.description,
          html_url: repo.html_url
        }))
        .filter(repo => !projectRepoNames.includes(repo.name))
        .sort((a, b) => b?.stargazers_count - a?.stargazers_count)
    }
  })
</script>

<template>
  <main>
    <Hero
      title="Projects"
      subtitle="Some of the projects I've worked on."
      icon="ph:projector-screen-duotone"
    />

    <div class="container pt-12 pb-4">
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

      <div
        v-if="status === 'pending'"
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
      >
        <div
          v-for="i in 6"
          :key="`skeleton-${i}`"
          class="col"
        >
          <div
            class="card shadow-sm"
            aria-hidden="true"
          >
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

      <div class="referral-card my-5 py-4 px-4 rounded-4">
        <div class="d-flex align-items-center">
          <Icon
            name="ph:cloud-duotone"
            class="text-primary me-3"
            size="3em"
          />

          <div>
            <p class="lead mb-1 text-white">
              Need hosting for your next project?
            </p>

            <a
              href="https://hetzner.cloud/?ref=X8BnX3Z5qBXO"
              target="_blank"
              class="btn btn-outline-primary"
            >
              Get $20 credit on Hetzner Cloud
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.referral-card {
  background-color: rgba(50, 50, 50, 0.2);
  border: 1px solid rgba(208, 208, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.referral-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background-color: rgba(101, 100, 255, 0.15);
}

.referral-card .text-primary {
  color: rgb(101, 100, 255) !important;
}

.btn-outline-primary {
  border-color: rgb(101, 100, 255);
  color: rgb(101, 100, 255);
}

.btn-outline-primary:hover {
  background-color: rgb(101, 100, 255);
  color: #121212;
}
</style>
