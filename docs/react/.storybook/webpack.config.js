module.exports = {
  resolve: {
    extensions: ['.styl'],
    extensions: ['.jsx'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    loaders: [{
      test: /\.styl$/,
      loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
    }]
  }
}
