<script setup lang="ts">
defineProps<{
  name: string
  language?: string
  stars: string|number
  description?: string,
  url: string
}>()

const getIconName = (language?: string) => {
  switch (language) {
    case 'javascript':
      return 'cib:javascript'
    case 'typescript':
      return 'cib:typescript'
    case 'html':
      return 'cib:html-5'
    case 'css':
      return 'cib:css-3'
    case 'php':
      return 'cib:php'
    case 'python':
      return 'cib:python'
    case 'c#':
      return 'cib:c-sharp'
    case 'c++':
      return 'cib:c-plusplus'
    case 'c':
      return 'cib:c'
    case 'java':
      return 'cib:java'
    case 'ruby':
      return 'cib:ruby'
    case 'shell':
      return 'cib:shell'
    case 'go':
      return 'cib:go'

    default:
      return 'cib:github'
  }
}
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body min-vh-50">
      <h3 class="card-title text-truncate mb-4">
        <Icon :name="getIconName(language?.toLowerCase())" class="align-middle d-inline-block me-2 text-gray-100" />
        <span class="align-middle d-inline-block text-white">dankerow/</span>
        <span class="align-middle d-inline-block">{{ name }}</span>

        <Icon name="material-symbols:open-in-new" class="open-new float-end" />
      </h3>

      <p class="card-text text-gray-300">
        {{ description || 'No description available.' }}
      </p>
    </div>

    <div class="card-footer d-flex align-items-center justify-content-between text-muted">
      <div class="fs-5">
        <Icon name="ph:star-duotone" class="align-middle d-inline-block me-1" />
        <span class="align-middle d-inline-block">
          {{ stars }}
        </span>
      </div>
    </div>

    <a
      :href="url"
      target="blank"
      rel="noreferrer"
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
