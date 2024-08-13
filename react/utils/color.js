const getThemeNodeClassName = (type, variant) => `CozyTheme--${type}-${variant}`

const getNodeWithThemeCssVars = (type, variant) => {
  const className = getThemeNodeClassName(type, variant)

  return document.getElementsByClassName(className)[0]
}

export const createNodeWithThemeCssVars = (type, variant) => {
  if (process.env.NODE_ENV === 'test') return null

  if (!getNodeWithThemeCssVars(type, variant)) {
    const node = document.createElement('div')
    node.className = getThemeNodeClassName(type, variant)
    node.style.display = 'none'
    document.body.prepend(node)
  }
}

const realGetCssVariableValue = (varName, type, variant) => {
  const node = getNodeWithThemeCssVars(type, variant)

  return window
    .getComputedStyle(node)
    .getPropertyValue(`--${varName}`)
    .trim()
}

export const getCssVariableValue = (varName, type, variant) =>
  process.env.NODE_ENV === 'test'
    ? '#fff'
    : realGetCssVariableValue(varName, type, variant)
