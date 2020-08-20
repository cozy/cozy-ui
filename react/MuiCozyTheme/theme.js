import merge from 'lodash/merge'
import { createMuiTheme } from '@material-ui/core/styles'
import { getCssVariableValue } from '../utils/color'
import isTesting from '../../helpers/isTesting'

const defaultValues = {
  borderRadius: 6,
  dialog: {
    sm: {
      padding: 16
    },
    md: {
      padding: 32
    }
  }
}

const SWITCH_BAR_WIDTH = 25
const SWITCH_BAR_HEIGHT = 12
const SWITCH_BUTTON_WIDTH = 46

export const normalTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: getCssVariableValue('primaryFont'),
    h6: {
      color: 'white'
    }
  },
  shape: {
    borderRadius: defaultValues.borderRadius
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    // xs = all
    // sm = tiny
    // md = small
    // lg = medium
    // xl = large
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1023,
      xl: 1200
    }
  },
  palette: {
    type: 'light',
    primary: {
      light: getCssVariableValue('primaryColorLight'),
      main: getCssVariableValue('primaryColor'),
      dark: getCssVariableValue('scienceBlue'),
      contrastText: getCssVariableValue('primaryContrastTextColor')
    },
    error: {
      main: getCssVariableValue('pomegranate')
    },
    secondary: {
      light: getCssVariableValue('monza'),
      main: getCssVariableValue('portage'),
      dark: getCssVariableValue('azure'),
      contrastText: getCssVariableValue('white')
    },
    grey: {
      0: getCssVariableValue('white'),
      100: getCssVariableValue('paleGrey'),
      200: getCssVariableValue('silver'),
      300: getCssVariableValue('coolGrey'),
      400: getCssVariableValue('slateGrey'),
      800: getCssVariableValue('charcoalGrey'),
      900: getCssVariableValue('black')
    }
  },
  ...(isTesting() && { transitions: { create: () => 'none' } })
})

normalTheme.overrides = {
  MuiOutlinedInput: {
    root: {
      '&$disabled': {
        background: 'var(--paleGrey)'
      },
      '&$focused $notchedOutline': {
        borderWidth: '0.0625rem'
      }
    },
    notchedOutline: {
      borderColor: 'var(--silver)'
    }
  },
  MuiButton: {
    root: {
      borderRadius: 0
    }
  },
  MuiExpansionPanel: {
    rounded: {
      borderRadius: defaultValues.borderRadius
    },
    root: {
      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
      borderWidth: '0.0625rem',
      borderStyle: 'solid',
      borderColor: 'var(--silver)',
      overflow: 'hidden',
      marginBottom: '1rem'
    }
  },
  MuiStepConnector: {
    line: {
      borderColor: 'var(--coolGrey)'
    }
  },
  MuiExpansionPanelSummary: {
    expanded: {},
    root: {
      backgroundColor: 'var(--paleGrey)',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '0.875rem',
      minHeight: '3.5rem',
      padding: 0,
      color: 'var(--charcoalGrey)',
      '&$expanded': {
        minHeight: '3.5rem'
      }
    },
    content: {
      margin: '0.75rem 0',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      '& > :last-child': {
        paddingRight: 0
      },
      '&$expanded': {
        margin: '0.75rem 0'
      }
    }
  },
  MuiExpansionPanelDetails: {
    root: {
      padding: 0,
      borderTop: '0.0625rem solid var(--silver)'
    }
  },
  MuiList: {
    root: {
      borderTop: '1px solid var(--silver)',
      borderBottom: '1px solid var(--silver)'
    },
    padding: {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  MuiListItem: {
    root: {
      minHeight: '4.25rem',
      paddingTop: '.5rem',
      paddingBottom: '.5rem',
      '&$selected, &$selected:hover': {
        backgroundColor: 'var(--zircon)'
      },
      '&:hover, &:focus': {
        backgroundColor: 'var(--paleGrey)'
      },
      '&:not(:first-child)': {
        borderTop: '1px solid var(--silver)'
      }
    },
    gutters: {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    },
    dense: {
      minHeight: '3.5rem'
    },
    secondaryAction: {
      paddingRight: '.5rem'
    },
    button: {
      '&:hover': {
        backgroundColor: getCssVariableValue('paleGrey')
      }
    }
  },
  MuiListSubheader: {
    root: {
      borderTop: '1px solid transparent',
      borderBottom: '1px solid var(--zircon)',
      marginBottom: '-1px',
      padding: 0,
      height: '2rem',
      backgroundColor: 'var(--paleGrey)',
      textIndent: '2rem',
      fontWeight: 'bold',
      fontSize: '.75rem',
      textTransform: 'uppercase',
      alignItems: 'center',
      display: 'flex',
      lineHeight: 1.33,
      color: 'var(--coolGrey)'
    },
    gutters: {
      paddingLeft: 0,
      paddingRight: 0
    },
    sticky: {
      backgroundColor: 'var(--paleGrey)'
    }
  },
  MuiListItemSecondaryAction: {
    root: {
      zIndex: 1
    }
  },
  MuiMenuItem: {
    root: {
      minHeight: 'auto',
      paddingTop: 4,
      paddingBottom: 4,
      color: getCssVariableValue('charcoalGrey'),
      border: 0,
      '&:last-child': {
        borderBottom: 0
      }
    },
    gutters: {
      paddingLeft: 24,
      paddingRight: 24
    }
  },
  MuiTextField: {
    borderWidth: '0.0625rem'
  },
  MuiFormHelperText: {
    root: {
      fontStyle: 'italic',
      fontSize: '0.875rem'
    }
  },
  MuiDialog: {
    root: {
      color: getCssVariableValue('charcoalGrey'),
      'border-radius': '8px',
      zIndex: getCssVariableValue('zIndex-modal')
    },
    paper: {
      'box-sizing': 'border-box',
      [normalTheme.breakpoints.down('md')]: {
        padding: `${defaultValues.dialog.sm.padding}px`
      },
      [normalTheme.breakpoints.up('md')]: {
        padding: `${defaultValues.dialog.md.padding}px`
      }
    },
    paperWidthSm: {
      width: '544px',
      maxWidth: '544px'
    },
    paperFullScreen: {
      '&$paperScrollBody': {
        'min-height': '100%',
        height: 'auto'
      }
    }
  },
  MuiDialogContent: {
    root: {
      [normalTheme.breakpoints.up('md')]: {
        padding: `${defaultValues.dialog.md.padding}px 0`
      },
      [normalTheme.breakpoints.down('sm')]: {
        padding: `${defaultValues.dialog.sm.padding}px 0`
      },

      overflowY: 'initial'
    }
  },
  MuiDialogActions: {
    root: {
      padding: '0',
      [normalTheme.breakpoints.down('sm')]: {
        margin: 0,
        '& button': {
          '&:only-child': {
            width: '100%'
          },
          width: '50%'
        },
        '&.modal_actions_below': {
          display: 'block',
          '& button': {
            width: '100%',
            margin: 0,
            '&:not(:first-child)': {
              marginTop: '8px'
            }
          }
        }
      }
    }
  },
  MuiDialogTitle: {
    root: {
      padding: '0 0 16px 0',
      [normalTheme.breakpoints.down('sm')]: {
        padding: '14px 0 16px 0'
      }
    }
  },
  MuiDivider: {
    /**
     * calcs are made since we have defaultMargin on the Dialog so
     * we need to remove the left margin and add the width of 2 margins
     * in order to have the divider takes the full width of the Modal
     */
    root: {
      [normalTheme.breakpoints.down('md')]: {
        width: `calc(100% + ${defaultValues.dialog.sm.padding}*2px)`,
        marginLeft: `-${defaultValues.dialog.sm.padding}px`
      },
      [normalTheme.breakpoints.up('md')]: {
        width: `calc(100% + ${defaultValues.dialog.md.padding}*2px)`,
        marginLeft: `-${defaultValues.dialog.md.padding}px`
      }
    }
  },
  MuiSwitch: {
    root: {
      width: SWITCH_BUTTON_WIDTH,
      '& input': {
        width: '150%',
        height: '150%',
        left: '-25%',
        top: '-25%'
      }
    },
    switchBase: {
      width: SWITCH_BUTTON_WIDTH,
      transform: 'translateX(-7px)'
    },
    checked: {
      '& + $bar': {
        opacity: 1
      },
      transform: 'translateX(7px)'
    },
    icon: {
      width: 16,
      height: 16
    },
    bar: {
      width: SWITCH_BAR_WIDTH,
      height: 12,
      marginTop: -(SWITCH_BAR_HEIGHT / 2),
      marginLeft: -(SWITCH_BAR_WIDTH / 2),
      backgroundColor: 'var(--silver)',
      opacity: 1
    },
    colorPrimary: {
      '&$checked': {
        color: getCssVariableValue('primaryContrastTextColor')
      }
    },
    colorSecondary: {
      '&$checked': {
        '& + $bar': {
          backgroundColor: getCssVariableValue('validColor')
        },
        color: getCssVariableValue('primaryContrastTextColor')
      }
    }
  }
}

// Override default shadow for elevation 8 used for Popover
normalTheme.shadows[8] =
  '0rem 0.125rem 0.375rem 0rem rgba(50, 54, 63, .19), 0rem 0.375rem 1.25rem 0rem rgba(50, 54, 63, .19)'

export const invertedTheme = {
  ...normalTheme,
  palette: {
    ...normalTheme.palette,
    type: 'dark',
    text: {
      primary: getCssVariableValue('white')
    }
  }
}

invertedTheme.overrides = merge({}, normalTheme.overrides, {
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
  MuiInputLabel: {
    root: {
      color: invertedTheme.palette.text.primary
    }
  },
  MuiSwitch: {
    switchBase: {
      color: getCssVariableValue('primaryContrastTextColor')
    },
    colorPrimary: {
      '& + $bar': {
        backgroundColor: getCssVariableValue('primaryContrastTextColor')
      },

      '&$checked': {
        '& + $bar': {
          border:
            '1px solid ' + getCssVariableValue('primaryContrastTextColor'),
          boxSizing: 'border-box'
        }
      }
    }
  }
})

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
