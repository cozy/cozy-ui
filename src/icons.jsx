const normalize = function (k) {
  return k.replace('icon-', '').replace(/\.svg$/, '').replace(/^\.\//, '')
}

const importIcons = function () {
  const names = [
    'icon-album',
    'icon-album-add',
    'icon-album-remove',
    'icon-back',
    'icon-bottom',
    'icon-check',
    'icon-check-circleless',
    'icon-clock',
    'icon-cozy',
    'icon-cross',
    'icon-delete',
    'icon-destroy',
    'icon-device-laptop',
    'icon-dots',
    'icon-download',
    'icon-file',
    'icon-file-none',
    'icon-folder',
    'icon-forward',
    'icon-gear',
    'icon-hourglass',
    'icon-image',
    'icon-moveto',
    'icon-openwith',
    'icon-paperplane',
    'icon-people',
    'icon-plus',
    'icon-rename',
    'icon-restore',
    'icon-share',
    'icon-small-arrow',
    'icon-top',
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
