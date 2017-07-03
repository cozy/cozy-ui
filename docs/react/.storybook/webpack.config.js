module.exports = {
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    },
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
