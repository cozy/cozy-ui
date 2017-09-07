const ExtractTextPlugin = require("extract-text-webpack-plugin")

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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          },
          { loader: 'stylus-loader' }
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ]
}
