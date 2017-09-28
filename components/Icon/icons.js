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
    'icon-dots',
    'icon-download',
    'icon-moveto',
    'icon-openwith',
    'icon-paperplane',
    'icon-rename',
    'icon-restore',
    'icon-share',
    'icon-upload',
    'icon-warn',
    'icon-warning'
  ]
  let icons = {}
  names.map(n => {
    const icon = require('../../assets/icons/base/' + n + '.svg')
    icons[normalize(n)] = icon.default || icon
  })
  return icons
}

const icons = importIcons()

module.exports = icons
