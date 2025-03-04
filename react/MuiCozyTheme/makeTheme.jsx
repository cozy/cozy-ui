import { makeShadows } from './helpers'
import { makePalette } from './makePalette'
import { makeTwakeTypography } from './makeTwakeTypography'
import { makeTypography } from './makeTypography'
import { makeDarkInvertedOverrides } from './overrides/makeDarkInvertedOverrides'
import { makeDarkNormalOverrides } from './overrides/makeDarkNormalOverrides'
import { makeLightInvertedOverrides } from './overrides/makeLightInvertedOverrides'
import { makeLightNormalOverrides } from './overrides/makeLightNormalOverrides'
import { makeDarkInvertedTwakeOverrides } from './overrides/twake/makeDarkInvertedOverrides'
import { makeDarkNormalTwakeOverrides } from './overrides/twake/makeDarkNormalOverrides'
import { makeLightInvertedTwakeOverrides } from './overrides/twake/makeLightInvertedOverrides'
import { makeLightNormalTwakeOverrides } from './overrides/twake/makeLightNormalOverrides'
import isTesting from '../helpers/isTesting'
import { createTheme } from '../styles'
import { createNodeWithThemeCssVars } from '../utils/color'

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

const makeTwakeOverridesByTheme = theme => ({
  light: {
    normal: makeLightNormalTwakeOverrides(theme),
    inverted: makeLightInvertedTwakeOverrides(theme)
  },
  dark: {
    normal: makeDarkNormalTwakeOverrides(theme),
    inverted: makeDarkInvertedTwakeOverrides(theme)
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
  const uiThemeName = localStorage.getItem('ui-theme-name') || 'Cozy'
  // to hold the values of css variables, recoverable by getCssVariableValue()
  createNodeWithThemeCssVars(type, variant)

  const palette = makePalette(type, variant)
  const theme = createTheme({
    ...themesCommonConfig,
    typography:
      uiThemeName === 'Cozy' ? makeTypography(palette) : makeTwakeTypography(),
    shadows: makeShadows(type, variant),
    palette
  })

  const overrides =
    uiThemeName === 'Cozy'
      ? makeOverridesByTheme(theme)[type][variant]
      : makeTwakeOverridesByTheme(theme)[type][variant]

  return {
    ...theme,
    overrides
  }
}
