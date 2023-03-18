module.exports = {
	apps: [
		{
			name: 'danmutombo.com',
			port: '3000',
			exec_mode: 'cluster',
			instances: 'max',
			script: './.output/server/index.mjs'
		}
	]
}
