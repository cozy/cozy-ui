const path = require('path')
const { isUsingDevStyleguidist } = require('./scripts/build-utils')

const plugins = [
  // While developing on the styleguidist, we do not want babel to touch the CSS
  // otherwise CSS hot reload does not work
  isUsingDevStyleguidist()
    ? null
    : [
        'css-modules-transform',
        {
          extensions: ['.styl'],
          preprocessCss: './preprocess',
          extractCss: './transpiled/react/stylesheet.css',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      ],
  ['inline-json-import', {}]
].filter(Boolean)

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
      ignore: ['**/*.spec.jsx', '**/*.spec.js', '**/*.spec.tsx', '**/*.spec.ts']
    },
    test: {
      presets: [['cozy-app', { transformRuntime: { helpers: true } }]],
      plugins: plugins
    }
  },
  ignore: ['examples/**/*', '**/*.md', '**/*.styl', '**/*.json', '**/*.snap']
}
