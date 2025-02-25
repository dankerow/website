<script setup lang="ts">
const path = useRoute().path
const { data: article } = await useAsyncData('article', () => queryCollection('blog').path(path).first())

if (!article.value) {
  throw createError({ statusCode: 404, message: 'The article you are looking for couldn\'t be found.' })
}

useSeoMeta({
  title: article.value.title,
  description: article.value.description
})

const articleDate = formatDate(article.value.date)
const { onLoaded } = useNuxtApp().$scripts['bootstrap-npm']

const articleContent = article.value.body.value.map((item: string | string[]) => {
  if (typeof item === 'string') {
    return item
  } else if (Array.isArray(item) && item.length > 2 && typeof item[2] === 'string') {
    return item[2]
  }
  return ''
}).join(' ')


const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 120
  const words = text.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes > 1 ? `${minutes} minutes` : `${minutes} minute`
}

const readingTime = calculateReadingTime(articleContent)

defineOgImageComponent('Blog', {
  ...(article.value.ogImage ?? []),
  minRead: readingTime,
})

onMounted(() => {
  onLoaded(() => {
    const scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance('#__nuxt', {
      target: '#table-of-content',
      smoothScroll: true,
      offset: 0
    })

    scrollSpy.refresh()
  })
})
</script>

<template>
  <main class="container pt-12 pb-4">
    <NuxtLink to="/blog" class="d-inline-flex align-items-center text-decoration-underline link-opacity-75 link-opacity-100-hover link-offset-2 link-offset-3-hover link-underline link-underline-opacity-10 link-underline-opacity-75-hover mb-4 mb-md-6 mb-lg-8 ps-0">
      <Icon
        name="ph:terminal"
        class="me-3"
      />
      cd ..
    </NuxtLink>

    <div class="t">
      <h1 class="text-white">
        {{ article.title }}
      </h1>

      <p class="mb-5">
        {{ article.description }}
      </p>

      <div class="row justify-content-between fs-6">
        <div class="col-auto">
          <div v-if="article.date" class="d-inline-flex align-items-center py-1 text-body-secondary me-2">
            {{ articleDate }}
          </div>

          <div class="d-inline-flex align-items-center py-1 text-body-secondary">
            ·
            {{ readingTime }}
          </div>
        </div>

        <div class="col-auto">
          <div v-if="article.tags" class="d-inline-flex align-items-center py-1 text-body-secondary">
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
        <div class="col col-lg-9 order-2 order-lg-1 markdown-body">
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
