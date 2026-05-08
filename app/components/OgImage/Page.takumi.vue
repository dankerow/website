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
    class="w-full h-full flex flex-col text-white items-center justify-between p-10"
    :style="{
      background: 'linear-gradient(rgb(12, 12, 12), rgb(5, 5, 5))',
      color: theme
    }"
  >
    <div class="flex flex-col w-full max-w-[80%]">
      <h1 class="m-0 font-bold mb-5 text-[75px]">
        {{ title }}
      </h1>

      <p
        v-if="description"
        class="text-[35px] text-gray-300"
      >
        {{ description }}
      </p>
    </div>

    <div class="flex flex-row items-center text-left w-full max-w-[80%] border-t-2 border-solid border-t-[#92A4B8] pt-4">
      <p
        v-if="siteName"
        class="font-bold text-[30px]"
      >
        {{ siteName }}
      </p>
    </div>
  </div>
</template>
