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
  <UCard
    class="shadow-sm"
    :ui="{
      body: 'p-4 sm:p-4 relative',
    }"
  >
    <div class="truncate text-white mb-4">
      {{ post.title }}
    </div>

    <p class="truncate text-white/85">
      {{ post.description }}
    </p>

    <div class="text-sm text-muted inline-flex items-center">
      <Icon
        name="ph:calendar-light"
        class="me-1"
      />
      {{ postDate }}
    </div>

    <NuxtLink
      :title="post.title"
      :to="post.path"
      class="stretched-link"
    />

    <ULink
      :to="post.path"
      class="focus:outline-none"
      raw
    >
      <span
        class="absolute inset-0"
        aria-hidden="true"
      />
    </ULink>
  </UCard>
</template>
