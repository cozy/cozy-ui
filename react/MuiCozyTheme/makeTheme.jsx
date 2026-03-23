import { makeShadows } from './helpers'
import { makePalette } from './makePalette'
import { makeTypography } from './makeTypography'
import { makeDarkNormalOverrides } from './overrides/makeDarkNormalOverrides'
import { makeLightNormalOverrides } from './overrides/makeLightNormalOverrides'
import isTesting from '../helpers/isTesting'
import { createTheme } from '../styles'
import { createNodeWithThemeCssVars } from '../utils/color'

const makeOverridesByTheme = theme => ({
  light: makeLightNormalOverrides(theme),
  dark: makeDarkNormalOverrides(theme)
})

const themesCommonConfig = {
  shape: {
    borderRadius: 6
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1023,
      xl: 1200
    }
  },
  zIndex: {
    modal: 'var(--zIndex-modal)'
  },
  textShadows: [
    'none',
    '0px 2px 8px rgba(29, 33, 42, 0.16), 0px 0px 1px rgba(29, 33, 42, 0.48)'
  ],
  ...(isTesting() && { transitions: { create: () => 'none' } })
}

export const makeTheme = type => {
  // to hold the values of css variables, recoverable by getCssVariableValue()
  createNodeWithThemeCssVars(type)

  const palette = makePalette(type)
  const theme = createTheme({
    ...themesCommonConfig,
    typography: makeTypography(),
    shadows: makeShadows(type),
    type,
    palette
  })

  const overrides = makeOverridesByTheme(theme)[type]

  return {
    ...theme,
    overrides
  }
}
