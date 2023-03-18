<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
	<footer class="text-center">
		<div class="footer-social py-3">
			<div class="container">
				<a href="https://www.linkedin.com/in/dan-mutombo/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
					<Icon name="ph:linkedin-logo-duotone" />
				</a>

				<a href="https://github.com/dankerow" aria-label="GitHub" target="_blank" rel="noreferrer">
					<Icon name="line-md:github-twotone" />
				</a>

				<a href="https://twitter.com/dankerow" aria-label="Twitter" target="_blank" rel="noreferrer">
					<Icon name="ph:twitter-logo-duotone" />
				</a>
			</div>
		</div>

		<div class="footer-bottom py-3">
			<div class="container">
				<p class="mb-0">
					© {{ year }} {{ $t('footer.copyright.text') }}
				</p>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	background-color: rgb(25, 30, 33);

	.footer-social {
		background-color: #161a1e;
		border-bottom: 2px solid rgb(28, 33, 37);

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
