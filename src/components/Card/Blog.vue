<script setup lang="ts">
defineProps<{
  post: {
    title: string
    description: string
    _path: string
  }
}>()
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body min-vh-50">
      <h3 class="card-title text-truncate mb-4">
        <span class="align-middle d-inline-block text-white">#blog/</span>
        <span class="align-middle d-inline-block">{{ post.title }}</span>

        <Icon name="material-symbols:open-in-new" class="open-new float-end" />
      </h3>

      <p class="card-text">
        {{ post.description }}
      </p>
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
