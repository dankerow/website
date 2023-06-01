<template>
  <section class="hero pt-14 pb-6">
    <div class="container">
      <span class="tooltip">
        @dankerow
      </span>

      <h1 class="header-heading-2 display-4 text-white fw-bolder">
        <span class="special-letter">D</span>an
        <span class="special-letter">M</span>utombo.
      </h1>

      <p class="mb-4">
        Software developer, building whatever in my bed.
      </p>

      <div class="social-links">
        <a href="https://github.com/dankerow" aria-label="GitHub" target="_blank">
          <Icon name="ph:github-logo-duotone" />
        </a>

        <a href="https://www.linkedin.com/in/dan-mutombo/" aria-label="LinkedIn" target="_blank">
          <Icon name="ph:linkedin-logo-duotone" />
        </a>

        <a href="https://instagram.com/danielito.mtb/" aria-label="Instagram" target="_blank">
          <Icon name="ph:instagram-logo-duotone" />
        </a>

        <a href="https://twitter.com/dankerow" aria-label="Twitter" target="_blank">
          <Icon name="ph:twitter-logo-duotone" />
        </a>
      </div>
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
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 8px 8px 0 8px;
			border-color: rgba(146, 164, 184, 0.8) transparent transparent transparent;
		}
	}

	.header-heading-2 {
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
