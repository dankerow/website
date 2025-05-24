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
  <div class="page-hero pt-18 pb-10 position-relative overflow-hidden">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <h1 class="display-4 text-white fw-bolder mb-3">
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
          class="col-lg-5 d-none d-lg-block"
        >
          <div class="d-flex justify-content-center align-items-center h-100">
            <slot name="decoration">
              <Icon
                :name="icon"
                :size="iconSize"
                class="hero-icon"
              />
            </slot>
          </div>
        </div>
      </div>
    </div>

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

<style lang="scss" scoped>
.page-hero {
  background-color: rgba(18, 18, 18, 0.4);
  backdrop-filter: blur(80px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.hero-icon {
  color: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

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
