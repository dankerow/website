<script setup lang="ts">
definePageMeta({
  title: 'Blog',
  description: 'A collection of my thoughts and ideas'
})

const tagList = ref()
const selectedTag = ref<string | null>()

const { data: posts } = await useAsyncData('posts', async () => {
  const content = queryCollection('blog')
      .order('date', 'DESC')
      .select('title', 'description', 'date', 'path', 'tags')

  if (selectedTag.value) {
    content.where('tags', 'LIKE', `%${selectedTag.value}%`)
  }

  return content.limit(6).all()
}, {
  watch: [selectedTag]
})

function getMostUsedTags() {
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
}

tagList.value = getMostUsedTags()

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
  <main class="container pt-12 pb-4">
    <h1 class="text-white text-uppercase fw-bolder">
      Blog
    </h1>

    <p class="lead mb-6">
      A collection of my thoughts and ideas.
    </p>

    <div class="nav-scroller py-1 mb-3 border-bottom">
      <nav class="nav nav-underline">
        <button
          class="nav-item nav-link link-body-emphasis"
          :class="{ active: !selectedTag }"
          @click="selectTag('all')"
        >
          All
        </button>

        <button
          v-for="tag in tagList"
          :key="tag.name"
          class="nav-item nav-link link-body-emphasis text-capitalize"
          :class="{ active: selectedTag === tag.name }"
          @click="selectTag(tag.name)"
        >
          {{ tag.name }}
        </button>
      </nav>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
      <div
          v-for="(post, index) in posts"
          :key="`latest-${index}`"
          class="col"
      >
        <CardBlog
          :post="post"
        />
      </div>
    </div>
  </main>
</template>
