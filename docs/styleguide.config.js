const path = require('path')

module.exports = {
  title: 'Cozy UI React components',
  sections: [
    {
      name: 'Basics',
      components: () => [
        '../react/Button/index.jsx',
        '../react/Spinner/index.jsx',
        '../react/Icon/index.jsx'
      ]
    },
    {
      name: 'Forms',
      components: () => [
        '../react/Input/index.jsx',
        '../react/Textarea/index.jsx',
        '../react/Label/index.jsx',
        '../react/Toggle/index.jsx',
        '../react/Field/index.jsx',
        '../react/SelectBox/index.jsx'
      ]
    },
    {
      name: 'Layout',
      components: () => [
        '../react/Sidebar/index.jsx',
        '../react/Hero/index.jsx'
      ]
    },
    {
      name: 'Content',
      components: () => [
        '../react/Media/Media.jsx',
        '../react/Modal/index.jsx',
        '../react/Avatar/index.jsx'
      ]
    },
    {
      name: 'Navigation',
      components: () => [
        '../react/ActionMenu/index.jsx',
        '../react/Menu/index.jsx'
      ]
    },
    {
      name: 'Special',
      components: () => [
        '../react/Overlay/index.jsx',
        '../react/IntentModal/IntentModal.jsx',
        '../react/IntentOpener/IntentOpener.jsx'
      ]
    }
  ],
  components: '../react/**/*.jsx',
  template: 'template.html',
  theme: {
    fontFamily: {
      base: 'Lato, sans-serif'
    }
  },
  webpackConfig: require('./webpack.config.js'),
  serverPort: 6161,
  skipComponentsWithoutExample: true,
  styleguideDir: path.resolve(__dirname, '../build/react'),
  require: [
    path.join(__dirname, './style.styl')
  ],
  showCode: true,
  showUsage: true,
  context: {
    utils: path.resolve(__dirname, 'utils'),
    content: path.resolve(__dirname, 'fixtures/content')
  }
}
