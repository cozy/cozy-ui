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
    MuiSwitch: {
      root: {
        width: 50,
        height: 40,
        padding: '6px 1px'
      },
      switchBase: {
        padding: 5,
        top: 5,
        color: theme.palette.text.icon,
        '& .cozySwitchThumb': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 20,
          height: 20,
          borderRadius: '50%',
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.common.white
        }
      },
      track: {
        width: 44,
        height: '100%',
        borderRadius: 100
      },
      thumb: {
        width: 20,
        height: 20
      },
      colorPrimary: {
        '&$disabled + $track': {
          opacity: 1,
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      colorSecondary: {
        '&$checked': {
          color: theme.palette.success.main
        },
        '&$disabled + $track': {
          opacity: 1,
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      disabled: {
        '&$checked + $track': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        '& .cozySwitchThumb': {
          backgroundColor: theme.palette.background.default
        }
      }
    },
    MuiLinearProgress: {
      root: {
        height: 3
      },
      colorPrimary: {
        backgroundColor: theme.palette.divider
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
        padding: '10px 16px',
        '&.customSize': {
          '&-default': {
            height: '2.25rem'
          },
          '&-auto': {
            minHeight: '2.25rem'
          }
        },
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
    MuiAvatarGroup: {
      root: {
        '& > div:last-child': {
          boxShadow: `inset 0px 0px 0px 1px ${theme.palette.border.main}`
        }
      }
    },
    MuiAvatar: {
      root: {
        '&.size': {
          '&-xs': {
            '& svg': {
              width: 10,
              height: 10
            }
          },
          '&-s': {
            fontSize: 11,
            '& svg': {
              width: 16,
              height: 16
            }
          },
          '&-m': {
            '& svg': {
              width: 20,
              height: 20
            }
          },
          '&-l': {
            '& svg': {
              width: 28,
              height: 28
            }
          },
          '&-xl': {
            '& svg': {
              width: 36,
              height: 36
            }
          }
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
