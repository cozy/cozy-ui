export const getCssVariableValue = variableName =>
  window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--${variableName}`)
    .trim()
