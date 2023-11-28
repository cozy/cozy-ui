import merge from 'lodash/merge'

import { makeOverrides } from './makeOverrides'

export const makeInvertedOverrides = invertedTheme => {
  const makeOverridesForInvertedTheme = invertedTheme => ({
    MuiOutlinedInput: {
      root: {
        boxSizing: 'border-box',
        '&$disabled': {
          background: 'initial'
        },
        '&$focused $notchedOutline': {
          borderColor: invertedTheme.palette.text.primary,
          borderWidth: '0.0625rem'
        },
        '& $notchedOutline': {
          borderColor: invertedTheme.palette.text.primary
        }
      }
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: 'rgba(255,255,255,0.2)'
      },
      colorSecondary: {
        backgroundColor: 'rgba(255,255,255,0.2)'
      }
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: invertedTheme.palette.grey[200]
      }
    },
    MuiTabs: {
      root: {
        '&.segmented': {
          '& $indicator': {
            backgroundColor: invertedTheme.palette.primary.main
          }
        }
      }
    },
    MuiTab: {
      root: {
        '&.segmented': {
          '&$selected': {
            color: invertedTheme.palette.primary.contrastText
          }
        }
      }
    },
    MuiSwitch: {
      switchBase: {
        color: invertedTheme.palette.grey[100]
      },
      colorPrimary: {
        '&$checked': {
          '& + $track': {
            backgroundColor: invertedTheme.palette.success.dark
          }
        }
      },
      colorSecondary: {
        '&$checked': {
          '& + $track': {
            backgroundColor: invertedTheme.palette.success.dark
          }
        }
      }
    }
  })

  const invertedOverrides = merge(
    makeOverrides(invertedTheme),
    makeOverridesForInvertedTheme(invertedTheme)
  )

  return invertedOverrides
}
