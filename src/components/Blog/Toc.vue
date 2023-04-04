<script setup lang="ts">
defineProps(['links'])
const flattenLinks = (links: Array<any>) => {
  const _links = links
    .map((link) => {
      let _link = [link]
      if (link.children) {
        const flattened = flattenLinks(link.children)
        _link = [link, ...flattened]
      }
      return _link
    })
    .flat(1)
  return _links
}
</script>

<template>
  <nav class="py-4 px-4 rounded">
    <header class="pb-1 mb-3">
      <h2 class="fw-bolder">
        Table of contents
      </h2>
    </header>
    <ul class="d-flex flex-column px-1 mb-0 list-unstyled">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="{
          'ms-2 pb-2': link.depth === 3
        }"
      >
        <NuxtLink :href="`#${link.id}`">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
	background-color: rgba(38, 38, 38, 0.3);
	border: 1px solid rgba(38, 38, 38, 0.8);
}

header {
	h2 {
		font-size: 1.25rem;
	}

	border-bottom: 1px solid rgba(38, 38, 38, 0.8);
}
</style>
