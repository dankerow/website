<script setup lang="ts">
const {
  href = ''
} = defineProps<{
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined
}>()
</script>

<template>
  <ULink
    :href="href"
    :target="target"
  >
    <slot />
  </ULink>
</template>
