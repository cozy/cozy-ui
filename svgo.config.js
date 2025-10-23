module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          inlineStyles: {
            onlyMatchedOnce: false
          },
          cleanupIDs: {
            minify: false
          }
        }
      }
    }
  ]
}
