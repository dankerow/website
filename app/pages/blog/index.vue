<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

definePageMeta({
  title: 'Blog',
  description: 'A collection of my thoughts and ideas.'
})

const selectedTag = ref<string | null>()

const { data: posts, status } = await useLazyAsyncData('posts', async () => {
  const content = queryCollection('blog')
    .order('date', 'DESC')
    .select('title', 'description', 'date', 'path', 'tags')

  if (selectedTag.value) {
    content.where('tags', 'LIKE', `%${selectedTag.value}%`)
  }

  return content.limit(6).all()
}, {
  deep: false,
  default: () => [],
  watch: [selectedTag]
})

const getMostUsedTags = computed(() => {
  const files = posts.value

  if (!files) {
    return []
  }

  const tags = {}

  for (const file of files) {
    for (const tag of file.tags) {
      if (tags[tag]) {
        tags[tag]++
      } else {
        tags[tag] = 1
      }
    }
  }

  const sortedTags = Object.entries(tags).sort((a, b) => b[1] - a[1])

  return sortedTags.map(tag => ({
    name: tag[0],
    count: tag[1]
  }))
})

const items = computed<TabsItem[]>(() => [
  {
    label: 'All',
    value: 'all'
  },
  ...getMostUsedTags.value.map(tag => ({
    label: tag.name,
    value: tag.name
  }))
])

const selectTag = (tag: string) => {
  if (selectedTag.value === tag) {
    selectedTag.value = null
    return
  }

  if (tag === 'all') {
    selectedTag.value = null
    return
  }

  selectedTag.value = tag
}
</script>

<template>
  <main>
    <PageHeader
      title="Blog"
      subtitle="A collection of my thoughts and ideas."
      icon="ph:book-open-bold"
    />

    <UContainer class="min-h-[50vh] pt-12 pb-4">
      <UTabs
        :items="items"
        variant="link"
        default-value="all"
        :content="false"
        :ui="{ trigger: 'grow' }"
        class="gap-4 w-full mb-8"
        @update:model-value="(value) => selectTag(value)"
      />

      <div
        v-if="status === 'pending'"
        class="min-h-[50vh] flex items-center justify-center"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="text-[#a4a4a4] mt-3">
            Loading posts...
          </div>
        </div>
      </div>

      <div
        v-else-if="posts.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5"
      >
        <CardBlog
          v-for="(post, index) in posts"
          :key="`latest-${index}`"
          :post="post"
        />
      </div>

      <div
        v-else
        class="bg-white/1 border border-white/1 rounded-lg"
      >
        <div class="text-center py-5">
          <Icon
            name="ph:article-medium"
            size="4em"
            class="mb-4 text-muted"
          />

          <h3 class="h4 text-white mb-2">
            No posts found
          </h3>

          <p
            v-if="selectedTag"
            class="text-muted"
          >
            No posts with the tag "{{ selectedTag }}" were found.
            <UButton
              class="p-0"
              variant="soft"
              @click="selectTag('all')"
            >
              View all posts
            </UButton>
          </p>

          <p
            v-else
            class="text-muted"
          >
            No blog posts have been published yet. Check back soon!
          </p>
        </div>
      </div>
    </UContainer>
  </main>
</template>
