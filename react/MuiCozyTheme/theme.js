import { createMuiTheme } from '@material-ui/core/styles'
import { getCssVariableValue } from '../utils/color'
import isTesting from '../helpers/isTesting'

export const defaultValues = {
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

const makeTypography = palette => ({
  useNextVariants: true,
  fontFamily: getCssVariableValue('primaryFont') || 'Lato',
  h1: {
    fontSize: 48,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.087,
    letterSpacing: -0.8
  },
  h2: {
    fontSize: 32,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.313,
    letterSpacing: -0.4
  },
  h3: {
    fontSize: 24,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.167
  },
  h4: {
    fontSize: 20,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.167
  },
  h5: {
    fontSize: 18,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.313
  },
  h6: {
    fontSize: 16,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.313
  },
  subtitle1: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 1.313,
    textTransform: 'uppercase'
  },
  body1: {
    fontSize: 16,
    lineHeight: 1.313,
    color: palette.text.primary
  },
  body2: {
    fontSize: 14,
    lineHeight: 1.313,
    color: palette.text.primary
  },
  button: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 1.313
  },
  caption: {
    fontSize: 12,
    lineHeight: 1.313,
    color: palette.text.secondary
  }
})

const normalPalette = {
  type: 'light',
  primary: {
    light: getCssVariableValue('primaryColorLight'),
    main: getCssVariableValue('primaryColor'),
    dark: getCssVariableValue('primaryColorDark'),
    contrastText: getCssVariableValue('primaryContrastTextColor')
  },
  error: {
    main: getCssVariableValue('errorColor')
  },
  secondary: {
    light: getCssVariableValue('secondaryColorLight'),
    main: getCssVariableValue('secondaryColor'),
    dark: getCssVariableValue('secondaryColorDark'),
    contrastText: getCssVariableValue('secondaryContrastTextColor')
  },
  text: {
    primary: getCssVariableValue('primaryTextColor'),
    secondary: getCssVariableValue('secondaryTextColor')
  },
  grey: {
    0: getCssVariableValue('white'),
    100: getCssVariableValue('paleGrey'),
    200: getCssVariableValue('silver'),
    300: getCssVariableValue('coolGrey'),
    400: getCssVariableValue('slateGrey'),
    800: getCssVariableValue('charcoalGrey'),
    900: getCssVariableValue('black')
  },
  divider: getCssVariableValue('silver')
}

normalPalette.background = {
  banner: normalPalette.grey[100],
  selected: '#F5FAFF'
}

export const normalTheme = createMuiTheme({
  typography: makeTypography(normalPalette),
  shape: {
    borderRadius: defaultValues.borderRadius
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
  palette: normalPalette,
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
    }
  },
  ...(isTesting() && { transitions: { create: () => 'none' } })
})

const makeOverrides = theme => ({
  MuiOutlinedInput: {
    root: {
      '&$disabled': {
        background: theme.palette.grey[100]
      },
      '&$focused $notchedOutline': {
        borderWidth: '0.0625rem'
      }
    },
    notchedOutline: {
      borderColor: theme.palette.grey[200]
    }
  },
  MuiButton: {
    outlined: {
      borderRadius: 2,
      height: 40,
      minWidth: 112
    },
    contained: {
      borderRadius: 2,
      boxShadow: 0,
      height: 40,
      minWidth: 112
    },
    containedSecondary: {
      color: 'white'
    }
  },
  MuiTab: {
    // This overrides the disabled color of the MuiTab
    textColorPrimary: {
      color: theme.palette.grey[300]
    },
    textColorSecondary: {
      color: theme.palette.grey[300]
    },
    root: {
      fontSize: normalTheme.typography.subtitle1.fontSize,
      [normalTheme.breakpoints.up('md')]: {
        fontSize: normalTheme.typography.subtitle1.fontSize
      }
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
      borderColor: theme.palette.grey[300],
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
      color: theme.palette.text.primary,
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
    padding: {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  MuiListItemIcon: {
    root: {
      padding: 0
    }
  },
  MuiListItem: {
    root: {
      paddingTop: 0,
      paddingBottom: 0,
      minHeight: '3.5rem'
    },
    gutters: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      [normalTheme.breakpoints.up('md')]: {
        '&.listItem--dialog': {
          paddingLeft: '2rem',
          paddingRight: '2rem'
        }
      }
    },
    dense: {
      minHeight: '3.5rem',
      paddingTop: 0,
      paddingBottom: 0
    },
    secondaryAction: {
      paddingRight: '2rem'
    },
    button: {
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.background.selected
      },
      '&:hover': {
        backgroundColor: theme.palette.background.banner
      },
      '&:focus': {
        backgroundColor: theme.palette.background.banner
      }
    }
  },
  MuiListItemText: {
    root: {
      padding: '14px 0'
    },
    dense: {
      fontSize: null
    },
    primary: {
      '&$textDense': {
        fontSize: null
      }
    },
    secondary: {
      '&$textDense': {
        fontSize: null
      }
    }
  },
  MuiListSubheader: {
    root: {
      borderTop: '1px solid transparent',
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.divider,
      marginBottom: '-1px',
      padding: 0,
      height: '2rem',
      backgroundColor: theme.palette.background.banner,
      textIndent: '2rem',
      fontWeight: 'bold',
      fontSize: '.75rem',
      textTransform: 'uppercase',
      alignItems: 'center',
      display: 'flex',
      lineHeight: 1.33,
      color: theme.palette.text.secondary
    },
    gutters: {
      paddingLeft: 0,
      paddingRight: 0
    },
    sticky: {
      backgroundColor: theme.palette.background.banner
    }
  },
  MuiListItemSecondaryAction: {
    root: {
      zIndex: 1,
      right: 0
    }
  },
  MuiMenuItem: {
    root: {
      minHeight: 'auto',
      paddingTop: 4,
      paddingBottom: 4,
      color: theme.palette.grey[800],
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
      zIndex: getCssVariableValue('zIndex-modal')
    },
    paper: {
      '&.small': {
        width: '480px',
        maxWidth: '480px',
        [normalTheme.breakpoints.down('md')]: {
          margin: '16px',
          padding: '0 8px 8px',
          height: 'auto',
          maxHeight: 'calc(100% - 32px)',
          borderRadius: '6px'
        }
      },
      '&.medium': {
        [normalTheme.breakpoints.up('md')]: {
          width: '544px',
          maxWidth: '544px'
        }
      },
      '&.large': {
        [normalTheme.breakpoints.up('md')]: {
          width: '800px',
          maxWidth: '800px'
        }
      }
    },
    paperFullScreen: {
      '& .cozyDialogActions': {
        paddingBottom: 'env(safe-area-inset-bottom)'
      }
    }
  },
  MuiDialogTitle: {
    root: {
      ...theme.typography.h3,
      width: 'calc(100% - (58px + 30px))', // remove close button width and margin
      padding: '24px 32px',
      [theme.breakpoints.down('sm')]: {
        ...theme.typography.h4,
        width: 'calc(100% - 58px)', // remove close button width and margin
        padding: '13px 16px 12px'
      },
      '&.dialogTitleFluid': {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        [theme.breakpoints.down('sm')]: {
          padding: '0 0 24px 0'
        }
      }
    }
  },
  MuiDialogContent: {
    root: {
      padding: '24px 32px 0',
      [theme.breakpoints.down('sm')]: {
        padding: '24px 16px 0'
      },
      '& .dialogContentInner': {
        marginBottom: '24px',
        '&.withFluidActions': {
          [theme.breakpoints.down('sm')]: {
            marginBottom: '16px'
          }
        }
      }
    }
  },
  MuiDialogActions: {
    root: {
      margin: '16px 32px',
      [theme.breakpoints.down('sm')]: {
        margin: '8px 16px',
        '& button': {
          flexGrow: 1
        }
      },
      '&.dialogActionsFluid': {
        margin: '24px 0 0'
      },
      '&.columnLayout': {
        display: 'flex',
        flexDirection: 'column-reverse',
        '& button': {
          width: '100%',
          margin: 0,
          '&:not(:first-child)': {
            marginBottom: '8px'
          }
        }
      }
    }
  },
  MuiDivider: {
    inset: {
      marginLeft: 64,
      '&.divider--dialog': {
        marginLeft: 80
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
})

normalTheme.overrides = makeOverrides(normalTheme)

// Override default shadow for elevation 8 used for Popover
normalTheme.shadows[8] =
  '0rem 0.125rem 0.375rem 0rem rgba(50, 54, 63, .19), 0rem 0.375rem 1.25rem 0rem rgba(50, 54, 63, .19)'

const invertedPalette = {
  ...normalTheme.palette,
  type: 'dark',
  background: {
    default: getCssVariableValue('primaryColor'),
    paper: getCssVariableValue('primaryColor'),
    banner: getCssVariableValue('primaryColorDark'),
    selected: getCssVariableValue('primaryColorDark')
  },
  primary: {
    main: '#fff'
  },
  secondary: {
    main: '#fff'
  },
  text: {
    primary: '#fff',
    secondary: '#fff'
  },
  error: {
    main: '#fcc0c0' // lighten($errorColor, 70%)
  },

  divider: getCssVariableValue('primaryColorDark')
}

const invertedTypography = makeTypography(invertedPalette)
export const invertedTheme = createMuiTheme({
  palette: invertedPalette,
  typography: invertedTypography
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
}

window.normalTheme = normalTheme
window.invertedTheme = invertedTheme
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
