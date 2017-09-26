const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.resolve(__dirname, './index')
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      '../assets': path.resolve(__dirname, '../assets')
    },
    extensions: ['.jsx', '.js', '.json', '.styl']
  },
  output: {
    path: path.resolve(__dirname, '../react'),
    libraryTarget: 'umd',
    library: 'cozy-ui/react',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
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
      },
      {
        test: /\.svg$/,
        include: /(icons\/base)/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          symbolId: 'cozyu[name]',
          spriteFilename: 'icons-base.svg'
        }
      },
      {
        test: /\.svg$/,
        include: /(icons\/ui)/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'icons-legacy.svg'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new SpriteLoaderPlugin(),
    new CopyPlugin([{
      from: path.resolve(__dirname, './helpers'),
      to: path.resolve(__dirname, '../react/helpers')
    }]),
    new CopyPlugin([{
      from: path.resolve(__dirname, './entry.js'),
      to: path.resolve(__dirname, '../react/index.js')
    }]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
}
