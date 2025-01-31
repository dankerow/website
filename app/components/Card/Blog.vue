<script setup lang="ts">
const props = defineProps<{
  post: {
    title: string
    description: string
    path: string
    date: string
  }
}>()

const postDate = formatDate(props.post.date)
</script>

<template>
  <div class="card hoverable shadow-sm">
    <div class="card-body min-vh-50">
      <div class="card-title text-truncate text-white mb-4">
        {{ post.title }}
      </div>

      <p class="card-text text-truncate mb-3">
        {{ post.description }}
      </p>

      <div class="small text-body-secondary d-inline-flex align-items-center">
        <Icon name="ph:calendar-light" class="me-1" />
        {{ postDate }}
      </div>
    </div>

    <NuxtLink
      :title="post.title"
      :to="post.path"
      class="stretched-link"
    />
  </div>
</template>
