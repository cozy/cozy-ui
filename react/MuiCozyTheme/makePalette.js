import merge from 'lodash/merge'

import { getCssVariableValue, createNodeWithThemeCssVars } from '../utils/color'

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
    },
    background: {
      contrastOpacity: 0.12
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
    },
    background: {
      contrastOpacity: 0.24
    }
  }
}

export const makePalette = type => {
  const variant = type === 'dark' ? 'inverted' : 'normal'

  // to hold the values of css variables, recoverable by getCssVariableValue()
  createNodeWithThemeCssVars(variant)

  const paletteByTheme = {
    type,
    primary: {
      light: getCssVariableValue('primaryColorLight', variant),
      main: getCssVariableValue('primaryColor', variant),
      dark: getCssVariableValue('primaryColorDark', variant),
      contrastText: getCssVariableValue('primaryContrastTextColor', variant)
    },
    secondary: {
      light: getCssVariableValue('secondaryColorLight', variant),
      main: getCssVariableValue('secondaryColor', variant),
      dark: getCssVariableValue('secondaryColorDark', variant),
      contrastText: getCssVariableValue('secondaryContrastTextColor', variant)
    },
    error: {
      light: getCssVariableValue('errorColorLight', variant),
      main: getCssVariableValue('errorColor', variant),
      dark: getCssVariableValue('errorColorDark', variant),
      contrastText: getCssVariableValue('errorColorContrastText', variant)
    },
    warning: {
      light: getCssVariableValue('warningColorLight', variant),
      main: getCssVariableValue('warningColor', variant),
      dark: getCssVariableValue('warningColorDark', variant),
      contrastText: getCssVariableValue('warningColorContrastText', variant)
    },
    success: {
      light: getCssVariableValue('successColorLight', variant),
      main: getCssVariableValue('successColor', variant),
      dark: getCssVariableValue('successColorDark', variant),
      contrastText: getCssVariableValue('successColorContrastText', variant)
    },
    info: {
      light: getCssVariableValue('infoColorLight', variant),
      main: getCssVariableValue('infoColor', variant),
      dark: getCssVariableValue('infoColorDark', variant),
      contrastText: getCssVariableValue('infoColorContrastText', variant)
    },
    text: {
      primary: getCssVariableValue('primaryTextColor', variant),
      secondary: getCssVariableValue('secondaryTextColor', variant),
      disabled: getCssVariableValue('disabledTextColor', variant),
      hint: getCssVariableValue('hintTextColor', variant),
      icon: getCssVariableValue('iconTextColor', variant)
    },
    grey: {
      50: getCssVariableValue('grey50', variant),
      100: getCssVariableValue('grey100', variant),
      200: getCssVariableValue('grey200', variant),
      300: getCssVariableValue('grey300', variant),
      400: getCssVariableValue('grey400', variant),
      500: getCssVariableValue('grey500', variant),
      600: getCssVariableValue('grey600', variant),
      700: getCssVariableValue('grey700', variant),
      800: getCssVariableValue('grey800', variant),
      900: getCssVariableValue('grey900', variant),
      A100: getCssVariableValue('greyA100', variant),
      A200: getCssVariableValue('greyA200', variant),
      A400: getCssVariableValue('greyA400', variant),
      A700: getCssVariableValue('greyA700', variant)
    },
    divider: getCssVariableValue('dividerColor', variant),
    action: {
      active: getCssVariableValue('actionColorActive', variant),
      hover: getCssVariableValue('actionColorHover', variant),
      selected: getCssVariableValue('actionColorSelected', variant),
      disabled: getCssVariableValue('actionColorDisabled', variant),
      disabledBackground: getCssVariableValue(
        'actionColorDisabledBackground',
        variant
      ),
      focus: getCssVariableValue('actionColorFocus', variant),
      ghost: getCssVariableValue('actionColorGhost', variant),
      hoverGhost: getCssVariableValue('actionColorHoverGhost', variant)
    },
    border: {
      main: getCssVariableValue('borderMainColor', variant),
      disabled: getCssVariableValue('borderDisabledColor', variant),
      ghost: getCssVariableValue('borderGhostColor', variant),
      ghostDisabled: getCssVariableValue('borderGhostDisabledColor', variant)
    },
    background: {
      default: getCssVariableValue('defaultBackgroundColor', variant),
      paper: getCssVariableValue('paperBackgroundColor', variant),
      contrast: getCssVariableValue('contrastBackgroundColor', variant),
      selected: '#F5FAFF' // deprecated, should be removed. Use action.selected instead
    }
  }

  return merge(paletteByTheme, opacityByTheme[type])
}
