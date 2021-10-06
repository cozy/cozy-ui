import memoize from 'lodash/memoize'

const mockedGetCssVariableValue = () => '#fff'

const realGetCssVariableValue = memoize(variableName =>
  window
    .getComputedStyle(document.body)
    .getPropertyValue(`--${variableName}`)
    .trim()
)

const realGetInvertedCssVariableValue = variableName => {
  const className = 'CozyTheme--inverted'
  let node = document.getElementsByClassName(className)[0]

  if (!node) {
    node = document.createElement('div')
    node.className = className
    node.style.display = 'none'
    document.body.appendChild(node)
  }

  return window
    .getComputedStyle(node)
    .getPropertyValue(`--${variableName}`)
    .trim()
}

export const getCssVariableValue =
  process.env.NODE_ENV === 'test'
    ? mockedGetCssVariableValue
    : realGetCssVariableValue

export const getInvertedCssVariableValue =
  process.env.NODE_ENV === 'test'
    ? mockedGetCssVariableValue
    : realGetInvertedCssVariableValue
