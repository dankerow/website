<script setup lang="ts">
defineProps<{
  name: string;
  url: string;
  tags: string[];
  image: string;
}>()
</script>

<template>
  <div
    class="card rounded"
  >
    <nuxt-img :src="`/img/projects/${image}`" placeholder class="card-img-top" :alt="`${name} project's thumbnail`" />

    <div class="card-header">
      <h4 class="text-primary text-truncate mb-0">
        <span class="align-middle d-inline-block">
          {{ name }}
        </span>

        <Icon name="material-symbols:open-in-new" class="open-new float-end" />
      </h4>
    </div>

    <div class="card-footer text-secondary">
      {{ tags.join(', ') }}
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
  border-top: 3px solid #20262d;

  .open-new {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    .open-new {
      opacity: 1;
    }
  }

  .card-img-top {
    mix-blend-mode: color-dodge;
    transition: mix-blend-mode 0.3s ease-in-out;
  }

  &:hover {
    .card-img-top {
      mix-blend-mode: unset;
    }
  }
}
</style>
