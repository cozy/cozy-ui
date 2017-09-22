const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const path = require('path')

module.exports = {
  entry: {
    Alerter: path.resolve(__dirname, './Alerter/index'),
    Button: path.resolve(__dirname, './Button/index'),
    I18n: path.resolve(__dirname, './I18n/index'),
    Icon: path.resolve(__dirname, './Icon/index'),
    Markdown: path.resolve(__dirname, './Markdown/index'),
    Modal: path.resolve(__dirname, './Modal/index'),
    SelectionBar: path.resolve(__dirname, './SelectionBar/index'),
    Spinner: path.resolve(__dirname, './Spinner/index'),
    Tabs: path.resolve(__dirname, './Tabs/index'),
    Toggle: path.resolve(__dirname, './Toggle/index')
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
    path: path.resolve(__dirname, '../react/'),
    libraryTarget: 'umd',
    filename: '[name]/index.js',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
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
          spriteFilename: 'icons-base-[hash].svg'
        }
      },
      {
        test: /\.svg$/,
        include: /(icons\/ui)/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'icons-legacy-[hash].svg'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]/index.css'),
    new SpriteLoaderPlugin(),
    new CopyPlugin([{
      from: path.resolve(__dirname, './index.js'),
      to: path.resolve(__dirname, '../react/index.js')
    }]),
    new CopyPlugin([{
      from: path.resolve(__dirname, './helpers'),
      to: path.resolve(__dirname, '../react/helpers')
    }])
  ]
}
