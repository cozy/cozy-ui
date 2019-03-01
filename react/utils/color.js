export const getCssVariableValue = variableName =>
  window
    .getComputedStyle(document.body)
    .getPropertyValue(`--${variableName}`)
    .trim()
