<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1)))
</script>

<template>
  <h1 :id="id">
    <template v-if="generate">
      <a
        :href="`#${id}`"
        class="anchor"
      >
        <Icon
          name="ph:link-duotone"
          class="octicon octicon-link"
          size="16px"
        />
      </a>

      <slot />
    </template>

    <slot v-else />
  </h1>
</template>
