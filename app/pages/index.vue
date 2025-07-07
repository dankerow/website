<script setup lang="ts">
import { motion } from 'motion-v'
import { NuxtLink } from '#components'

interface SpotifyData {
  listening: boolean
  track: string
  artist: string
}

const { onLoaded: onGradientLoaded } = useScript({
  src: '/js/gradient.min.js',
  defer: true
})

const MotionNuxtLink = motion.create(NuxtLink)

const mainTechs = [
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon'
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript'
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon'
  },
  {
    name: 'Vue.js',
    icon: 'logos:vue'
  },
  {
    name: 'Nuxt',
    icon: 'logos:nuxt-icon'
  }
]
const socialLinks = [
  {
    name: 'GitHub',
    icon: 'ph:github-logo-duotone',
    url: 'https://github.com/dankerow'
  },
  {
    name: 'Twitter',
    icon: 'ph:x-logo',
    url: 'https://twitter.com/dankerow'
  },
  {
    name: 'LinkedIn',
    icon: 'ph:linkedin-logo-duotone',
    url: 'https://www.linkedin.com/in/dan-mutombo/'
  },
  {
    name: 'Email',
    icon: 'ph:envelope-duotone',
    url: 'mailto:hi@danmutombo'
  }
]

const spotifyIntervalId = ref<NodeJS.Timeout | null>(null)

const { data: spotify, refresh: refreshSpotifyActivity } = await useLazyAsyncData<SpotifyData>('spotify', async () => {
  const lanyard = await $fetch<{
    data: {
      spotify: {
        song: string
        artist: string
      } | null
    }
  }>('https://api.lanyard.rest/v1/users/804827945997959209')

  if (lanyard.data.spotify) {
    return {
      listening: true,
      track: lanyard.data.spotify.song,
      artist: lanyard.data.spotify.artist
    }
  } else {
    return {
      listening: false,
      track: '',
      artist: ''
    }
  }
}, {
  default: () => ({
    listening: false,
    track: '',
    artist: ''
  })
})

onMounted(() => {
  onGradientLoaded(() => {
    // @ts-expect-error - Gradient is loaded from external script
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas-hero')
  })

  spotifyIntervalId.value = setInterval(refreshSpotifyActivity, 30000)
})

onUnmounted(() => {
  if (spotifyIntervalId.value) {
    clearInterval(spotifyIntervalId.value)
  }
})
</script>

<template>
  <main>
    <div
      class="hero d-flex align-items-center overflow-hidden position-relative py-12 py-lg-8"
      style="min-height: 100dvh"
    >
      <canvas
        id="gradient-canvas-hero"
        data-transition-in
      />

      <div class="container">
        <motion.h1
          class="display-1 text-white fw-bolder lh-1"
          :initial="{ opacity: 0, y: -50 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{
            once: true
          }"
          :transition="{ duration: 0.25, delay: 0.35 }"
        >
          Dan Mutombo
        </motion.h1>

        <motion.p
          class="mb-4 lead fst-italic text-white-50"
          :initial="{ opacity: 0, y: -30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{
            once: true
          }"
          :transition="{ duration: 0.25, delay: 0.4 }"
        >
          Software developer, building whatever in my bed.
        </motion.p>

        <motion.div
          v-if="spotify?.listening"
          class="spotify-status d-inline-flex align-items-center mt-1 py-2 ps-3 pe-4 rounded-pill"
          :initial="{ opacity: 0, x: -10 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{
            once: true
          }"
          :transition="{ duration: 0.25, delay: 0.45 }"
        >
          <div class="spotify-icon-pulse d-flex align-items-center justify-content-center position-relative me-3">
            <Icon
              name="fa6-brands:spotify"
              class="spotify-icon z-1"
              size="1.25em"
            />
          </div>

          <div
            class="spotify-info overflow-hidden"
            style="max-width: 180px;"
          >
            <div
              class="spotify-track text-truncate lh-1"
              style="margin-bottom: 0.2rem;"
            >
              {{ spotify.track }}
            </div>

            <div
              class="spotify-artist lh-1"
              style="font-size: x-small;"
            >
              {{ spotify.artist }}
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <div
      id="about"
      class="py-10 position-relative"
    >
      <div class="container">
        <div class="row g-2 mb-5">
          <div class="d-flex align-items-center mb-5">
            <motion.h2
              class="text-white h3 mb-0 me-3 "
              :initial="{ opacity: 0, y: -20 }"
              :in-view="{ opacity: 1, y: 0 }"
              :in-view-options="{
                once: true,
                margin: '0px 0px -20px 0px',
                amount: 0.1
              }"
              :transition="{ duration: 0.25, delay: 0.35 }"
            >
              About
            </motion.h2>

            <motion.div
              class="heading-line flex-grow-1"
              :initial="{ scaleX: 0 }"
              :in-view="{ scaleX: 1 }"
              :in-view-options="{
                once: true,
                margin: '0px 0px -20px 0px',
                amount: 0.1
              }"
              :transition="{ duration: 0.25, delay: 0.35 }"
            />
          </div>

          <div class="about-content ps-2 ps-sm-3 border-start border-2 border-secondary border-opacity-10">
            <motion.p
              class="lead"
              :initial="{ opacity: 0, y: -10 }"
              :in-view="{ opacity: 1, y: 0 }"
              :in-view-options="{
                once: true
              }"
              :transition="{ duration: 0.25, delay: 0.4 }"
            >
              I'm a software developer, currently studying for a bachelor's degree in computer science, majoring in cyber security.
            </motion.p>

            <motion.p
              class="lead"
              :initial="{ opacity: 0, y: -10 }"
              :in-view="{ opacity: 1, y: 0 }"
              :in-view-options="{
                once: true
              }"
              :transition="{ duration: 0.25, delay: 0.45 }"
            >
              My primary area of interest is web development, because I love experimenting with new things and expressing my imagination.
              You can go through my
              <NuxtLink
                to="#projects"
                class="about-link link-body-emphasis link-offset-3 link-underline-opacity-25 link-underline-opacity-75-hover"
              >
                projects</NuxtLink> to see what I've been up to.
            </motion.p>

            <motion.p
              class="lead mb-0"
              :initial="{ opacity: 0, y: -10 }"
              :in-view="{ opacity: 1, y: 0 }"
              :in-view-options="{
                once: true
              }"
              :transition="{ duration: 0.25, delay: 0.5 }"
            >
              When I'm not on my computer, I often listen to music. I love playing games whenever I have free time. And I also enjoy photography and dancing.
            </motion.p>
          </div>
        </div>

        <div class="my-2 d-flex flex-wrap gap-3 align-items-center">
          <motion.span
            v-for="(tech, index) in mainTechs"
            :key="index"
            :initial="{ opacity: 0, y: 20 }"
            :in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{
              once: true,
              margin: '0px 0px -20px 0px',
            }"
            :transition="{ duration: 0.25, delay: 0.45 + index * 0.1 }"
            class="tag"
          >
            <Icon
              :name="tech.icon"
              size="1.25em"
              class="me-2"
            />
            {{ tech.name }}
          </motion.span>
        </div>

        <div class="row align-items-center mt-5">
          <motion.div
            class="col-md-4 mb-4 mb-md-0"
            :initial="{ opacity: 0, x: -20 }"
            :in-view="{ opacity: 1, x: 0 }"
            :in-view-options="{
              once: true
            }"
            :transition="{ duration: 0.25, delay: 0.7 }"
          >
            <NuxtLink
              href="/files/Resume.pdf"
              class="btn btn-minimal d-inline-flex align-items-center"
              target="_blank"
            >
              <Icon
                name="material-symbols:download"
                class="me-2"
              />
              Download my resume
            </NuxtLink>
          </motion.div>

          <div class="col-md-8">
            <div class="social-row d-flex flex-wrap justify-content-md-end gap-2">
              <MotionNuxtLink
                v-for="(link, index) in socialLinks"
                :key="index"
                :initial="{ opacity: 0, y: -20 }"
                :in-view="{ opacity: 1, y: 0 }"
                :in-view-options="{
                  once: true,
                  margin: '0px 0px -20px 0px',
                }"
                :transition="{ duration: 0.25, delay: 0.45 + index * 0.1 }"
                :href="link.url"
                class="social-pill"
                :aria-label="link.name"
                :rel="link.name === 'Email' ? undefined : 'noopener'"
                :target="link.name === 'Email' ? undefined : '_blank'"
              >
                <Icon
                  :name="link.icon"
                  size="1.25em"
                />

                <span class="d-none d-sm-inline ms-2">
                  {{ link.name }}
                </span>
              </MotionNuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionsProjects />

    <SectionsExperience />
  </main>
</template>

<style lang="scss">
.heading-line {
  height: 2px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);
}
</style>

<style lang="scss" scoped>
#gradient-canvas-hero {
  --gradient-color-1: #000000;
  --gradient-color-2: #6564ff;
  --gradient-color-3: #3949AB;
  --gradient-color-4: #121212;

  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.spotify-status {
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 197, 94, 0.25);
  }
}

.spotify-icon-pulse {
  &:before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba(34, 197, 94, 0.45);
    animation: pulse 2s infinite;
  }
}

.spotify-icon {
  color: rgb(34, 197, 94);
}

.spotify-track {
  color: rgb(240, 240, 240);
  font-size: 0.95rem;
  font-weight: 500;

  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }

  &:hover {
    white-space: nowrap;
    text-overflow: clip;
    animation: slide 10s linear infinite;
  }
}

.spotify-artist {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}

#about {
  background-color: rgba(8, 8, 8, 0.4);
  backdrop-filter: blur(100px);
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.about-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.3);
  text-decoration: underline;
}

.social-row {
  text-align: right;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  color: #a4a4a4;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: white;
    transform: translateY(-2px);
  }
}
</style>
