import merge from 'lodash/merge'

import { getCssVariableValue } from '../utils/color'

const opacityByTheme = {
  light: {
    action: {
      hoverOpacity: 0.04,
      selectedOpacity: 0.18,
      disabledOpacity: 0.32,
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
      ghostOpacity: 0.08,
      hoverGhostOpacity: 0.16
    },
    border: {
      opacity: 0.32,
      ghostOpacity: 0.48
    },
    background: {
      contrastOpacity: 0.12
    }
  },
  dark: {
    action: {
      hoverOpacity: 0.08,
      selectedOpacity: 0.18,
      disabledOpacity: 0.32,
      focusOpacity: 0.24,
      activatedOpacity: 0.24,
      ghostOpacity: 0.08,
      hoverGhostOpacity: 0.16
    },
    border: {
      opacity: 0.48,
      ghostOpacity: 0.48
    },
    background: {
      contrastOpacity: 0.24
    }
  }
}

export const makePalette = type => {
  const paletteByTheme = {
    type,
    primary: {
      light: getCssVariableValue('primaryColorLight', type),
      main: getCssVariableValue('primaryColor', type),
      dark: getCssVariableValue('primaryColorDark', type),
      contrastText: getCssVariableValue('primaryContrastTextColor', type)
    },
    secondary: {
      light: getCssVariableValue('secondaryColorLight', type),
      main: getCssVariableValue('secondaryColor', type),
      dark: getCssVariableValue('secondaryColorDark', type),
      contrastText: getCssVariableValue('secondaryContrastTextColor', type)
    },
    error: {
      light: getCssVariableValue('errorColorLight', type),
      main: getCssVariableValue('errorColor', type),
      dark: getCssVariableValue('errorColorDark', type),
      contrastText: getCssVariableValue('errorColorContrastText', type)
    },
    warning: {
      light: getCssVariableValue('warningColorLight', type),
      main: getCssVariableValue('warningColor', type),
      dark: getCssVariableValue('warningColorDark', type),
      contrastText: getCssVariableValue('warningColorContrastText', type)
    },
    success: {
      light: getCssVariableValue('successColorLight', type),
      main: getCssVariableValue('successColor', type),
      dark: getCssVariableValue('successColorDark', type),
      contrastText: getCssVariableValue('successColorContrastText', type)
    },
    info: {
      light: getCssVariableValue('infoColorLight', type),
      main: getCssVariableValue('infoColor', type),
      dark: getCssVariableValue('infoColorDark', type),
      contrastText: getCssVariableValue('infoColorContrastText', type)
    },
    text: {
      primary: getCssVariableValue('primaryTextColor', type),
      secondary: getCssVariableValue('secondaryTextColor', type),
      disabled: getCssVariableValue('disabledTextColor', type),
      hint: getCssVariableValue('hintTextColor', type),
      icon: getCssVariableValue('iconTextColor', type)
    },
    grey: {
      50: getCssVariableValue('grey50', type),
      100: getCssVariableValue('grey100', type),
      200: getCssVariableValue('grey200', type),
      300: getCssVariableValue('grey300', type),
      400: getCssVariableValue('grey400', type),
      500: getCssVariableValue('grey500', type),
      600: getCssVariableValue('grey600', type),
      700: getCssVariableValue('grey700', type),
      800: getCssVariableValue('grey800', type),
      900: getCssVariableValue('grey900', type),
      A100: getCssVariableValue('greyA100', type),
      A200: getCssVariableValue('greyA200', type),
      A400: getCssVariableValue('greyA400', type),
      A700: getCssVariableValue('greyA700', type)
    },
    divider: getCssVariableValue('dividerColor', type),
    action: {
      active: getCssVariableValue('actionColorActive', type),
      hover: getCssVariableValue('actionColorHover', type),
      selected: getCssVariableValue('actionColorSelected', type),
      disabled: getCssVariableValue('actionColorDisabled', type),
      disabledBackground: getCssVariableValue(
        'actionColorDisabledBackground',
        type
      ),
      focus: getCssVariableValue('actionColorFocus', type),
      ghost: getCssVariableValue('actionColorGhost', type),
      hoverGhost: getCssVariableValue('actionColorHoverGhost', type)
    },
    border: {
      main: getCssVariableValue('borderMainColor', type),
      disabled: getCssVariableValue('borderDisabledColor', type),
      ghost: getCssVariableValue('borderGhostColor', type),
      ghostDisabled: getCssVariableValue('borderGhostDisabledColor', type)
    },
    background: {
      default: getCssVariableValue('defaultBackgroundColor', type),
      paper: getCssVariableValue('paperBackgroundColor', type),
      contrast: getCssVariableValue('contrastBackgroundColor', type),
      selected: '#F5FAFF' // deprecated, should be removed. Use action.selected instead
    }
  }

  return merge(paletteByTheme, opacityByTheme[type])
}
