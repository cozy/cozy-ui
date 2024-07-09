import { alpha, darken } from '../../styles'
import {
  makeAlertColor,
  makeChipStyleByColor,
  makeSecondaryButtonStyle,
  makeTextButtonStyle,
  makeContainedButtonStyle,
  getFlagshipCssVar
} from '../helpers'

const SWITCH_BAR_WIDTH = 25

export const makeLightNormalOverrides = theme => ({
  MuiSelect: {
    iconOutlined: {
      top: 'auto',
      right: 14
    },
    outlined: {
      '&&': {
        paddingRight: 39
      }
    }
  },
  MuiOutlinedInput: {
    root: {
      borderRadius: 4,
      '&$disabled': {
        background: theme.palette.background.contrast
      },
      '&$focused $notchedOutline': {
        borderWidth: '0.0625rem'
      },
      '&$error $notchedOutline': {
        borderColor: alpha(
          theme.palette.error.main,
          theme.palette.border.opacity
        )
      },
      '&$focused&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&:hover $notchedOutline': {
        borderColor: theme.palette.text.hint
      },
      '&:hover&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      }
    },
    notchedOutline: {
      borderColor: theme.palette.border.main,
      transition: `border-color ${theme.transitions.duration.shorter}ms`
    },
    input: {
      textAlign: 'left',
      padding: '18.5px 16px'
    },
    inputMarginDense: {
      paddingTop: 14,
      paddingBottom: 15
    }
  },
  MuiInputLabel: {
    outlined: {
      '&$marginDense': {
        transform: 'translate(14px, 14px) scale(1)'
      },
      '&:not($shrink)': {
        '&$error': {
          color: theme.palette.text.secondary
        }
      }
    }
  },
  MuiButton: {
    root: {
      borderRadius: 2,
      height: '2.5rem',
      lineHeight: 'normal',
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
            ),
            '@media (hover: none)': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.ghostOpacity
              )
            }
          }
        },
        '&.customColor': {
          '&-primary': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.border.main,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
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
  MuiTabs: {
    root: {
      '&.segmented': {
        borderRadius: '99px',
        backgroundColor: theme.palette.background.contrast,
        overflow: 'visible',
        minHeight: '2.5rem',
        '& $indicator': {
          top: '1px',
          height: 'calc(100% - 2px)',
          transform: 'scale(0.99)',
          borderRadius: '99px',
          zIndex: 0,
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.background.paper
        },
        '& $fixed': {
          overflow: 'visible !important'
        },
        '& $scrollButtons': {
          borderRadius: '99px'
        }
      }
    }
  },
  MuiTab: {
    root: {
      ...theme.typography.subtitle2,
      '&:hover': {
        color: theme.palette.text.primary,
        opacity: 1
      },
      '&:focus': {
        color: theme.palette.text.primary
      },
      '&.narrowed': {
        minWidth: 'auto',
        [theme.breakpoints.up('sm')]: {
          minWidth: 'auto'
        }
      },
      '&.segmented': {
        ...theme.typography.body2,
        textTransform: 'initial',
        zIndex: 1,
        borderRadius: '99px',
        minHeight: '2.5rem',
        '&$selected': {
          color: theme.palette.text.primary
        }
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
      borderColor: theme.palette.divider
    }
  },
  MuiStepContent: {
    root: {
      borderColor: theme.palette.divider
    }
  },
  MuiStepLabel: {
    label: {
      ...theme.typography.body1,
      '&$active': {
        ...theme.typography.h6
      },
      '&$completed': {
        ...theme.typography.h6
      }
    }
  },
  MuiListItemIcon: {
    root: {
      minWidth: 'auto',
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.icon
    }
  },
  MuiListItem: {
    root: {
      gap: 16,
      paddingTop: 12,
      paddingBottom: 12,
      minHeight: 56,
      '&.small': {
        paddingTop: 8,
        paddingBottom: 8,
        minHeight: 48
      },
      '&.large': {
        paddingTop: 16,
        paddingBottom: 16,
        minHeight: 64
      },
      '&.cozyActionsItem': {
        wordBreak: 'break-word'
      }
    },
    dense: {
      paddingTop: 8,
      paddingBottom: 8,
      minHeight: 48,
      '&.small': {
        paddingTop: 4,
        paddingBottom: 4,
        minHeight: 40
      },
      '&.large': {
        paddingTop: 12,
        paddingBottom: 12,
        minHeight: 56
      }
    }
  },
  MuiListSubheader: {
    root: {
      ...theme.typography.subtitle2,
      paddingBottom: 8,
      paddingTop: 8,
      marginBottom: '0.5rem',
      backgroundColor: theme.palette.background.contrast
    },
    sticky: {
      backgroundColor: theme.palette.background.default
    }
  },
  MuiListItemText: {
    root: {
      marginTop: 1,
      marginBottom: 1
    },
    multiline: {
      marginTop: 1,
      marginBottom: 1
    },
    secondary: {
      marginTop: 1
    }
  },
  MuiListItemSecondaryAction: {
    root: {
      right: 0
    }
  },
  MuiMenu: {
    paper: {
      maxWidth: 320
    }
  },
  MuiMenuItem: {
    root: {
      whiteSpace: 'normal',
      overflow: 'auto',
      wordBreak: 'break-word',
      paddingTop: 4,
      paddingBottom: 4,
      [theme.breakpoints.up('sm')]: {
        minHeight: 40
      },
      '&.cozyActionsItem': {
        minWidth: 256
      },
      '& .cozyListItemIcon': {
        width: 16,
        height: 16
      }
    },
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    }
  },
  MuiFormLabel: {
    root: {
      color: theme.palette.text.secondary,
      '&$disabled&$error': {
        color: theme.palette.text.disabled
      }
    }
  },
  MuiFormHelperText: {
    root: {
      fontStyle: 'italic',
      fontSize: '0.875rem',
      marginTop: 4,
      '&$disabled&$error': {
        color: theme.palette.text.disabled
      }
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
          borderRadius: '6px',
          '& .divider--dialog': {
            marginLeft: '-8px',
            marginRight: '-8px'
          }
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
      },
      '&.overflow': {
        overflowY: 'visible !important', // Allow the icon to overflow the dialog, otherwise it will be cut off,
        '& .cozyDialogContent': {
          overflowY: 'visible !important' // This allow the overflow to work also on iOS
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
        paddingBottom: `calc(env(safe-area-inset-bottom) + ${getFlagshipCssVar(
          'bottom'
        )})`
      },
      // Can't do that within the stylus file because we need to only target
      // the fullscreen dialog
      '& [class*="DialogCloseButton"]': {
        transform: `translateY(${getFlagshipCssVar('top')})`
      },
      '& [class*="DialogBackButton"]': {
        transform: `translateY(${getFlagshipCssVar('top')})`
      },
      // 0.75rm === MuiDialogTitle.root.sm
      // we should not target specifically flagship-app since
      // we should only rely on the css var. But this is for
      // another time.
      '.flagship-app & .cozyDialogTitle': {
        paddingTop: `calc(${getFlagshipCssVar('top')} + 0.75rem) !important`
      },
      '.flagship-app & .cozyDialogContent': {
        marginBottom: `${getFlagshipCssVar('bottom')} !important`
      }
    }
  },
  MuiDialogTitle: {
    root: {
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
            marginBottom: 0,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            '& .dialogContentWrapper': {
              flexGrow: 1,
              '&:not(.withActions)': {
                paddingBottom: `calc(env(safe-area-inset-bottom) + ${getFlagshipCssVar(
                  'bottom'
                )} + 16px)`
              }
            },
            '& .cozyDialogActions': {
              paddingBottom: `calc(env(safe-area-inset-bottom) + ${getFlagshipCssVar(
                'bottom'
              )} + 16px)`
            }
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
      '&:not(.columnLayout) > :not(:first-child):not(:first-child)': {
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
  MuiCheckbox: {
    colorSecondary: {
      '&$checked': {
        color: theme.palette.error.main
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
      backgroundColor: theme.palette.common.white
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
        backgroundColor: theme.palette.common.white
      }
    }
  },
  MuiTooltip: {
    tooltip: {
      borderRadius: '8px',
      fontSize: '1rem',
      lineHeight: '1.3',
      padding: '16px'
    }
  },
  MuiIconButton: {
    root: {
      color: theme.palette.text.secondary,
      '&.small': {
        padding: 3
      },
      '&.medium': {
        padding: 12
      },
      '&.large': {
        padding: 16
      },
      '&.dialogIconButton': {
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
          backgroundColor: theme.palette.action.selected
        }
      },
      '&.cozyStyles': {
        '&-error': {
          color: theme.palette.error.main,
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.error.main,
              theme.palette.action.hoverOpacity
            ),
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
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
        backgroundColor: theme.palette.background.contrast,
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
  },
  MuiAlert: {
    root: {
      padding: '8px 16px',
      '&.cozyStyles': {
        '&-primary': makeAlertColor(theme, 'primary'),
        '&-secondary': makeAlertColor(theme, 'secondary'),
        '&-success': makeAlertColor(theme, 'success'),
        '&-error': makeAlertColor(theme, 'error'),
        '&-warning': makeAlertColor(theme, 'warning'),
        '&-info': makeAlertColor(theme, 'info')
      },
      '& $icon': {
        paddingTop: '9px'
      },
      '&.block': {
        flexWrap: 'wrap',
        '& $action': {
          display: 'block',
          width: '100%',
          paddingLeft: 0,
          textAlign: 'right'
        }
      }
    },
    message: {
      flex: 'auto',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    action: {
      marginRight: '-6px'
    }
  },
  MuiAlertTitle: {
    root: {
      width: '100%',
      fontWeight: 'bold'
    }
  },
  MuiSnackbarContent: {
    root: {
      padding: '4px 12px',
      backgroundColor: theme.palette.grey[600]
    }
  },
  MuiFab: {
    root: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      '&:hover': {
        backgroundColor: darken(theme.palette.background.paper, 0.05)
      },
      '@media (hover: none)': {
        backgroundColor: theme.palette.background.paper
      }
    },
    extended: {
      borderRadius: 56 / 2,
      height: 56,
      minWidth: 56,
      padding: '0 20px',
      '&$sizeSmall': {
        borderRadius: 40 / 2,
        height: 40,
        minWidth: 40,
        padding: '0 12px'
      },
      '&$sizeMedium': {
        borderRadius: 48 / 2,
        height: 48,
        minWidth: 48,
        padding: '0 16px'
      }
    }
  }
})
