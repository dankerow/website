<script setup lang="ts">
const { t } = useI18n()
const head = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: 'id',
	addSeoAttributes: true
})

const description = t('metadata.shortDescription')
const image = ref('https://danmutombo.com/icon.png')

useHead({
	title: 'Dan Mutombo',
	meta: [
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'description', content: description },
		{ name: 'format-detection', content: 'telephone=no' },
		{ name: 'google', content: 'notranslate' },
		{ name: 'robots', content: 'noydir,noodp,noarchive,nocache,notranslate,follow,imageindex,index' },
		{
			name: 'twitter:card',
			content: 'summary'
		},
		{
			name: 'twitter:site',
			content: '@dankerow'
		},
		{
			name: 'twitter:creator',
			content: '@dankerow'
		},
		{
			name: 'twitter:title',
			content: 'danmutombo.com'
		},
		{
			name: 'twitter:description',
			content: description
		},
		{
			name: 'twitter:image',
			content: image
		},
		{
			name: 'og:type',
			content: 'website'
		},
		{
			name: 'og:site_name',
			content: 'danmutombo.com'
		},
		{
			name: 'og:description',
			content: description
		},
		{
			name: 'og:image',
			content: image
		}
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	],
	script: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js',
			defer: true
		}
	]
})
</script>

<template>
	<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
		<Head>
			<template v-for="link in head.link" :key="link.id">
				<Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
			</template>
			<template v-for="meta in head.meta" :key="meta.id">
				<Meta :id="meta.id" :property="meta.property" :content="meta.content" />
			</template>
		</Head>
		<Body>
			<Header />

			<main>
				<slot />
			</main>

			<LazyFooter />

			<LazyCookieBanner />
		</Body>
	</Html>
</template>
