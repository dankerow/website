<script setup lang="ts">
definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name: 'Dan Mutombo',
        jobTitle: 'Software Developer',
        sameAs: [
          'https://github.com/dankerow',
          'https://www.linkedin.com/in/dan-mutombo/',
          'https://twitter.com/dankerow'
        ],
        url: 'https://danmutombo.com/'
      },
    },
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        url: 'https://danmutombo.com/',
        name: 'Dan Mutombo'
      }
    }
  ]
})

const { lanyard, getStatusDetails } = useDiscordStatus()
</script>

<template>
  <main>
    <div class="hero min-vh-100 d-flex align-items-center overflow-hidden position-relative py-10 py-lg-8">
      <div class="position-absolute special-gradient-start" />
      <div class="position-absolute special-gradient-end" />

      <div class="container">
        <span class="tooltip mb-3" :class="{ spotify: lanyard?.spotify }" v-html="lanyard ? getStatusDetails.base : 'beep...'" />

        <h1 class="display-5 text-white fw-bolder">
          Dan Mutombo
        </h1>

        <p class="mb-4 small fst-italic text-body-secondary">
          Software developer, building whatever in my bed.
        </p>

        <p>
          I'm a software developer, currently studying for a bachelor's degree in computer science, majoring in cyber security.
        </p>

        <p>
          My primary area of interest is web development, because I love experimenting with new things and expressing my imagination.
          You can go through my
          <NuxtLink to="#projects" class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">
            projects
          </NuxtLink> to see what I've been up to.
        </p>

        <p>
          When I'm not on my computer, I often listen to music. I love playing games whenever I have free time. And I also enjoy photography and dancing.
        </p>

        <hr>

        <p class="mb-5">
          You can find me on

          <NuxtLink href="https://github.com/dankerow" class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover me-2" aria-label="GitHub" target="_blank">
            <Icon class="me-2 align-middle" name="ph:github-logo-duotone" />
            <span>GitHub</span>
          </NuxtLink>

          <NuxtLink href="https://twitter.com/dankerow"  class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover me-2" aria-label="Twitter" target="_blank">
            <Icon class="me-2 align-middle" name="pajamas:twitter" />
            <span>(Twitter)</span>
          </NuxtLink>

          <NuxtLink href="https://www.linkedin.com/in/dan-mutombo/" class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover" aria-label="LinkedIn" target="_blank">
            <Icon class="me-2 align-middle" name="ph:linkedin-logo-duotone" />
            <span>LinkedIn</span>
          </NuxtLink>

          or by email at
          <NuxtLink href="mailto:hi@danmutombo.com" class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">
            hi@danmutombo.com
          </NuxtLink>.
        </p>

        <NuxtLink href="/files/Resume.pdf" class="btn btn-outline-primary" target="_blank">
          Download my resume
        </NuxtLink>
      </div>
    </div>

    <SectionsProjects />

    <SectionsExperience />
  </main>
</template>

<style lang="scss" scoped>
.hero {
  .tooltip {
    color: white;
    display: inline-block;
    position: relative;
    background: rgba(var(--bs-primary-rgb), 0.1);
    border: 1.5px solid rgba(var(--bs-primary-rgb), 0.2);
    border-radius: 0.35rem;
    padding: 0.45rem 0.75rem;

    &:after {
      content: '';
      position: absolute;
      bottom: -9.4px;
      left: 10%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px 8px 0 8px;
      border-color: rgba(var(--bs-primary-rgb), 0.2) transparent transparent transparent;
    }

    &.spotify {
      background: rgba(34, 197, 94, 0.3);
      border-color: rgb(34, 197, 94);
      color: rgb(0, 255, 94);

      &:after {
        border-color: rgba(34, 197, 94, 0.8) transparent transparent transparent;
      }
    }
  }
}

.special-gradient-start {
  filter: blur(64px);
  top: 130%;
  left: -18rem;
  background-color: rgba(var(--bs-primary-rgb), 0.6);
  height: 24rem;
  transform: translate(0, -50%) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  width: 24rem;
}

.special-gradient-end {
  filter: blur(64px);
  top: -40%;
  left: 110%;
  background-color: rgba(var(--bs-primary-rgb), 0.6);
  height: 24rem;
  transform: translate(-50%, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  width: 24rem;
}
</style>
