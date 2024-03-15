const env = require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'danmutombo.com',
      env: {
        ...env.parsed
      },
      script: './.output/server/index.mjs'
    }
  ]
}
