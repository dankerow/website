<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h3)))
</script>

<template>
  <h3 :id="id">
    <template v-if="id && generate">
      <a
          :href="`#${id}`"
          class="anchor"
      >
        <Icon name="ph:link-duotone" class="octicon octicon-link" size="16px" />
      </a>

      <slot />
    </template>

    <slot v-else />
  </h3>
</template>
