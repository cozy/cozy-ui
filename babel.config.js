const path = require('path')

const plugins = [
  [
    'css-modules-transform',
    {
      extensions: ['.styl'],
      preprocessCss: './preprocess',
      extractCss: './transpiled/react/stylesheet.css',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  ],
  ['inline-json-import', {}]
]

module.exports = {
  presets: [
    [
      'cozy-app',
      { presetEnv: { modules: false }, transformRuntime: { helpers: true } }
    ]
  ],
  env: {
    transpilation: {
      plugins: [
        ...plugins,
        [
          './scripts/babel-transform-relative-paths-plugin.js',
          {
            from: path.resolve(__dirname, './react'),
            to: 'cozy-ui/transpiled/react'
          }
        ]
      ],
      ignore: ['**/*.spec.jsx', '**/*.spec.js']
    },
    test: {
      presets: [['cozy-app', { transformRuntime: { helpers: true } }]],
      plugins: plugins
    }
  },
  ignore: ['examples/**/*']
}
