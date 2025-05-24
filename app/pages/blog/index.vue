<script setup lang="ts">
definePageMeta({
  title: 'Blog',
  description: 'A collection of my thoughts and ideas'
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
    <Hero
      title="Blog"
      subtitle="A collection of my thoughts and ideas."
      icon="ph:book-open-bold"
    />

    <div class="container pt-12 pb-4">
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
            v-for="tag in getMostUsedTags"
            :key="tag.name"
            class="nav-item nav-link link-body-emphasis text-capitalize"
            :class="{ active: selectedTag === tag.name }"
            @click="selectTag(tag.name)"
          >
            {{ tag.name }}
          </button>
        </nav>
      </div>

      <div
        v-if="status === 'pending'"
        class="loading-container"
      >
        <div class="loading-posts">
          <div class="spinner-container">
            <div
              class="spinner-border text-light"
              role="status"
            >
              <span class="visually-hidden">Loading posts...</span>
            </div>
          </div>

          <div class="loading-text mt-3">
            Loading posts...
          </div>
        </div>
      </div>

      <div
        v-else-if="posts && posts.length > 0"
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5"
      >
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

      <div
        v-else
        class="no-posts"
      >
        <div class="text-center py-5">
          <Icon
            name="ph:article-medium"
            size="4em"
            class="mb-3 text-muted"
          />
          <h3 class="h4 text-white mb-2">
            No posts found
          </h3>

          <p
            v-if="selectedTag"
            class="text-muted"
          >
            No posts with the tag "{{ selectedTag }}" were found.
            <button
              class="btn btn-link p-0 d-inline"
              @click="selectTag('all')"
            >
              View all posts
            </button>
          </p>

          <p
            v-else
            class="text-muted"
          >
            No blog posts have been published yet. Check back soon!
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.loading-container {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.spinner-container {
  position: relative;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.25rem;
}

.loading-text {
  color: #a4a4a4;
  font-size: 1rem;
}

.no-posts {
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 0.75rem;
  border: 1px dashed rgba(255, 255, 255, 0.1);
}
</style>
