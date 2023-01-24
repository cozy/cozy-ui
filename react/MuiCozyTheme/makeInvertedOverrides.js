import merge from 'lodash/merge'

import { makeAlertInvertedColor, addStyleOverrides } from './helpers'
import { makeOverrides } from './makeOverrides'

export const makeInvertedOverrides = invertedTheme => {
  const makeOverridesForInvertedTheme = invertedTheme =>
    addStyleOverrides({
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
      MuiFormLabel: {
        root: {
          '&$focused': {
            color: invertedTheme.palette.text.primary
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
      MuiCheckbox: {
        colorPrimary: {
          '&$checked:not($disabled)': {
            color: invertedTheme.palette.primary.light
          }
        },
        colorSecondary: {
          '&$checked:not($disabled)': {
            color: invertedTheme.palette.error.main
          }
        }
      },
      MuiAlert: {
        root: {
          '&.cozyAlert': {
            '&-primary': makeAlertInvertedColor(invertedTheme, 'primary'),
            '&-secondary': makeAlertInvertedColor(invertedTheme, 'secondary'),
            '&-success': makeAlertInvertedColor(invertedTheme, 'success'),
            '&-error': makeAlertInvertedColor(invertedTheme, 'error'),
            '&-warning': makeAlertInvertedColor(invertedTheme, 'warning'),
            '&-info': makeAlertInvertedColor(invertedTheme, 'info')
          }
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
