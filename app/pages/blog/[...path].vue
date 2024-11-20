<script setup lang="ts">
const path = useRoute().path
const { data: article } = await useAsyncData('article', () => queryContent(path).findOne())

if (!article.value) {
  throw createError({ statusCode: 404, message: 'The article you are looking for couldn\'t be found.' })
}

useSeoMeta({
  title: article.value.title,
  description: article.value.description
})

const articleDate = formatDate(article.value.date)
</script>

<template>
  <main class="container pt-12 pb-4">
    <NuxtLink to="/blog" class="d-inline-flex align-items-center btn btn-link mb-8 ps-0">
      <Icon
          name="ph:arrow-left-light"
          class="me-2"
      />

      Back to blog posts
    </NuxtLink>

    <div class="t">
      <h1 class="text-white text-uppercase">
        {{ article.title }}
      </h1>

      <p class="mb-5">
        {{ article.description }}
      </p>

      <div class="row justify-content-between fs-6">
        <div class="col-auto">
          <div v-if="article.date" class="d-inline-flex align-items-center py-1 text-body-secondary">
            <Icon
              name="solar:calendar-bold-duotone"
              class="me-2"
            />

            {{ articleDate }}
          </div>
        </div>

        <div class="col-auto">
          <div v-if="article.tags" class="d-inline-flex align-items-center py-1 text-body-secondary text-capitalize">
            <Icon
              name="solar:hashtag-square-bold-duotone"
              class="me-2"
            />

            {{ article.tags.join(', ') }}
          </div>
        </div>
      </div>
    </div>

    <hr>

    <article>
      <div
        class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 justify-content-center py-5"
      >
        <div class="col col-lg-9 order-2 order-lg-1">
          <ContentRenderer :value="article">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </div>

        <div class="col col-lg-3 order-1 order-lg-2">
          <BlogToc :links="article.body.toc.links" />
        </div>
      </div>
    </article>
  </main>
</template>
