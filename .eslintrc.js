module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 12
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins: [],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/multi-word-component-names': 'off',
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'block-spacing': 'error',
		camelcase: 'error',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': 'error',
		'comma-style': ['error', 'last'],
		curly: ['error', 'multi-line', 'consistent'],
		'dot-location': ['error', 'property'],
		'handle-callback-err': 'off',
		indent: ['error', 'tab'],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'max-nested-callbacks': [
			'error',
			{
				max: 4
			}
		],
		'no-undef': 'off',
		'no-console': 'off',
		'no-empty-function': 'error',
		'no-floating-decimal': 'error',
		'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-useless-escape': 'off',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': 'error',
		'no-shadow': [
			'error',
			{
				allow: [
					'err',
					'resolve',
					'reject'
				]
			}
		],
		'no-trailing-spaces': 'error',
		'no-redeclare': 'off',
		'no-var': 'off',
		'no-unused-vars': 'off',
		'object-curly-spacing': ['error', 'always'],
		'one-var': ['error', 'never'],
		'prefer-const': 'error',
		'quote-props': 'off',
		quotes: ['error', 'single'],
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		yoda: 'error',
		'no-tabs': 'off'
	}
}
