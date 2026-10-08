<script setup lang="ts">
const route = useRoute()
const { data: article } = await useAsyncData('article',
  () => queryCollection('blog').path(route.path).first(),
  {
    deep: false
  }
)

if (!article.value) {
  throw createError({ statusCode: 404, message: 'The article you are looking for couldn\'t be found.' })
}

route.meta.title = article.value.title
route.meta.description = article.value.description

const articleDate = formatDate(article.value.date)

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
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes > 1 ? `${minutes} minutes` : `${minutes} minute`
}

const readingTime = calculateReadingTime(articleContent)

defineOgImage('Blog', {
  title: article.value.title,
  description: article.value.description,
  minRead: readingTime
})
</script>

<template>
  <main class="pt-20">
    <UContainer>
      <UPage v-if="article">
        <UPageHeader>
          <UButton
            to="/blog"
            icon="ph:terminal"
            variant="link"
            class="underline decoration-2 decoration-white/15 hover:decoration-white/75 underline-offset-8 mb-8 ps-0"
          >
            cd ..
          </UButton>

          <h1 class="text-white">
            {{ article.title }}
          </h1>

          <p class="mb-5">
            {{ article.description }}
          </p>

          <div class="flex flex-row justify-between text-sm">
            <div>
              <div
                v-if="article.date"
                class="inline-flex items-center py-1 text-secondary me-2"
              >
                {{ articleDate }}
              </div>

              <div class="inline-flex items-center py-1 text-secondary">
                ·
                {{ readingTime }}
              </div>
            </div>

            <div
              v-if="article.tags"
              class="inline-flex items-center gap-1 py-1 text-secondary"
            >
              <Icon
                name="ph:hash-bold"
              />

              {{ article.tags.join(', ') }}
            </div>
          </div>
        </UPageHeader>

        <UPageBody>
          <ContentRenderer :value="article">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </UPageBody>

        <template
          v-if="article?.body?.toc?.links?.length"
          #right
        >
          <UContentToc
            highlight
            highlight-color="neutral"
            :links="article?.body.toc.links"
          />
        </template>
      </UPage>
    </UContainer>
  </main>
</template>

<style scoped>
:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
  color: white;
}

:deep(.anchor) {
  float: left;
  line-height: 1;
  margin-left: -20px;
  padding-right: .25rem;
}

:deep(.octicon) {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

:deep(.octicon-link) {
  color: #f0f6fc;
  vertical-align: middle;
  visibility: hidden;
}

:deep(h1:hover .anchor .octicon-link),
:deep(h2:hover .anchor .octicon-link),
:deep(h3:hover .anchor .octicon-link),
:deep(h4:hover .anchor .octicon-link),
:deep(h5:hover .anchor .octicon-link),
:deep(h6:hover .anchor .octicon-link) {
  visibility: visible;
}
</style>
