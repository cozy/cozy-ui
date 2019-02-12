const browsers = require('browserslist-config-cozy')

module.exports = {
  plugins: [
    require('cssnano')({
      preset: [
        'advanced',
        {
          autoprefixer: { browsers },
          mergeIdents: false,
          reduceIdents: false,
          zindex: false
        }
      ]
    })
  ]
}
