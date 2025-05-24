<script setup lang="ts">
import { motion } from 'motion-v'

const {
  index = 0,
  name,
  description,
  url = '',
  image,
  tags = [],
  slug = '',
  hasInternalPage = false
} = defineProps<{
  index?: number
  name: string
  description: string
  url?: string
  tags?: string[]
  slug?: string
  image?: string
  hasInternalPage?: boolean
}>()

const projectLink = computed(() => {
  if (hasInternalPage && slug) {
    return `/projects/${slug}`
  }
  return url
})

const isExternalLink = computed(() => {
  return !hasInternalPage && url
})

const gradientPairs = [
  ['#6564ff', '#A855F7'], // blue to purple
  ['#8B5CF6', '#EC4899'], // violet to pink
  ['#af99ff', '#b8ccff'],
  ['#a8abff', '#ffc2ff'],
  ['#F97316', '#ffd600'], // orange to yellow
  ['#EF4444', '#F97316'], // red to orange
  ['#6366F1', '#8B5CF6'] // indigo to violet
]

const hashCode = (str: string): number => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

const gradientStyle = computed(() => {
  if (image) return {}

  const hash = hashCode(name)
  const pairIndex = hash % gradientPairs.length
  const angle = (hash % 60) + 120

  return {
    background: `linear-gradient(${angle}deg, ${gradientPairs[pairIndex][0]}, ${gradientPairs[pairIndex][1]})`,
    height: '200px'
  }
})

const hasImage = computed(() => !!image)
</script>

<template>
  <motion.div
    class="card hoverable position-relative overflow-hidden h-100 shadow-sm"
    :initial="{ opacity: 0, y: 20 }"
    :in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{
      once: true,
      amount: 0.5
    }"
    :transition="{ duration: 0.5, delay: 0.45 + index * 0.1 }"
  >
    <div class="position-relative overflow-hidden">
      <NuxtImg
        v-if="hasImage"
        format="webp"
        :src="`/img/projects/${image}`"
        :width="350"
        :height="200"
        sizes="sm:100vw md:50vw lg:300px xl:400px"
        class="card-img-top img-fluid"
        loading="lazy"
        decoding="async"
        :alt="`${name} project's thumbnail`"
      />

      <div
        v-else
        class="gradient-placeholder"
        :style="gradientStyle"
      >
        <div class="gradient-pattern" />
      </div>

      <div class="card-img-overlay d-flex flex-column justify-content-end">
        <div class="card-title h5 text-white text-truncate mb-0">
          {{ name }}
        </div>
      </div>
    </div>

    <div class="card-body position-relative">
      <p class="card-text mb-3">
        {{ description }}
      </p>

      <div class="tags d-flex flex-wrap gap-2">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="card-footer bg-transparent border-0 d-flex justify-content-end">
      <span class="btn-link-subtle d-flex align-items-center">
        View project
        <Icon
          :name="isExternalLink ? 'material-symbols:open-in-new' : 'ph:arrow-right'"
          class="ms-1"
          size="1em"
        />
      </span>
    </div>

    <a
      v-if="isExternalLink"
      :href="url"
      target="_blank"
      rel="noopener"
      class="stretched-link"
      :aria-label="`View ${name} project`"
    />

    <NuxtLink
      v-else
      :to="projectLink"
      class="stretched-link"
      :aria-label="`View ${name} project details`"
    />
  </motion.div>
</template>

<style lang="scss" scoped>
.card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25) !important;
  }
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.card:hover .card-img-top {
  transform: scale(1.01);
}

.card-img-overlay {
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 90%),
    linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 90%);
}

.card-body {
  &:before {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    height: 40px;
    width: 40px;
    border-bottom-left-radius: 0.85rem;
    box-shadow: 0 20px 0 0 var(--bs-card-bg);
  }

  &:after {
    content: "";
    position: absolute;
    top: -40px;
    right: 0;
    height: 40px;
    width: 40px;
    border-bottom-right-radius: 0.85rem;
    box-shadow: 0 20px 0 0 var(--bs-card-bg);
  }
}

.btn-link-subtle {
  color: #a4a4a4;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.card:hover .btn-link-subtle {
  color: white;
}
</style>
