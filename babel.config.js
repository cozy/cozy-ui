const { version } = require('./package.json')
module.exports = {
  presets: ['cozy-app'],
  env: {
    transpilation: {
      plugins: [
        [
          'css-modules-transform',
          {
            extensions: ['.styl'],
            preprocessCss: './preprocess',
            extractCss: './transpiled/react/stylesheet.css',
            generateScopedName: `[name]__[local]___cozy_ui_${version.replace(
              '.',
              '_'
            )}`
          }
        ]
      ]
    }
  },
  ignore: ['examples/**/*']
}
