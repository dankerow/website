<script setup lang="ts">
const { lanyard, getStatusDetails } = useDiscordStatus()
</script>

<template>
  <section class="hero pt-14 pb-4">
    <div class="container">
      <span class="tooltip mb-2" :class="{ spotify: lanyard?.spotify }" v-html="lanyard ? getStatusDetails.base : 'beep...'" />

      <h1 class="title display-5 text-white fw-bolder">
        <span class="special-letter">D</span>an
        <span class="special-letter">M</span>utombo
      </h1>

      <p class="mb-0 small fst-italic">
        Software developer, building whatever in my bed.
      </p>

      <hr>

      <p>
        I'm a software developer, currently studying for a bachelor's degree in computer science, majoring in cyber security.
      </p>

      <p>
        My primary area of interest is web development, because I love experimenting with new things and expressing my imagination.
        You can go through my
        <NuxtLink href="#projects" class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">
          projects
        </NuxtLink> to see what I've been up to.
      </p>

      <p>
        When I'm not on my computer, I often listen to music. I also enjoy photography and dancing.
      </p>

      <hr>

      <p>
        I'm currently looking for an internship or a part-time job. If you're interested, you can contact me via email at
        <NuxtLink href="mailto:hi@danmutombo.com" class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">
          email
        </NuxtLink>
        or on
        <NuxtLink href="https://www.linkedin.com/in/dan-mutombo/" class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">
          <Icon class="me-2 align-middle" name="ph:linkedin-logo-duotone" />
          <span>LinkedIn</span>
        </NuxtLink>.
      </p>

      <p>
        You can also
        <NuxtLink href="/files/Resume.pdf" class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover" target="_blank">
          download my resume
        </NuxtLink>.
      </p>

      <hr>

      <p>
        You can also find me on

        <NuxtLink class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover" href="https://github.com/dankerow" aria-label="GitHub" target="_blank">
          <Icon class="me-2 align-middle" name="ph:github-logo-duotone" />
          <span>GitHub</span>
        </NuxtLink>, and

        <NuxtLink class="text-decoration-underline link-offset-3 link-underline link-underline-opacity-25 link-underline-opacity-75-hover" href="https://twitter.com/dankerow" aria-label="Twitter" target="_blank">
          <Icon class="me-2 align-middle" name="pajamas:twitter" />
          <span>(Twitter)</span>
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
	.tooltip {
		color: white;
		font-size: .825rem;
		font-weight: 500;
		display: inline-block;
		position: relative;
		background: rgba(146, 164, 184, 0.3);
		border: 2px solid rgba(146, 164, 184, 0.8);
		border-radius: 0.25rem;
		padding: 0.45rem 0.75rem;

		&:after {
			content: '';
			position: absolute;
			bottom: -8px;
			left: 10%;
			transform: translateX(-50%);
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 8px 8px 0 8px;
			border-color: rgba(146, 164, 184, 0.8) transparent transparent transparent;
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

	.title {
		.special-letter {
			color: rgb(146, 164, 184);
			text-shadow: 0 2px rgba(146, 164, 184, 0.45);
		}
	}

	.social-links {
		a {
			&:not(:last-child) {
				margin-right: 1.875rem;
			}
		}
	}
}
</style>
