'use strict'

const KssWebpackPlugin = require('kss-webpack-plugin')
const KssConfig = {
  destination: 'styleguide',
  title: 'Cozy-UI Styleguide',
  source: './stylus',
  builder: './node_modules/michelangelo/kss_styleguide/custom-template/',
  placeholder: '[modifier]',
  homepage: 'styleguide.md',
  css: './build/app.css'
}
module.exports = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new KssWebpackPlugin(KssConfig)]
}
