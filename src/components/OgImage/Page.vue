<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  siteName: String,
  theme: {
    type: String,
    default: '#92A4B8FF'
  }
})

defineOptions({
  inheritAttrs: false,
})

const siteConfig = useSiteConfig()
const siteName = computed(() => {
  return props.siteName || siteConfig.name
})
</script>

<template>
  <div
    class="w-full h-full flex text-white items-center justify-center" :style="{
      background: 'linear-gradient(rgb(12, 12, 12), rgb(5, 5, 5))',
      color: theme
    }"
  >
    <div class="h-full w-full justify-between relative p-[60px]">
      <div class="flex flex-col w-full max-w-[80%]">
        <h1 class="m-0 font-bold mb-[20px] text-[75px]">
          {{ title }}
        </h1>

        <p v-if="description" class="text-[35px] text-gray-300">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-row justify-center items-center text-left w-full">
        <p v-if="siteName" style="font-size: 25px;" class="font-bold">
          {{ siteName }}
        </p>
      </div>
    </div>
  </div>
</template>
