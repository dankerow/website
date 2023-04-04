<template>
  <section class="hero pt-16 pb-8">
    <div class="container">
      <span class="tooltip font-monospace">
        {{ $t('hero.headingOne') }}
      </span>

      <h1 class="header-heading-2 display-4 text-white fw-bolder">
        <span class="special-letter">D</span>an
        <span class="special-letter">M</span>utombo.
      </h1>

      <i18n-t scope="global" keypath="hero.shortDescription" tag="p" class="mb-4">
        <template #college>
          <a class="text-decoration-underline" href="https://www.columbiacollege.ca/" target="_blank" rel="noreferrer">{{ $t('hero.college') }}</a>
        </template>
      </i18n-t>

      <div class="social-links">
        <a href="https://www.linkedin.com/in/dan-mutombo/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <Icon name="ph:linkedin-logo-duotone" />
        </a>

        <a href="https://github.com/dankerow" aria-label="GitHub" target="_blank" rel="noreferrer">
          <Icon name="ph:github-logo-duotone" />
        </a>

        <a href="https://twitter.com/dankerow" aria-label="Twitter" target="_blank" rel="noreferrer">
          <Icon name="ph:twitter-logo-duotone" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
	.tooltip {
		color: rgb(146, 164, 184);
		font-size: .775rem;
		font-weight: 700;
		display: inline-block;
		position: relative;
		background: rgba(146, 164, 184, 0.3);
		border: 2px solid rgba(146, 164, 184, 0.8);
		border-radius: 0.25rem;
		padding: 0.45rem;

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
