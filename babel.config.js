module.exports = {
  presets: [
    ['cozy-app', { presetEnv: { modules: false } }]
  ],
  env: {
    transpilation: {
      plugins: [
        [
          'css-modules-transform',
          {
            extensions: ['.styl'],
            preprocessCss: './preprocess',
            extractCss: './transpiled/react/stylesheet.css',
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        ]
      ]
    }
  },
  ignore: ['examples/**/*']
}
