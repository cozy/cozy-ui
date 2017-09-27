const path = require('path')

module.exports = {
  components: path.resolve(__dirname, '../react/{Button,Toggle}/*.{js,jsx}'),
  webpackConfig: require('./webpack.config.js'),
  serverPort: 6161,
  styleguideDir: path.resolve(__dirname, '../build/react'),
  require: [
    path.join(__dirname, './style.styl'),
  ]
}
