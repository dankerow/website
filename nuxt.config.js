const baseURL = process.env.NODE_ENV === 'production' ? 'https://danker.com' : 'http://localhost:6350'

export default {
	rootDir: './',
	srcDir: 'src',
	target: 'static',
	server: {
		port: 6350
	},
	head: {
		title: 'Dan Mutombo',
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'robots', content: 'noydir,noodp,noarchive,nocache,notranslate,follow,imageindex,index' },
			{ name: 'google', content: 'notranslate' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }
		],
		script: [
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.bundle.min.js',
				type: 'text/javascript',
				defer: true
			}
		]
	},

	css: [
		'~/assets/scss/bedrock'
	],

	plugins: [
	],

	components: true,

	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/google-fonts',
		'@nuxtjs/svg'
	],

	modules: [
		'nuxt-helmet',
		'@nuxtjs/pwa',
		'nuxt-i18n',
		['vue-scrollto/nuxt', {
			easing: 'ease'
		}],
		'@nuxtjs/sitemap'
	],

	googleFonts: {
		families: {
			'Rubik': {
				wght: [300, 400, 500, 600, 700, 800, 900]
			}
		},
		display: 'swap'
	},

	helmet: {
		frameguard: false
	},

	i18n: {
		baseUrl: baseURL,
		locales: [
			{ code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
			{ code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.js' }
		],
		defaultLocale: 'en',
		lazy: true,
		langDir: 'locales/',
		detectBrowserLanguage: {
			onlyOnRoot: true
		},
		seo: false
	},

	pwa: {
		meta: {
			mobileApp: true,
			name: 'Dan Mutombo',
			appleStatusBarStyle: '#92A4B8FF'
		},
		manifest: {
			name: 'Dan Mutombo',
			// eslint-disable-next-line camelcase
			start_url: '/',
			// eslint-disable-next-line camelcase
			short_name: 'Dan M.',
			lang: 'en',
			display: 'fullscreen',
			// eslint-disable-next-line camelcase
			background_color: '#1C2125FF',
			// eslint-disable-next-line camelcase
			theme_color: '#92A4B8FF'
		},
		workbox: {
			enabled: false
		}
	},

	sitemap: {
		hostname: baseURL,
		i18n: true
	},

	build: {
		devtools: true,
		html: {
			minify: {
				collapseBooleanAttributes: true,
				decodeEntities: true,
				minifyCSS: true,
				minifyJS: true,
				processConditionalComments: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				trimCustomFragments: true,
				useShortDoctype: true,
				removeComments: true
			}
		},
		publicPath: '/_/',
		babel: {
			presets({ isServer }, [, options]) {
				options.corejs = {
					...options.corejs,
					version: 3
				}
			}
		}
	}
}
