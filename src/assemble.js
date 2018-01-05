const path = require('path')
const ssr = require('done-ssr')

// this is what causes the error - loading css with steal-css instead of done-css
const render = ssr({
  main: 'autorender-bug/server.stache!done-autorender',
  config: path.join(__dirname, '..', 'package.json!npm')
})
