import palette from '../stylus/settings/theme.json'

const colors = {}

Object.keys(palette).forEach(function(name) {
  colors[name] = 'rgba(' + palette[name].join(',') + ')'
})

export default colors
