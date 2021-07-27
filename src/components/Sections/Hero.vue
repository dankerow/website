<template>
	<section class="hero">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 d-none d-lg-block">
					<img class="img-fluid" src="~assets/img/avatar.png" alt="" draggable="false">
				</div>
				<div class="col col-lg-7">
					<h1 class="header-heading-1">
						{{ $t('hero.headingOne') }}
					</h1>

					<h2 class="header-heading-2">
						<span class="special-letter">D</span>an
						<span class="special-letter">M</span>utombo.
					</h2>

					<i18n path="hero.shortDescription" tag="p" class="header-short-description">
						<template #college>
							<a href="https://www.columbiacollege.ca/" target="_blank" rel="noreferrer">{{ $t('hero.college') }}</a>
						</template>
					</i18n>

					<div class="social-links">
						<a href="https://www.linkedin.com/in/dan-mutombo/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
							<LinkedInLogo />
						</a>
						<a href="https://github.com/dankerow" aria-label="GitHub" target="_blank" rel="noreferrer">
							<GithubLogo />
						</a>
						<a href="https://twitter.com/dankerow" aria-label="Twitter" target="_blank" rel="noreferrer">
							<TwitterLogo />
						</a>
						<a href="https://instagram.com/dankerow" aria-label="Instagram" target="_blank" rel="noreferrer">
							<InstagramLogo />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	components: {
		GithubLogo: () => import('~/assets/icons/github-brands.svg?inline'),
		InstagramLogo: () => import('~/assets/icons/instagram.svg?inline'),
		LinkedInLogo: () => import('~/assets/icons/linkedin-brands.svg?inline'),
		TwitterLogo: () => import('~/assets/icons/twitter.svg?inline')
	}
}
</script>

<style lang="scss" scoped>
.hero {
	align-items: center;
	background-image: linear-gradient(to right, rgba(22, 26, 30, 0.9), rgba(22, 26, 30, 0.6), rgb(28, 33, 37));
	display: flex;
	min-height: 100vh;
	position: relative;

	img {
		position: absolute;
		max-width: 48%;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.header-heading-1 {
		font-family: "Roboto Mono", sans-serif;
		color: rgb(25, 30, 33);
		font-size: .775rem;
		font-weight: 700;
		display: inline-block;
		position: relative;
		background: rgb(146, 164, 184);
		border-radius: 0.25rem;
		padding: 0.45rem;

		&:after {
			content: '';
			position: absolute;
			bottom: -5px;
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 5px 5px 0 5px;
			border-color: rgb(146, 164, 184) transparent transparent transparent;
		}
	}

	.header-heading-2 {
		color: #fff;
		font-size: 4.35rem;
		font-weight: 600;

		.special-letter {
			color: rgb(146, 164, 184);
			text-shadow: 0 2px rgba(146, 164, 184, 0.45);
		}
	}

	.header-short-description {
		color: rgb(103, 114, 131);
		font-size: 1.125rem;
		max-width: 800px;
	}

	.social-links {
		svg {
			width: 1.125rem;
			height: auto;
		}

		a {
			opacity: 0.5;
			transition: opacity 0.3s ease-in-out;

			&:hover {
				opacity: 1;
			}

			&:not(:last-child) {
				margin-right: 2rem;
			}
		}
	}
}

@media (max-width: 768px) {
	.hero {
		background-image: linear-gradient(to right, rgb(22, 26, 30), rgba(22, 26, 30, 0.9), rgb(28, 33, 37)), url('~/assets/img/avatar.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
}

</style>
