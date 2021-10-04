import merge from 'lodash/merge'

import { getCssVariableValue } from '../utils/color'
import { makePalette, makeOverrides, makeTheme } from './helpers'

export const normalTheme = makeTheme(makePalette('light'))
normalTheme.overrides = makeOverrides(normalTheme)

const invertedPalette = makePalette('dark')
export const invertedTheme = makeTheme(invertedPalette)
invertedTheme.overrides = {
  ...makeOverrides(invertedTheme),
  MuiOutlinedInput: {
    root: {
      boxSizing: 'border-box',
      '&$focused $notchedOutline': {
        borderColor: invertedTheme.palette.text.primary,
        borderWidth: '0.0625rem'
      },
      '& $notchedOutline': {
        borderColor: invertedTheme.palette.text.primary
      }
    }
  },
  MuiFormLabel: {
    root: {
      '&$focused': {
        color: invertedTheme.palette.text.primary
      }
    }
  },
  MuiTab: {
    root: {
      color: 'rgb(255,255,255) !important'
    },
    // This overrides the disabled color of the MuiTab
    textColorPrimary: {
      color: 'rgb(255,255,255) !important',
      opacity: 0.64
    },
    textColorSecondary: {
      color: 'rgb(255,255,255)',
      opacity: 0.64
    },
    selected: {
      opacity: 1
    }
  },
  MuiSwitch: merge({}, normalTheme.overrides.MuiSwitch, {
    switchBase: {
      color: getCssVariableValue('primaryContrastTextColor')
    },
    colorPrimary: {
      '&$checked': {
        '& + $track': {
          boxSizing: 'border-box',
          backgroundColor: '#34CE68'
        }
      }
    }
  }),
  MuiLinearProgress: {
    colorPrimary: {
      backgroundColor: 'rgba(255,255,255,0.2)'
    },
    colorSecondary: {
      backgroundColor: 'rgba(255,255,255,0.2)'
    }
  },
  MuiListItem: {
    button: {
      '&$selected, &$selected:hover': {
        backgroundColor: invertedPalette.background.selected
      },
      '&:hover': {
        backgroundColor: invertedPalette.background.selected
      },
      '&:focus': {
        backgroundColor: invertedPalette.background.selected
      }
    }
  },
  MuiCheckbox: {
    colorPrimary: {
      '&.Mui-checked:not(.Mui-disabled)': {
        color: invertedTheme.palette.success.main
      }
    },
    colorSecondary: {
      '&.Mui-checked:not(.Mui-disabled)': {
        color: invertedTheme.palette.error.main
      }
    }
  }
}

const themes = {
  normal: normalTheme,
  inverted: invertedTheme
}

export const getTheme = variant => {
  const theme = themes[variant]

  if (!theme) {
    const possibleThemes = Object.keys(themes).join(', ')
    throw new Error(
      `[MuiCozyTheme] Unknown theme variant: ${variant}. Possible variants are ${possibleThemes}`
    )
  }

  return theme
}
