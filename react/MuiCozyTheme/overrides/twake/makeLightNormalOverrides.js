import merge from 'lodash/merge'

import { alpha, darken } from '../../../styles'
import { makeLightNormalOverrides } from '../makeLightNormalOverrides'

export const makeLightNormalTwakeOverrides = theme => {
  const makeOverridesForTwakeTheme = theme => ({
    MuiCheckbox: {
      root: {
        padding: 8
      }
    },
    MuiButton: {
      root: {
        borderRadius: 100,
        padding: '10px 24px',
        '&.ghost': {
          border: 0,
          '&:hover': {
            border: 0
          }
        }
      },
      sizeSmall: {
        height: '2.25rem',
        padding: '10px 16px',
        '&$text': {
          padding: '8px 16px'
        }
      },
      sizeLarge: {
        padding: '14px 32px'
      },
      text: {
        padding: '10px 8px'
      },
      outlined: {
        '&:not($disabled)': {
          '&.ghost': {
            backgroundColor: theme.palette.background.default,
            '&:hover': {
              backgroundColor: darken(theme.palette.background.default, 0.05),
              '@media (hover: none)': {
                backgroundColor: darken(theme.palette.background.default, 0.05)
              }
            }
          },
          '&.customColor': {
            '&-primary': {
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: alpha(
                  theme.palette.primary.main,
                  theme.palette.action.hoverOpacity
                )
              },
              '&.ghost': {
                color: theme.palette.text.primary,
                borderColor: theme.palette.background.default
              }
            }
          }
        }
      }
    },
    MuiIconButton: {
      root: {
        '&.small': {
          padding: 8
        },
        '&.xlarge': {
          padding: 20
        }
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: alpha(theme.palette.grey[800], 0.9),
        borderRadius: '4px',
        padding: '8px 12px'
      }
    },
    MuiFab: {
      root: {
        borderRadius: 28,
        width: 96,
        height: 96
      },
      primary: {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
          backgroundColor: darken(theme.palette.primary.light, 0.05),
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.light
          }
        }
      },
      extended: {
        borderRadius: 16,
        '&$sizeSmall': {
          borderRadius: 16,
          height: 42,
          minWidth: 42
        },
        '&$sizeMedium': {
          borderRadius: 16
        }
      },
      sizeSmall: {
        borderRadius: 12
      },
      sizeMedium: {
        borderRadius: 16,
        width: 56,
        height: 56
      }
    },
    MuiAvatar: {
      root: {
        fontWeight: 600,
        '&.size': {
          '&-xs': {
            width: 16,
            height: 16,
            fontSize: 8,
            '& svg': {
              width: 10,
              height: 10
            }
          },
          '&-s': {
            width: 24,
            height: 24,
            fontSize: 11,
            '& svg': {
              width: 16,
              height: 16
            }
          },
          '&-m': {
            width: 32,
            height: 32,
            fontSize: 16,
            '& svg': {
              width: 20,
              height: 20
            }
          },
          '&-l': {
            width: 48,
            height: 48,
            fontSize: 24,
            '& svg': {
              width: 28,
              height: 28
            }
          },
          '&-xl': {
            width: 64,
            height: 64,
            fontSize: 32,
            '& svg': {
              width: 36,
              height: 36
            }
          }
        },
        '&.disabled': {
          color: theme.palette.primary.contrastText,
          background: theme.palette.action.disabledBackground
        }
      },
      colorDefault: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary
      }
    }
  })

  const twakeOverrides = merge(
    makeLightNormalOverrides(theme),
    makeOverridesForTwakeTheme(theme)
  )

  return twakeOverrides
}
