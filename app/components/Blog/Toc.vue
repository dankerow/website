<script setup lang="ts">
defineProps<{
  links: Link[]
}>()

interface Link {
  id: string
  text: string
  depth: number
  children?: Link[]
}

const flattenLinks = (links: Link[]) => {
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
  <div class="toc px-sm-2 ps-sm-3 w-100">
    <button
        data-bs-toggle="collapse"
        data-bs-target="#toc-collapse"
        class="btn btn-link toc-toggle d-md-none mb-3 mb-md-none"
        aria-controls="toc-collapse"
    >
      Table of contents

      <Icon name="ph:arrows-out-line-vertical" class="ms-2" />
    </button>

    <div class="fs-6 text-white d-none d-md-block mb-2">
      Table of contents
    </div>

    <hr class="d-none d-md-block">

    <div id="toc-collapse" class="collapse">
      <nav id="table-of-content" class="py-1 rounded">
        <ul class="mb-0 list-unstyled">
          <li
            v-for="link of flattenLinks(links)"
            :key="link.id"
            class="pb-2 small"
            :class="{
              'ms-3 pb-2': link.depth === 3
            }"
          >
            <NuxtLink :to="`#${link.id}`">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toc-toggle {
  display: flex;
  align-items: center;
  border: 1px solid var(--bs-gray-gray-700);
}

@media (min-width: 768px) {
  #toc-collapse {
    display: block !important;
  }
}

@media (min-width: 992px) {
  .toc {
    border-left: 1px solid var(--bs-border-color);
    position: sticky;
    top: 5rem;
    right: 0;
    z-index: 1;
    height: calc(100vh - 7rem);
    overflow-y: auto;
  }
}

@media (max-width: 575.98px) {
  .toc-toggle {
    justify-content: space-between;
    width: 100%;
  }
}

@media (max-width: 767.98px) {
  #toc-collapse {
    nav {
      padding: 1.25rem 1.25rem 1.25rem 1rem;
      background-color: var(--bs-tertiary-bg);
      border: 1px solid var(--bs-border-color);
      border-radius: var(--bs-border-radius);
    }
  }
}

a {
  color: rgba(var(--bs-white-rgb), 0.6);
  transition: color 0.3s linear;

  &:hover {
    color: white;
  }

  &.active {
    color: white;
  }
}
</style>
