<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  [
    {
      label: 'projects',
      to: '/projects',
      active: route.path.startsWith('/projects')
    },
    {
      label: 'lab',
      to: '/lab',
      active: route.path.startsWith('/lab')
    },
    {
      label: 'blog',
      to: '/blog'
    }
  ]
])
</script>

<template>
  <UHeader class="fixed border-white/5 top-0 left-0 right-0 z-15">
    <template #title>
      <div class="navbar-brand font-medium">
        <span class="navbar-brand-left p-1">[~D</span>
        <span class="navbar-brand-right p-1">]</span>
      </div>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      :ui="{
        linkLabel: 'capitalize before:content-[\'~/_\'] before:text-primary before:font-medium after:content-[\'/\'] after:text-primary after:font-medium after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100'
      }"
    />

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
        :ui="{
          linkLabel: 'capitalize before:content-[\'~/_\'] before:text-primary before:font-medium after:content-[\'/\'] after:text-primary after:font-medium after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100',
        }"
      />
    </template>
  </UHeader>
</template>

<style scoped>
.navbar-brand:hover {
  .navbar-brand-left {
    background-color: var(--color-primary);
    color: rgb(51, 61, 73);
  }

  .navbar-brand-right {
    background-color: unset;
    color: var(--color-primary);
  }
}

.navbar-brand-left {
  transition: background-color 0.3s linear, color 0.3s linear;
}

.navbar-brand-right {
  background-color: var(--color-primary);
  color: rgb(51, 61, 73);
  transition: background-color 0.3s linear, color 0.3s linear;
}
</style>
