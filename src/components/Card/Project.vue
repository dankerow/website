<script setup lang="ts">
defineProps<{
  name: string;
  description: string;
  url: string;
  tags: string[];
  image: string;
}>()
</script>

<template>
  <div>
    <div
      class="card hoverable shadow-sm"
    >
      <a
        :href="url"
        target="blank"
        rel="noopener"
      >
        <nuxt-img
          loading="lazy"
          format="webp"
          :src="`/img/projects/${image}`"
          sizes="sm:100vw md:50vw lg:500px xl:700px"
          :width="300"
          :height="150"
          fit="cover"
          class="card-img-top img-fluid"
          :alt="`${name} project's thumbnail`"
        />
      </a>
    </div>

    <h3 class="text-primary text-truncate mt-3">
      <a
        :href="url"
        target="blank"
        rel="noopener"
      >
        {{ name }}
      </a>
    </h3>

    <p>
      {{ description }}
    </p>

    <span class="small fst-italic">{{ tags.join(', ') }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  .card-img-top {
    transition: mix-blend-mode 0.3s ease-in-out;
  }

  &:hover {
    .card-img-top {
      mix-blend-mode: color-dodge;
    }
  }
}
</style>
