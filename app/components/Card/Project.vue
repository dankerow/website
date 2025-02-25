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
          format="webp"
          :src="`/img/projects/${image}`"
          :width="350"
          :height="200"
          sizes="sm:100vw md:50vw lg:300px xl:400px"
          fit="cover"
          class="card-img-top img-fluid"
          loading="lazy"
          decoding="async"
          :alt="`${name} project's thumbnail`"
        />
      </a>

      <div class="card-body">
        <div class="text-primary text-truncate fw-semibold fs-5 mb-1">
          <a
              :href="url"
              target="blank"
              rel="noopener"
          >
            {{ name }}
          </a>
        </div>

        <p>
          {{ description }}
        </p>

        <span class="small fst-italic text-body-secondary">
        {{ tags.join(', ') }}
      </span>
      </div>
    </div>
  </div>
</template>
