const normalize = function (k) {
  return k.replace('icon-', '').replace(/\.svg$/, '').replace(/^\.\//, '')
}

const importIcons = function () {
  const ctx = require.context('!!svg-sprite-loader?name=[name]_[hash]!../loaders/strip-fill-loader!../assets/icons/ui', true, /icon-/)
  const keys = ctx.keys()
    .filter(x => x.indexOf('./icon-') === 0)
    .filter(x => x.indexOf('-white') === -1)
  const values = keys.map(ctx)
  const icons = keys.reduce((o, k, i) => {
    o[normalize(k)] = values[i]
    return o
  }, {})
  return icons
}

const icons = importIcons()

module.exports = icons
