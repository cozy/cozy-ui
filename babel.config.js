const path = require('path')
const { isUsingDevStyleguidist } = require('./scripts/build-utils')

const TRANSPILATION_DIRECTORY = process.env.BABEL_ENV === 'transpilationES5' ? 'es5' : 'transpiled'

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
          extractCss: `./${TRANSPILATION_DIRECTORY}/react/stylesheet.css`,
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      ],
  ['inline-json-import', {}]
].filter(Boolean)

const transpilationPlugins = [
  ...plugins,
  [
    './scripts/babel-transform-relative-paths-plugin.js',
    {
      from: path.resolve(__dirname, './react'),
      to: `cozy-ui/${TRANSPILATION_DIRECTORY}/react`
    }
  ]
]

const transpilationIgnores = ['**/*.spec.jsx', '**/*.spec.js']

module.exports = {
  presets: [
    [
      'cozy-app',
      { presetEnv: { modules: false }, transformRuntime: { helpers: true } }
    ]
  ],
  env: {
    transpilation: {
      plugins: transpilationPlugins,
      ignore: transpilationIgnores
    },
    transpilationES5: {
      presets: [['cozy-app', { transformRuntime: { helpers: true } }]],
      plugins: transpilationPlugins,
      ignore: transpilationIgnores
    },
    test: {
      presets: [['cozy-app', { transformRuntime: { helpers: true } }]],
      plugins: plugins
    }
  },
  ignore: ['examples/**/*']
}
