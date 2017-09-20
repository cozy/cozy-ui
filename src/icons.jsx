const normalize = function (k) {
  return k.replace('icon-', '').replace(/\.svg$/, '').replace(/^\.\//, '')
}

const importIcons = function () {
  const names = [
    'icon-album-add',
    'icon-album-remove',
    'icon-check',
    'icon-cozy',
    'icon-cross',
    'icon-delete',
    'icon-device-laptop',
    'icon-dots',
    'icon-download',
    'icon-moveto',
    'icon-openwith',
    'icon-paperplane',
    'icon-rename',
    'icon-share',
    'icon-upload',
    'icon-warn',
    'icon-warning'
  ]
  let icons = {}
  names.map(n => {
    const icon = require('!!svg-sprite-loader?symbolId=cozyu[name]!../loaders/strip-fill-loader!../assets/icons/ui/' + n + '.svg')
    icons[normalize(n)] = icon.default || icon
  })
  return icons
}

const icons = importIcons()

module.exports = icons
