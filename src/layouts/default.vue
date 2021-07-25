<template>
	<div>
		<Header />

		<Nuxt role="main" />

		<Footer />

		<CookieBanner />
	</div>
</template>

<script>
export default {
	head() {
		return {
			...this.$nuxtI18nHead({ addSeoAttributes: true }),
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.$i18n.t('shortDescription')
				},
				{
					hid: 'og:description',
					name: 'og:description',
					property: 'og:description',
					content: this.$i18n.t('shortDescription')
				}
			]
		}
	}
}
</script>
