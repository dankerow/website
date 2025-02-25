<script setup lang="ts">
const {
  href = ''
} = defineProps<{
  href: string
  target: '_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined
}>()
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="text-decoration-underline link-offset-2 link-offset-3-hover link-underline link-underline-opacity-10 link-underline-opacity-75-hover"
  >
    <slot />
  </NuxtLink>
</template>