import { alpha } from '@material-ui/core/styles'

const SWITCH_BAR_WIDTH = 25

export const makeThemeOverrides = theme => {
  const createOverrides =
    theme.palette.type === 'dark' ? makeInvertedOverrides : makeOverrides

  return createOverrides(theme)
}

const makeChipStyleByColor = (theme, color) => ({
  color: theme.palette.text[color] || theme.palette[color].main,
  borderColor:
    color === 'primary'
      ? theme.palette.border.main
      : alpha(theme.palette[color].main, theme.palette.border.opacity),
  '&$clickable, &$deletable': {
    '&:hover, &:focus': {
      borderColor:
        color === 'primary'
          ? theme.palette.border.main
          : alpha(theme.palette[color].main, theme.palette.border.opacity),
      backgroundColor:
        color === 'primary'
          ? theme.palette.action.hover
          : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
    }
  },
  '& $icon': {
    color:
      color === 'primary' ? theme.palette.text.icon : theme.palette[color].main,
    fill:
      color === 'primary' ? theme.palette.text.icon : theme.palette[color].main
  },
  '& $deleteIcon': {
    color:
      color === 'primary'
        ? theme.palette.text.secondary
        : theme.palette[color].main,
    fill:
      color === 'primary'
        ? theme.palette.text.secondary
        : theme.palette[color].main
  },
  '&$colorPrimary': {
    padding: '0 1px',
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
    '& $icon, & $deleteIcon': {
      color: theme.palette[color].contrastText,
      fill: theme.palette[color].contrastText
    },
    '&$disabled': {
      opacity: 1,
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
      '& $icon, & $deleteIcon': {
        color: theme.palette.text.disabled,
        fill: theme.palette.text.disabled
      }
    },
    '&$clickable, &$deletable': {
      '&:hover, &:focus': {
        backgroundColor: theme.palette[color].dark
      }
    }
  },
  '&.ghost': {
    borderWidth: '1px',
    borderStyle: 'dashed',
    '&:not($disabled)': {
      color: theme.palette[color].main,
      borderColor: alpha(
        theme.palette[color].main,
        theme.palette.border.ghostOpacity
      ),
      backgroundColor: alpha(
        theme.palette[color].main,
        theme.palette.action.ghostOpacity
      ),
      '& $icon, & $deleteIcon': {
        color: theme.palette[color].main,
        fill: theme.palette[color].main
      }
    },
    '&$clickable, &$deletable': {
      '&:hover, &:focus': {
        borderColor: alpha(
          theme.palette[color].main,
          theme.palette.border.ghostOpacity
        ),
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverGhostOpacity
        )
      }
    }
  }
})

const makeSecondaryButtonStyle = (theme, color) => ({
  color: theme.palette[color].main,
  borderColor: theme.palette[color].main,
  '&:hover': {
    backgroundColor: alpha(
      theme.palette[color].main,
      theme.palette.action.hoverOpacity
    )
  },
  '&.ghost': {
    backgroundColor: alpha(
      theme.palette[color].main,
      theme.palette.action.ghostOpacity
    ),
    '&:hover': {
      backgroundColor: alpha(
        theme.palette[color].main,
        theme.palette.action.hoverGhostOpacity
      )
    }
  }
})

const makeTextButtonStyle = (theme, color) => ({
  color: theme.palette[color].main,
  '&:hover': {
    backgroundColor: alpha(
      theme.palette[color].main,
      theme.palette.action.hoverOpacity
    )
  }
})

const makeContainedButtonStyle = (theme, color) => ({
  color: theme.palette[color].contrastText,
  backgroundColor: theme.palette[color].main,
  '&:hover': {
    backgroundColor: theme.palette[color].dark
  }
})

const makeOverrides = theme => ({
  MuiOutlinedInput: {
    root: {
      '&$disabled': {
        background: theme.palette.grey[100]
      },
      '&$focused $notchedOutline': {
        borderWidth: '0.0625rem'
      },
      '&:hover $notchedOutline': {
        borderColor: theme.palette.grey[300]
      }
    },
    notchedOutline: {
      borderColor: theme.palette.grey[200]
    }
  },
  MuiButton: {
    root: {
      height: '2.5rem',
      padding: '0 1rem',
      '&.ghost': {
        borderStyle: 'dashed !important', // important needed to override disable state
        '&:hover': {
          borderStyle: 'dashed !important' // important needed to override disable state
        }
      }
    },
    sizeSmall: {
      height: '2rem',
      padding: '0 0.75rem',
      '&$text': {
        padding: '8px 6px'
      }
    },
    sizeLarge: {
      height: '3rem',
      padding: '0 1.25rem',
      '&$text': {
        padding: '14px 10px'
      }
    },
    text: {
      minWidth: 'auto',
      borderRadius: 2,
      padding: '11px 8px',
      '&:not($disabled)': {
        '&.customColor': {
          '&-success': makeTextButtonStyle(theme, 'success'),
          '&-warning': makeTextButtonStyle(theme, 'warning'),
          '&-error': makeTextButtonStyle(theme, 'error'),
          '&-info': makeTextButtonStyle(theme, 'info')
        }
      }
    },
    outlined: {
      borderRadius: 2,
      '&:not($disabled)': {
        '&.ghost': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.ghostOpacity
          ),
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.hoverGhostOpacity
            )
          }
        },
        '&.customColor': {
          '&-primary': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.border.main,
            '&:hover': {
              backgroundColor: theme.palette.action.hover
            },
            '&.ghost': {
              color: theme.palette.primary.main,
              borderColor: alpha(
                theme.palette.primary.main,
                theme.palette.border.ghostOpacity
              )
            }
          },
          '&-success': makeSecondaryButtonStyle(theme, 'success'),
          '&-warning': makeSecondaryButtonStyle(theme, 'warning'),
          '&-error': makeSecondaryButtonStyle(theme, 'error'),
          '&-info': makeSecondaryButtonStyle(theme, 'info')
        }
      }
    },
    contained: {
      borderRadius: 2,
      boxShadow: 0,
      '&:not($disabled)': {
        '&.customColor': {
          '&-success': makeContainedButtonStyle(theme, 'success'),
          '&-warning': makeContainedButtonStyle(theme, 'warning'),
          '&-error': makeContainedButtonStyle(theme, 'error'),
          '&-info': makeContainedButtonStyle(theme, 'info')
        }
      }
    },
    startIcon: {
      // !important needed to override all sizes
      // should be remove when https://github.com/cozy/cozy-ui/issues/1808 is fixed
      marginLeft: '0 !important'
    }
  },
  MuiTab: {
    // This overrides the disabled color of the MuiTab
    textColorPrimary: {
      color: theme.palette.grey[500]
    },
    textColorSecondary: {
      color: theme.palette.grey[500]
    },
    root: {
      fontSize: theme.typography.subtitle1.fontSize,
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.subtitle1.fontSize
      }
    }
  },
  MuiAccordion: {
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    root: {
      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
      borderWidth: '0.0625rem',
      borderStyle: 'solid',
      borderColor: theme.palette.border.main,
      overflow: 'hidden',
      marginBottom: '1rem'
    }
  },
  MuiAccordionSummary: {
    expanded: {},
    root: {
      backgroundColor: theme.palette.grey[100],
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
    expandIcon: {
      order: 0,
      '&&': {
        marginLeft: '0.3125rem'
      },
      transform: 'rotate(-90deg)',
      '&$expanded': {
        marginLeft: '0.3125rem',
        transform: 'rotate(0)'
      }
    },
    content: {
      margin: '0.75rem 0',
      paddingLeft: '0.5rem',
      paddingRight: '0.25rem',
      order: 1,
      '& > :last-child': {
        paddingRight: 0
      },
      '&$expanded': {
        margin: '0.75rem 0'
      }
    }
  },
  MuiAccordionDetails: {
    root: {
      padding: 0,
      borderTop: `0.0625rem solid ${theme.palette.border.main}`
    }
  },
  MuiStepConnector: {
    line: {
      borderColor: theme.palette.grey[300]
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
      minWidth: 'auto',
      marginRight: '1rem',
      padding: 0,
      width: 32,
      justifyContent: 'center'
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
      [theme.breakpoints.up('md')]: {
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
        backgroundColor: theme.palette.action.selected
      },
      '&:hover': {
        backgroundColor: theme.palette.background.default
      },
      '&:focus': {
        backgroundColor: theme.palette.background.default
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
      '&$dense': {
        fontSize: null
      }
    },
    secondary: {
      '&$dense': {
        fontSize: null
      }
    },
    multiline: {
      marginTop: 0,
      marginBottom: 0
    }
  },
  MuiListSubheader: {
    root: {
      borderTop: '1px solid transparent',
      borderBottom: '1px solid transparent',
      marginBottom: '-1px',
      padding: 0,
      height: '2rem',
      backgroundColor: theme.palette.background.paper,
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
      backgroundColor: theme.palette.background.default
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
  MuiFormLabel: {
    root: {
      color: theme.palette.text.secondary
    }
  },
  MuiFormHelperText: {
    root: {
      fontStyle: 'italic',
      fontSize: '0.875rem',
      marginTop: 4
    }
  },
  MuiDialog: {
    paper: {
      '&.small': {
        width: '480px',
        maxWidth: '480px',
        [theme.breakpoints.down('md')]: {
          margin: '16px',
          padding: '0 8px 8px',
          height: 'auto',
          maxHeight: 'calc(100% - 32px)',
          borderRadius: '6px'
        }
      },
      '&.medium': {
        [theme.breakpoints.up('md')]: {
          width: '544px',
          maxWidth: '544px'
        }
      },
      '&.large': {
        [theme.breakpoints.up('md')]: {
          width: '800px',
          maxWidth: '800px'
        }
      }
    },
    scrollPaper: {
      '&.alignTop': {
        alignItems: 'start'
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
      '.flagship-app &': {
        paddingTop: 'calc(var(--flagship-top-height) + 0.75rem) !important'
      },
      ...theme.typography.h3,
      boxSizing: 'border-box',
      width: '100%',
      padding: '1.5rem 2rem',
      [theme.breakpoints.down('sm')]: {
        ...theme.typography.h4,
        padding: '0.75rem 1rem'
      },
      '&.dialogTitleWithBack': {
        paddingLeft: '4rem', // padding base (2rem) + buttonWidth (1rem) + buttonMargin (1rem)
        [theme.breakpoints.down('sm')]: {
          paddingLeft: '3rem' // padding base (1rem) + buttonWidth (1rem) + buttonMargin (1rem)
        }
      },
      '&.dialogTitleWithClose': {
        paddingRight: '4rem', // padding base (2rem) + buttonWidth (1rem) + buttonMargin (1rem)
        [theme.breakpoints.down('sm')]: {
          paddingRight: '3rem' // padding base (1rem) + buttonWidth (1rem) + buttonMargin (1rem)
        }
      },
      '&.dialogTitleFluid': {
        paddingTop: 0
      }
    }
  },
  MuiDialogContent: {
    root: {
      '.flagship-app &': {
        marginBottom: 'var(--flagship-bottom-height) !important'
      },
      padding: '24px 32px 0',
      [theme.breakpoints.down('sm')]: {
        padding: '24px 16px 0'
      },
      '&.disableGutters': {
        padding: 0,
        '& .dialogContentInner': {
          marginBottom: 0
        },
        '& .dialogTitleFluidContainer': {
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0
        }
      },
      '& .dialogContentInner': {
        marginBottom: '24px',
        '&.withFluidActions': {
          [theme.breakpoints.down('sm')]: {
            marginBottom: '16px'
          }
        },
        '& .dialogTitleFluidContainer': {
          marginLeft: '-2rem',
          marginRight: '-2rem',
          [theme.breakpoints.down('sm')]: {
            marginLeft: '-1rem',
            marginRight: '-1rem',
            marginTop: '-0.75rem'
          }
        }
      }
    }
  },
  MuiDialogActions: {
    root: {
      margin: '16px 32px',
      padding: 0,
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
      },

      // To keep muiV3 behavior
      // TODO check later if we need this behavior
      '& > :not(:first-child):not(:first-child)': {
        marginLeft: 4
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
    checked: {
      '& + $track$track': {
        opacity: 1
      }
    },
    switchBase: {
      top: 1,
      '&$checked': {
        transform: 'translateX(15px)'
      }
    },
    thumb: {
      width: 16,
      height: 16,
      backgroundColor: theme.palette.grey[0]
    },
    track: {
      width: SWITCH_BAR_WIDTH,
      height: 12,
      opacity: 1,
      backgroundColor: theme.palette.text.disabled
    },
    colorSecondary: {
      '&$checked': {
        '& + $track': {
          backgroundColor: theme.palette.success.main
        }
      }
    },
    disabled: {
      '&$checked + $track': {
        backgroundColor: `${theme.palette.grey[200]} !important`
      },
      '& $thumb': {
        backgroundColor: 'white'
      }
    }
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: theme.palette.grey[700],
      borderRadius: '8px',
      fontSize: '1rem',
      color: 'white',
      lineHeight: '1.3',
      padding: '16px'
    },
    arrow: {
      color: theme.palette.grey[700]
    },
    popper: {
      opacity: 0.9
    }
  },
  MuiIconButton: {
    root: {
      color: theme.palette.text.secondary,
      '&.dialogIconButton': {
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
          backgroundColor: theme.palette.action.selected
        }
      }
    }
  },
  MuiBadge: {
    badge: {
      boxSizing: 'content-box',
      padding: 0,
      '&.badgeBorder': {
        border: `2px solid ${theme.palette.background.paper}`
      },
      '&.badgeSizeLarge': {
        fontSize: '.6875rem',
        height: '1rem',
        minWidth: '1rem'
      },
      '&.badgeSizeMedium': {
        height: '.875rem',
        minWidth: '.875rem',
        fontSize: '.625rem'
      },
      '&.badgeSizeSmall': {
        height: '.75rem',
        minWidth: '.75rem',
        fontSize: '.5rem'
      }
    },
    anchorOriginTopRightRectangular: {
      transform: 'scale(1) translate(37%, -37%)'
    },
    anchorOriginBottomRightRectangular: {
      transform: 'scale(1) translate(37%, 37%)'
    },
    anchorOriginBottomLeftRectangular: {
      transform: 'scale(1) translate(-37%, 37%)'
    },
    anchorOriginTopLeftRectangular: {
      transform: 'scale(1) translate(-37%, -37%)'
    },
    dot: {
      borderRadius: '100%',
      padding: 0,
      '&.badgeSizeLarge': {
        height: '.625rem',
        minWidth: '.625rem'
      },
      '&.badgeSizeMedium': {
        height: '.5rem',
        minWidth: '.5rem'
      },
      '&.badgeSizeSmall': {
        height: '.375rem',
        minWidth: '.375rem'
      }
    }
  },
  MuiRadio: {
    root: {
      padding: '12px',
      '&$disabled svg': {
        borderRadius: '50%',
        backgroundColor: theme.palette.background.default,
        fill: theme.palette.border.disabled
      },
      '&:not($checked) svg': {
        fill: theme.palette.border.main
      }
    },
    colorPrimary: {
      '&$checked svg': {
        fill: theme.palette.primary.main
      },
      '&$disabled&$checked svg': {
        fill: theme.palette.text.disabled
      }
    },
    colorSecondary: {
      '&$checked svg': {
        fill: theme.palette.error.main
      },
      '&$disabled&$checked svg': {
        fill: theme.palette.text.disabled
      }
    }
  },
  MuiChip: {
    root: {
      '&.noLabel': {
        width: '32px',
        '& $label': {
          display: 'none'
        },
        '& $icon': {
          margin: 0
        }
      },
      '&.customColor': {
        '&-primary': makeChipStyleByColor(theme, 'primary'),
        '&-success': makeChipStyleByColor(theme, 'success'),
        '&-error': makeChipStyleByColor(theme, 'error'),
        '&-warning': makeChipStyleByColor(theme, 'warning'),
        '&-info': makeChipStyleByColor(theme, 'info')
      }
    }
  }
})

const makeInvertedOverrides = invertedTheme => {
  const invertedOverrides = {
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
    }
  }

  invertedOverrides.MuiSwitch = {
    ...invertedOverrides.MuiSwitch,
    switchBase: {
      ...invertedOverrides.MuiSwitch.switchBase,
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

  return invertedOverrides
}
