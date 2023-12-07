import { createTheme } from '../styles'
import isTesting from '../helpers/isTesting'
import { createNodeWithThemeCssVars } from '../utils/color'

import { makeShadows } from './helpers'
import { makePalette } from './makePalette'
import { makeTypography } from './makeTypography'
import { makeLightNormalOverrides } from './overrides/makeLightNormalOverrides'
import { makeLightInvertedOverrides } from './overrides/makeLightInvertedOverrides'
import { makeDarkNormalOverrides } from './overrides/makeDarkNormalOverrides'
import { makeDarkInvertedOverrides } from './overrides/makeDarkInvertedOverrides'

const makeOverridesByTheme = theme => ({
  light: {
    normal: makeLightNormalOverrides(theme),
    inverted: makeLightInvertedOverrides(theme)
  },
  dark: {
    normal: makeDarkNormalOverrides(theme),
    inverted: makeDarkInvertedOverrides(theme)
  }
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

export const makeTheme = (type, variant) => {
  // to hold the values of css variables, recoverable by getCssVariableValue()
  createNodeWithThemeCssVars(type, variant)

  const palette = makePalette(type, variant)
  const theme = createTheme({
    ...themesCommonConfig,
    typography: makeTypography(palette),
    shadows: makeShadows(type, variant),
    palette
  })
  const overrides = makeOverridesByTheme(theme)[type][variant]

  return {
    ...theme,
    overrides
  }
}
