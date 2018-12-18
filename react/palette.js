import palette from '../stylus/settings/theme.json'

const colors = {}

Object.keys(palette).forEach(function(name) {
  colors[name] = 'var(--' + name + ')'
})

export default colors
