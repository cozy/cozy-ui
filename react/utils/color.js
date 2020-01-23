import memoize from 'lodash/memoize'

const mockedGetCssVariableValue = () => '#fff'

const realGetCssVariableValue = memoize(variableName =>
  window
    .getComputedStyle(document.body)
    .getPropertyValue(`--${variableName}`)
    .trim()
)

export const getCssVariableValue =
  process.env.NODE_ENV === 'test'
    ? mockedGetCssVariableValue
    : realGetCssVariableValue
