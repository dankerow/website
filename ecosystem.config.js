const env = require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'danmutombo.com',
      exec_mode: 'cluster',
      instances: 2,
      env: {
        ...env.parsed
      },
      script: './.output/server/index.mjs'
    }
  ]
}
