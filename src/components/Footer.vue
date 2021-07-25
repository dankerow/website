<template>
	<footer>
		<div class="footer-social py-3 text-center">
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

		<div class="footer-bottom p-3">
			<div class="container">
				<div class="row gy-4 gy-sm-0 row-cols-1 row-cols-md-2 row-cols-lg-2 text-center">
					<div class="col">
						<p class="d-inline-block mb-0 float-md-start">
							© 2021 All rights reserved. Designed and developed by Dan Mutombo.
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
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
footer {
	background-color: rgb(25, 30, 33);

	.footer-social {
		background-color: #161a1e;
		border-bottom: 2px solid rgb(28, 33, 37);

		svg {
			width: 18px;
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

	.footer-bottom {
		font-size: 12px;
	}
}
</style>
