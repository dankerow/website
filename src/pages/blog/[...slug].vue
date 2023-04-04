<script setup lang="ts">
const path = useRoute().path
const { data: article } = await useAsyncData('article', () => queryContent(path).findOne())
const articleDate = formatDate(article.date)
</script>

<template>
	<section class="hero d-flex justify-content-center align-items-center flex-column position-relative text-center pt-5">
		<div class="container">
			<h1 class="title m-0 text-uppercase">
				{{ article.title }}
			</h1>
			<p> {{ article.description }}</p>

			<div class="info fs-5 fw-semibold d-flex flex-wrap position-absolute">
				<div class="row row-cols-auto gx-2">
					<div class="col">
						<div v-if="article.date" class="py-1 px-2 rounded-1 text-bg-primary">
							{{ articleDate }}
						</div>
					</div>
					<div class="col">
						<div v-if="article.tags" class="py-1 px-2 rounded-1 text-bg-primary text-capitalize">
							{{ article.tags.join(', ') }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="container">
		<article>
			<div
				class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 justify-content-center py-5"
			>
				<div class="col col-lg-9">
					<ContentRenderer :value="article">
						<template #empty>
							<p>No content found.</p>
						</template>
					</ContentRenderer>
				</div>
				<div class="col col-lg-3">
					<BlogToc :links="article.body.toc.links" />
				</div>
			</div>
		</article>
	</div>
</template>
