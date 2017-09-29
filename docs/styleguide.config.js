const path = require('path')

module.exports = {
  components: '../react/**/*.jsx',
  webpackConfig: require('./webpack.config.js'),
  serverPort: 6161,
  skipComponentsWithoutExample: true,
  styleguideDir: path.resolve(__dirname, '../build/react'),
  require: [
    path.join(__dirname, './style.styl')
  ]
}
