<script setup lang="ts">
import { Ref } from 'vue'

const repos: Ref<object[]> = ref([])
const { data: repositoriesData, pending } = await useLazyFetch('https://api.github.com/users/dankerow/repos?per_page=100', { immediate: process.client, default: () => shallowRef() })
watch(repositoriesData, (newData) => {
	repos.value = newData
})

repos.value = repos.value?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)
</script>

<template>
	<section id="projects" class="py-10">
		<div class="container">
			<h1 class="h3 section-heading mb-5">
				Projects
			</h1>

			<div v-if="pending" class="row row-cols-1 row-cols-lg-3 gy-4">
				<div v-for="i in 6" :key="`skeleton-${i}`" class="col">
					<div class="card shadow-sm" aria-hidden="true">
						<div class="card-body placeholder-glow min-vh-50">
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
				<div class="row row-cols-1 row-cols-lg-3 gy-4">
					<div
						v-for="(repo, index) in repos"
						:key="`repo-${index}`"
						class="col"
					>
						<a
							:href="repo.html_url"
							target="blank"
							rel="noreferrer"
						>
							<CardRepository
								:name="repo.name"
								:language="repo.language"
								:stars="repo.stargazers_count"
								:description="repo.description"
								:license="repo.license && repo.license.spdx_id"
								:top="index === 0"
								class="h-100"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
