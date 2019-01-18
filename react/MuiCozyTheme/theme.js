import { createMuiTheme } from '@material-ui/core/styles'
import { getCssVariableValue } from '../utils/color'

const defaultValues = {
  borderRadius: 6
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: getCssVariableValue('primaryFont'),
    title: {
      color: 'white'
    }
  },
  palette: {
    primary: {
      light: getCssVariableValue('frenchPass'),
      main: getCssVariableValue('dodgerBlue'),
      dark: getCssVariableValue('scienceBlue'),
      contrastText: getCssVariableValue('white')
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
  shape: {
    borderRadius: defaultValues.borderRadius
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0
      }
    },
    MuiExpansionPanel: {
      root: {
        boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        borderWidth: '0.0625rem',
        borderStyle: 'solid',
        borderColor: 'var(--silver)',
        overflow: 'hidden',
        marginBottom: '1rem',
        borderRadius: defaultValues.borderRadius
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
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: getCssVariableValue('paleGrey')
        }
      }
    },
    MuiMenuItem: {
      root: {
        paddingTop: 4,
        paddingBottom: 4,
        color: getCssVariableValue('charcoalGrey')
      },
      gutters: {
        paddingLeft: 24,
        paddingRight: 24
      }
    },
    MuiSwitch: {
      root: {
        width: 40,
        height: 23
      },
      switchBase: {
        width: 25,
        height: 23
      },
      checked: {
        '& + $bar': {
          opacity: 1
        }
      },
      icon: {
        width: 16,
        height: 16
      },
      bar: {
        width: 25,
        height: 12,
        marginTop: -6,
        marginLeft: -12,
        backgroundColor: '#d6d8da',
        opacity: 1
      },
      colorPrimary: {
        '&$checked': {
          color: 'white'
        }
      },
      colorSecondary: {
        '&$checked': {
          color: 'white'
        }
      },
      disabled: {
        '&$switchBase': {
          color: 'white'
        }
      }
    }
  }
})

// Override default shadow for elevation 8 used for Popover
theme.shadows[8] =
  '0rem 0.125rem 0.375rem 0rem rgba(50, 54, 63, .19), 0rem 0.375rem 1.25rem 0rem rgba(50, 54, 63, .19)'

export default theme
