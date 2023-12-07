<script setup lang="ts">
const props = defineProps<{
  post: {
    title: string
    description: string
    _path: string
    date: string
  }
}>()

const postDate = formatDate(props.post.date)
</script>

<template>
  <div class="card hoverable shadow-sm">
    <div class="card-body min-vh-50">
      <h3 class="card-title text-truncate mb-4">
        <span class="align-middle d-inline-block text-white">{{ post.title }}</span>

        <Icon name="material-symbols:open-in-new" class="open-new float-end" size="1.15em" />
      </h3>

      <p class="card-text text-truncate">
        {{ post.description }}
      </p>
    </div>

    <div class="card-footer">
      <small class="text-muted">
        <Icon name="ph:calendar-light" class="me-1" />
        {{ postDate }}
      </small>
    </div>

    <NuxtLink
      :title="post.title"
      :to="post._path"
      class="stretched-link"
    />
  </div>
</template>

<style lang="scss" scoped>
.card {
	.open-new {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	&:hover {
		.open-new {
			opacity: 1;
		}
	}
}
</style>
