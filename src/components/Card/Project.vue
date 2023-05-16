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
    <nuxt-img
      loading="lazy"
      format="webp"
      :src="`/img/projects/${image}`"
      sizes="sm:100vw md:50vw lg:500px xl:700px"
      :width="300"
      :height="150"
      fit="cover"
      placeholder
      class="card-img-top img-fluid"
      :alt="`${name} project's thumbnail`"
    />

    <div class="card-header">
      <h4 class="text-primary text-truncate mb-0">
        <a
          :href="url"
          target="blank"
          rel="noopener"
        >
          {{ name }}
        </a>
      </h4>
    </div>

    <div class="card-footer text-secondary">
      {{ tags.join(', ') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-top: 3px solid #20262d;

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
