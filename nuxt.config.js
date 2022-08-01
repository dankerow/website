const hostname = process.env.NODE_ENV !== 'production' ? `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}` : process.env.HOSTNAME

export default {
	rootDir: './',
	srcDir: 'src',
	target: 'static',
	server: {
		port: process.env.SERVER_PORT
	},
	head: {
		title: 'Dan Mutombo',
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'A junior web developer living in Canada, currently enrolled at Columbia College, completing an Associate Degree in Computer Science.' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'google', content: 'notranslate' },
			{ name: 'robots', content: 'noydir,noodp,noarchive,nocache,notranslate,follow,imageindex,index' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.bundle.min.js',
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
		'@nuxtjs/google-gtag',
		'@nuxtjs/pwa',
		'@nuxtjs/svg',
		'cookie-universal-nuxt'
	],

	modules: [
		'nuxt-helmet',
		'@nuxtjs/i18n',
		'nuxt-purgecss',
		['vue-scrollto/nuxt', {
			easing: 'ease'
		}],
		'@nuxtjs/sitemap'
	],

	googleFonts: {
		families: {
			Rubik: {
				wght: [300, 400, 500, 600, 700, 800, 900]
			},
			'Roboto Mono': {
				wght: [400]
			}
		},
		display: 'swap'
	},

	'google-gtag': {
		id: 'G-28NM2EX8B5',
		config: {
			anonymize_ip: true
		}
	},

	helmet: {
		frameguard: false
	},

	i18n: {
		strategy: 'prefix_and_default',
		baseUrl: hostname,
		locales: [
			{ code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
			{ code: 'es', iso: 'es-ES', name: 'Español', file: 'es.js' },
			{ code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.js' },
			{ code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.js' }
		],
		defaultLocale: 'en',
		lazy: true,
		langDir: 'locales/',
		vueI18n: {
			fallbackLocale: 'en'
		}
	},

	purgeCSS: {
		variables: true,
		whitelist: ['svg']
	},

	pwa: {
		meta: {
			mobileApp: true,
			name: 'Dan Mutombo',
			appleStatusBarStyle: '#92a4b8'
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
			background_color: '#1c2125',
			// eslint-disable-next-line camelcase
			theme_color: '#92a4b8'
		},
		workbox: {
			enabled: false
		}
	},

	sitemap: {
		hostname,
		gzip: true,
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
