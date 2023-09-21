<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="text-center">
    <div class="footer-social py-3">
      <div class="container">
        <a href="https://github.com/dankerow" aria-label="GitHub" target="_blank">
          <Icon name="ph:github-logo-duotone" />
        </a>

        <a href="https://www.linkedin.com/in/dan-mutombo/" aria-label="LinkedIn" target="_blank">
          <Icon name="ph:linkedin-logo-duotone" />
        </a>

        <a href="https://twitter.com/dankerow" aria-label="Twitter" target="_blank">
          <Icon name="ph:twitter-logo-duotone" />
        </a>
      </div>
    </div>

    <div class="footer-bottom py-3">
      <div class="container">
        <p class="mb-0">
          © {{ year }} All rights reserved. Designed and developed by Dan Mutombo.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
	.footer-social {
		background-color: rgba(20, 20, 20, 0.5);
		border-bottom: 1px solid rgba(38, 38, 38, 0.8);

		a {
			&:not(:last-child) {
				margin-right: 1.875rem;
			}
		}
	}

	.footer-bottom {
		font-size: 12px;
	}
}
</style>
