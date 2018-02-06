const normalize = function (k) {
  return k.replace('icon-', '').replace(/\.svg$/, '').replace(/^\.\//, '')
}

const importIcons = function () {
  const names = [
    'icon-album',
    'icon-album-add',
    'icon-album-remove',
    'icon-back',
    'icon-check',
    'icon-clock',
    'icon-cozy',
    'icon-cross',
    'icon-delete',
    'icon-destroy',
    'icon-device-laptop',
    'icon-dots',
    'icon-download',
    'icon-folder',
    'icon-forward',
    'icon-gear',
    'icon-image',
    'icon-moveto',
    'icon-openwith',
    'icon-paperplane',
    'icon-people',
    'icon-rename',
    'icon-restore',
    'icon-share',
    'icon-trash',
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
