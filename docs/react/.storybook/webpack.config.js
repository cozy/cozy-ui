module.exports = {
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.styl']
  },
  module: {
    rules: [{
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
      ]
    }]
  }
}
