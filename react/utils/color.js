import memoize from 'lodash/memoize'

export const getCssVariableValue = memoize(variableName =>
  window
    .getComputedStyle(document.body)
    .getPropertyValue(`--${variableName}`)
    .trim()
)
