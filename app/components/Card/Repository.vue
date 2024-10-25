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
    case 'python':
      return 'cib:python'
    case 'c#':
      return 'cib:c-sharp'
    case 'c++':
      return 'cib:c-plusplus'
    case 'c':
      return 'cib:c'
    case 'vue':
      return 'cib:vue-js'

    default:
      return 'cib:github'
  }
}
</script>

<template>
  <div class="card hoverable shadow-sm">
    <div class="card-body min-vh-50">
      <div class="card-title text-truncate mb-3">
        <Icon :name="getIconName(language?.toLowerCase())" class="align-middle d-inline-block me-2 text-gray-100" size="1em" />
        <span class="align-middle d-inline-block text-white">{{ name }}</span>

        <Icon name="material-symbols:open-in-new" class="open-new float-end" size="1.15em" />
      </div>

      <p class="card-text text-gray-300">
        {{ description || 'No description available.' }}
      </p>
    </div>

    <a
      :href="url"
      target="blank"
      rel="noreferrer"
      class="stretched-link"
      :aria-label="`Open ${name} on GitHub`"
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
