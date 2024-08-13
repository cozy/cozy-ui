import merge from 'lodash/merge'

import { getCssVariableValue } from '../utils/color'

const opacityByTheme = {
  light: {
    normal: {
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
        opacity: 0.32,
        ghostOpacity: 0.48
      },
      background: {
        contrastOpacity: 0.12
      }
    },
    inverted: {
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
        opacity: 0.48,
        ghostOpacity: 0.48
      },
      background: {
        contrastOpacity: 0.24
      }
    }
  },
  dark: {
    normal: {
      action: {
        hoverOpacity: 0.08,
        selectedOpacity: 0.16,
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
    },
    inverted: {
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
        opacity: 0.32,
        ghostOpacity: 0.48
      },
      background: {
        contrastOpacity: 0.12
      }
    }
  }
}

export const makePalette = (type, variant) => {
  const paletteByTheme = {
    type,
    variant: variant,
    primary: {
      light: getCssVariableValue('primaryColorLight', type, variant),
      main: getCssVariableValue('primaryColor', type, variant),
      dark: getCssVariableValue('primaryColorDark', type, variant),
      contrastText: getCssVariableValue(
        'primaryContrastTextColor',
        type,
        variant
      )
    },
    secondary: {
      light: getCssVariableValue('secondaryColorLight', type, variant),
      main: getCssVariableValue('secondaryColor', type, variant),
      dark: getCssVariableValue('secondaryColorDark', type, variant),
      contrastText: getCssVariableValue(
        'secondaryContrastTextColor',
        type,
        variant
      )
    },
    error: {
      light: getCssVariableValue('errorColorLight', type, variant),
      main: getCssVariableValue('errorColor', type, variant),
      dark: getCssVariableValue('errorColorDark', type, variant),
      contrastText: getCssVariableValue('errorColorContrastText', type, variant)
    },
    warning: {
      light: getCssVariableValue('warningColorLight', type, variant),
      main: getCssVariableValue('warningColor', type, variant),
      dark: getCssVariableValue('warningColorDark', type, variant),
      contrastText: getCssVariableValue(
        'warningColorContrastText',
        type,
        variant
      )
    },
    success: {
      light: getCssVariableValue('successColorLight', type, variant),
      main: getCssVariableValue('successColor', type, variant),
      dark: getCssVariableValue('successColorDark', type, variant),
      contrastText: getCssVariableValue(
        'successColorContrastText',
        type,
        variant
      )
    },
    info: {
      light: getCssVariableValue('infoColorLight', type, variant),
      main: getCssVariableValue('infoColor', type, variant),
      dark: getCssVariableValue('infoColorDark', type, variant),
      contrastText: getCssVariableValue('infoColorContrastText', type, variant)
    },
    text: {
      primary: getCssVariableValue('primaryTextColor', type, variant),
      secondary: getCssVariableValue('secondaryTextColor', type, variant),
      disabled: getCssVariableValue('disabledTextColor', type, variant),
      hint: getCssVariableValue('hintTextColor', type, variant),
      icon: getCssVariableValue('iconTextColor', type, variant)
    },
    grey: {
      50: getCssVariableValue('grey50', type, variant),
      100: getCssVariableValue('grey100', type, variant),
      200: getCssVariableValue('grey200', type, variant),
      300: getCssVariableValue('grey300', type, variant),
      400: getCssVariableValue('grey400', type, variant),
      500: getCssVariableValue('grey500', type, variant),
      600: getCssVariableValue('grey600', type, variant),
      700: getCssVariableValue('grey700', type, variant),
      800: getCssVariableValue('grey800', type, variant),
      900: getCssVariableValue('grey900', type, variant),
      A100: getCssVariableValue('greyA100', type, variant),
      A200: getCssVariableValue('greyA200', type, variant),
      A400: getCssVariableValue('greyA400', type, variant),
      A700: getCssVariableValue('greyA700', type, variant)
    },
    divider: getCssVariableValue('dividerColor', type, variant),
    action: {
      active: getCssVariableValue('actionColorActive', type, variant),
      hover: getCssVariableValue('actionColorHover', type, variant),
      selected: getCssVariableValue('actionColorSelected', type, variant),
      disabled: getCssVariableValue('actionColorDisabled', type, variant),
      disabledBackground: getCssVariableValue(
        'actionColorDisabledBackground',
        type,
        variant
      ),
      focus: getCssVariableValue('actionColorFocus', type, variant),
      ghost: getCssVariableValue('actionColorGhost', type, variant),
      hoverGhost: getCssVariableValue('actionColorHoverGhost', type, variant)
    },
    border: {
      main: getCssVariableValue('borderMainColor', type, variant),
      disabled: getCssVariableValue('borderDisabledColor', type, variant),
      ghost: getCssVariableValue('borderGhostColor', type, variant),
      ghostDisabled: getCssVariableValue(
        'borderGhostDisabledColor',
        type,
        variant
      )
    },
    background: {
      default: getCssVariableValue('defaultBackgroundColor', type, variant),
      paper: getCssVariableValue('paperBackgroundColor', type, variant),
      contrast: getCssVariableValue('contrastBackgroundColor', type, variant),
      selected: '#F5FAFF' // deprecated, should be removed. Use action.selected instead
    }
  }

  return merge(paletteByTheme, opacityByTheme[type][variant])
}
