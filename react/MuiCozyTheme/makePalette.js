import merge from 'lodash/merge'

import {
  getCssVariableValue,
  getInvertedCssVariableValue
} from '../utils/color'

const opacityByTheme = {
  light: {
    action: {
      hoverOpacity: 0.04,
      selectedOpacity: 0.08,
      disabledOpacity: 0.32,
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
      ghostOpacity: 0.08,
      hoverGhostOpacity: 0.16
    },
    border: {
      opacity: 0.16,
      ghostOpacity: 0.48
    }
  },
  dark: {
    action: {
      hoverOpacity: 0.08,
      selectedOpacity: 0.16,
      disabledOpacity: 0.32,
      focusOpacity: 0.25,
      activatedOpacity: 0.24,
      ghostOpacity: 0.08,
      hoverGhostOpacity: 0.16
    },
    border: {
      opacity: 0.24,
      ghostOpacity: 0.48
    }
  }
}

export const makePalette = mode => {
  const getCssValue =
    mode === 'dark' ? getInvertedCssVariableValue : getCssVariableValue

  const paletteByTheme = {
    mode,
    primary: {
      light: getCssValue('primaryColorLight'),
      main: getCssValue('primaryColor'),
      dark: getCssValue('primaryColorDark'),
      contrastText: getCssValue('primaryContrastTextColor')
    },
    secondary: {
      light: getCssValue('secondaryColorLight'),
      main: getCssValue('secondaryColor'),
      dark: getCssValue('secondaryColorDark'),
      contrastText: getCssValue('secondaryContrastTextColor')
    },
    error: {
      light: getCssValue('errorColorLight'),
      main: getCssValue('errorColor'),
      dark: getCssValue('errorColorDark'),
      contrastText: getCssValue('errorColorContrastText')
    },
    warning: {
      light: getCssValue('warningColorLight'),
      main: getCssValue('warningColor'),
      dark: getCssValue('warningColorDark'),
      contrastText: getCssValue('warningColorContrastText')
    },
    success: {
      light: getCssValue('successColorLight'),
      main: getCssValue('successColor'),
      dark: getCssValue('successColorDark'),
      contrastText: getCssValue('successColorContrastText')
    },
    info: {
      light: getCssValue('infoColorLight'),
      main: getCssValue('infoColor'),
      dark: getCssValue('infoColorDark'),
      contrastText: getCssValue('infoColorContrastText')
    },
    text: {
      primary: getCssValue('primaryTextColor'),
      secondary: getCssValue('secondaryTextColor'),
      disabled: getCssValue('disabledTextColor'),
      hint: getCssValue('hintTextColor'),
      icon: getCssValue('iconTextColor')
    },
    grey: {
      0: getCssValue('grey0'),
      50: getCssValue('grey50'),
      100: getCssValue('grey100'),
      200: getCssValue('grey200'),
      300: getCssValue('grey300'),
      400: getCssValue('grey400'),
      500: getCssValue('grey500'),
      600: getCssValue('grey600'),
      700: getCssValue('grey700'),
      800: getCssValue('grey800'),
      900: getCssValue('grey900'),
      A100: getCssValue('greyA100'),
      A200: getCssValue('greyA200'),
      A400: getCssValue('greyA400'),
      A700: getCssValue('greyA700')
    },
    divider: getCssValue('dividerColor'),
    action: {
      active: getCssValue('actionColorActive'),
      hover: getCssValue('actionColorHover'),
      selected: getCssValue('actionColorSelected'),
      disabled: getCssValue('actionColorDisabled'),
      disabledBackground: getCssValue('actionColorDisabledBackground'),
      focus: getCssValue('actionColorFocus'),
      ghost: getCssValue('actionColorGhost'),
      hoverGhost: getCssValue('actionColorHoverGhost')
    },
    border: {
      main: getCssValue('borderMainColor'),
      disabled: getCssValue('borderDisabledColor'),
      ghost: getCssValue('borderGhostColor'),
      ghostDisabled: getCssValue('borderGhostDisabledColor')
    },
    background: {
      default: getCssValue('defaultBackgroundColor'),
      paper: getCssValue('paperBackgroundColor'),
      contrast: getCssValue('contrastBackgroundColor'),
      selected: '#F5FAFF' // deprecated, should be removed. Use action.selected instead
    }
  }

  return merge(paletteByTheme, opacityByTheme[mode])
}
