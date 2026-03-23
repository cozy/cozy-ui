const getThemeNodeClassName = type => `TwakeTheme--${type}`

const getNodeWithThemeCssVars = type => {
  const className = getThemeNodeClassName(type)

  return document.getElementsByClassName(className)[0]
}

export const createNodeWithThemeCssVars = type => {
  if (process.env.NODE_ENV === 'test') return null

  if (!getNodeWithThemeCssVars(type)) {
    const node = document.createElement('div')
    node.className = getThemeNodeClassName(type)
    node.style.display = 'none'
    document.body.prepend(node)
  }
}

const realGetCssVariableValue = (varName, type) => {
  const node = getNodeWithThemeCssVars(type)

  return window.getComputedStyle(node).getPropertyValue(`--${varName}`).trim()
}

export const getCssVariableValue = (varName, type) =>
  process.env.NODE_ENV === 'test'
    ? '#fff'
    : realGetCssVariableValue(varName, type)
