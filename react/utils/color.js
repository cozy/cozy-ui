const getThemeNodeClassName = variant => `CozyTheme--light-${variant}`

const getNodeWithThemeCssVars = variant => {
  const className = getThemeNodeClassName(variant)

  return document.getElementsByClassName(className)[0]
}

export const createNodeWithThemeCssVars = variant => {
  if (!getNodeWithThemeCssVars(variant)) {
    const node = document.createElement('div')
    node.className = getThemeNodeClassName(variant)
    node.style.display = 'none'
    document.body.prepend(node)
  }
}

const realGetCssVariableValue = (varName, variant) => {
  const node = getNodeWithThemeCssVars(variant)

  return window
    .getComputedStyle(node)
    .getPropertyValue(`--${varName}`)
    .trim()
}

export const getCssVariableValue = (varName, variant) =>
  process.env.NODE_ENV === 'test'
    ? () => () => '#fff'
    : realGetCssVariableValue(varName, variant)
