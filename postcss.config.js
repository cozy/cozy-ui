module.exports = {
  plugins: [
    require('cssnano')({
      preset: [
        'advanced',
        {
          mergeIdents: false,
          reduceIdents: false,
          zindex: false
        }
      ]
    })
  ]
}
