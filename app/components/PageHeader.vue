<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  icon?: string
  iconSize?: string
  hideDecoration?: boolean
  gradientBlobs?: boolean
}

const {
  subtitle = '',
  icon = 'ph:atom-duotone',
  iconSize = '8em',
  hideDecoration = false,
  gradientBlobs = true
} = defineProps<Props>()
</script>

<template>
  <div class="bg-[rgba(18,18,18,0.4)] backdrop-blur-3xl border-b border-white/3 pt-30 pb-15 relative overflow-hidden">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-3 items-center">
        <div class="lg:col-span-2">
          <h1 class="text-4xl text-white font-medium mb-3">
            {{ title }}
          </h1>

          <p
            v-if="subtitle"
            class="lead mb-0"
          >
            {{ subtitle }}
          </p>

          <slot name="content" />
        </div>

        <div
          v-if="!hideDecoration"
          class="hidden lg:block"
        >
          <div class="flex justify-center items-center h-full">
            <slot name="decoration">
              <Icon
                :name="icon"
                :size="iconSize"
                class="text-white/10 animate-[float_6s_ease-in-out_infinite]"
              />
            </slot>
          </div>
        </div>
      </div>
    </UContainer>

    <div
      v-if="gradientBlobs"
      class="blob blob-1"
    />

    <div
      v-if="gradientBlobs"
      class="blob blob-2"
    />
    <slot />
  </div>
</template>

<style>
@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
</style>

<style scoped>
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  z-index: -1;
}

.blob-1 {
  background: linear-gradient(45deg, #6564ff, #A855F7);
  width: 500px;
  height: 500px;
  top: -250px;
  right: -100px;
}

.blob-2 {
  background: linear-gradient(45deg, #3949AB, #9575CD);
  width: 400px;
  height: 400px;
  bottom: -200px;
  left: -100px;
}
</style>
