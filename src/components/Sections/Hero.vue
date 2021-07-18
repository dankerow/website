<template>
	<section class="hero d-flex align-items-center">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1 class="header-heading-1">
						Hi, my name is
					</h1>

					<h2 class="header-heading-2">
						<span style="text-shadow: 0 2px rgba(146, 164, 184, 0.45);-webkit-text-stroke-color: #161e2e; color: rgb(146, 164, 184);">D</span>an
						<span style="text-shadow: 0 2px rgba(146, 164, 184, 0.45);-webkit-text-stroke-color: #161e2e; color: rgb(146, 164, 184)">M</span>utombo.
					</h2>

					<p class="header-short-description">
						A junior web developer living in Canada, currently enrolled at <a href="https://www.columbiacollege.ca/" target="_blank" rel="noreferrer">Columbia College</a>, completing an Associate Degree in Computer Science.
					</p>

					<div class="social-links">
						<a href="https://www.linkedin.com/in/dan-mutombo-3655281b1/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
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
	position: relative;
	height: 700px;

	.header-heading-1 {
		font-size: 1rem;
		font-weight: 300;
	}

	.header-heading-2 {
		color: #fff;
		font-size: 4.35rem;
		font-weight: 600;
	}

	.header-short-description {
		color: rgb(87,97,113);
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
</style>
