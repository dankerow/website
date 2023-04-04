<script setup lang="ts">
const { data: latestPosts } = await useAsyncData('latest-posts', () => queryContent().sort({ createdAt: 1 }).limit(3).without(['body']).find())
</script>

<template>
	<section id="blog" class="py-10">
		<div class="container">
			<h1 class="h3 section-heading mb-5">
				Blog
			</h1>

			<div class="row">
				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
					<div
						v-for="(post, index) in latestPosts"
						:key="`latest-${index}`"
						class="col"
					>
						<CardBlog
							:post="post"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
