const prefix = '--cztheme-'

/**
 * CSS variable name from a path
 * @param {*} name
 */
function variableName(name) {
  prefix + name.join('-')
}

/**
 * Create an style object with all CSS variables for a theme
 *
 * @param {object} theme - Cozy Theme object
 * @returns {object} styles with CSS variables
 */
function styleFromTheme(theme) {
  const value = theme
  const name = []
  const styles = {}
  const siblings = {}
  return convert(value, name, styles, siblings)
}

/**
 * Convert a node object in a cozy theme into a style
 * object with CSS variables
 *
 * @param {object} value - A node from a cozy theme
 * @param {array} name - The path for this node in the cozy theme
 * @param {style} style - A style object to fill with CSS variables (will mutate)
 * @param {object} siblings - The parent node from the cozy theme
 * @returns {object} styles with CSS variables
 */
function convert(value, name, styles, siblings) {
  const type = typeof value
  if (type === 'string') {
    if (value[0] === '&') {
      const key = value.substr(1)
      const otherName = [...name.slice(0, -1), key]
      convert(siblings[key], otherName, styles, siblings)
    } else {
      styles[variableName(name)] = value
    }
  } else if (type === 'number') {
    styles[variableName(name)] = value.toString(10)
  } else if (type === 'object') {
    const keys = Object.keys(value)
    for (const key of keys) {
      const nextValue = value[key]
      const nextName = [...name, key]
      const nextSiblings = value
      convert(nextValue, nextName, styles, nextSiblings)
    }
  } else if (value) {
    throw new Error(`Unknown theme value type ${type}`)
  } // nothing for undefined, null, and false
  return styles
}

export default styleFromTheme
