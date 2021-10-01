import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import merge from 'lodash/merge'

import { getCssVariableValue } from '../utils/color'
import {
  makePalette,
  makeTypography,
  makeOverrides,
  makeShadows
} from './helpers'
import isTesting from '../helpers/isTesting'
import AccordionExpandIcon from './AccordionExpandIcon'

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
    modal: getCssVariableValue('zIndex-modal')
  },
  props: {
    MuiTabs: {
      textColor: 'primary',
      TabIndicatorProps: { color: 'primary' }
    },
    MuiButton: {
      disableRipple: true
    },
    MuiListItem: {
      disableRipple: true
    },
    MuiTooltip: {
      arrow: true
    },
    MuiAccordionSummary: {
      expandIcon: <AccordionExpandIcon />
    }
  },
  ...(isTesting() && { transitions: { create: () => 'none' } })
}

const normalPalette = makePalette('light')

export const normalTheme = createMuiTheme({
  ...themesCommonConfig,
  typography: makeTypography(normalPalette),
  palette: normalPalette
})
normalTheme.overrides = makeOverrides(normalTheme)
normalTheme.shadows = makeShadows()

const invertedPalette = makePalette('dark')

const invertedTypography = makeTypography(invertedPalette)
export const invertedTheme = createMuiTheme({
  ...themesCommonConfig,
  palette: invertedPalette,
  typography: invertedTypography,
  shadows: makeShadows()
})

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
