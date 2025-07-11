import { alpha, darken } from '../../styles'
import {
  makeAlertColor,
  makeChipStyleByColor,
  makeSecondaryButtonStyle,
  makeTextButtonStyle,
  makeContainedButtonStyle,
  getFlagshipCssVar
} from '../helpers'

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
  MuiToggleButtonGroup: {
    groupedHorizontal: {
      '&.rounded': {
        marginRight: 12,
        '&:last-child': {
          marginRight: 0
        },
        '&:not(:first-child)': {
          borderTopLeftRadius: 'inherit',
          borderBottomLeftRadius: 'inherit',
          marginLeft: 'inherit',
          borderLeft: 'inherit'
        },
        '&:not(:last-child)': {
          '&.rounded': {
            borderTopRightRadius: 'inherit',
            borderBottomRightRadius: 'inherit'
          }
        }
      }
    }
  },
  MuiToggleButton: {
    root: {
      borderRadius: 0,
      color: theme.palette.text.secondary,
      border: `1px solid ${theme.palette.border.main}`,
      padding: 15,
      '&$selected': {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
        '&:not($disabled)': {
          '&.customColor': {
            '&-primary': {
              color: theme.palette.primary.main
            }
          }
        }
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&.rounded': {
        border: 0,
        borderRadius: theme.shape.borderRadius,
        padding: '10px 12px',
        '&$selected': {
          backgroundColor: theme.palette.action.selected,
          '&:not($disabled)': {
            '&.customColor': {
              '&-primary': {
                color: theme.palette.text.primary,
                backgroundColor: alpha(
                  theme.palette.primary.main,
                  theme.palette.action.selectedOpacity
                ),
                '&:hover': {
                  textDecoration: 'none',
                  backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.activatedOpacity
                  ),
                  '@media (hover: none)': {
                    backgroundColor: 'transparent'
                  }
                }
              }
            }
          }
        }
      }
    },
    sizeSmall: {
      padding: 11,
      '&.rounded': {
        padding: '7px 10px'
      }
    },
    sizeLarge: {
      padding: 19,
      '&.rounded': {
        padding: 12
      }
    }
  },
  MuiButton: {
    root: {
      borderRadius: 100,

      lineHeight: 'normal',
      padding: '10px 24px',
      '&.customSize': {
        '&-default': {
          height: '2.5rem'
        },
        '&-auto': {
          minHeight: '2.5rem'
        }
      },
      '&.ghost': {
        border: 0,
        // borderStyle: 'dashed !important', // important needed to override disable state
        '&:hover': {
          border: 0
          // borderStyle: 'dashed !important' // important needed to override disable state
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
      padding: '14px 32px',
      '&.customSize': {
        '&-default': {
          height: '3rem'
        },
        '&-auto': {
          minHeight: '3rem'
        }
      },
      '&$text': {
        padding: '14px 10px'
      }
    },
    text: {
      minWidth: 'auto',
      padding: '10px 8px',
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
          backgroundColor: alpha(theme.palette.primary.main, 0.25),
          '&:hover': {
            backgroundColor: darken(
              alpha(theme.palette.primary.main, 0.25),
              0.1
            ),
            '@media (hover: none)': {
              backgroundColor: alpha(theme.palette.primary.main, 0.25)
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
              ),
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            },
            '&.ghost': {
              color: theme.palette.text.primary,
              borderColor: theme.palette.background.default
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
  MuiTableHead: {
    root: {
      backgroundColor: theme.palette.background.paper,
      '&.virtualized': {
        '& .virtualizedCheckbox': {
          opacity: 0,
          '&.checked': {
            opacity: 1
          },
          '&:hover': {
            opacity: 1
          }
        },
        '&:hover': {
          '& .virtualizedCheckbox': {
            opacity: 0.5
          }
        }
      }
    }
  },
  MuiTableRow: {
    root: {
      '&.disabled': {
        cursor: 'pointer',
        pointerEvents: 'none',
        opacity: 0.5
      },
      '&.virtualized': {
        '& .virtualizedCheckbox': {
          opacity: 0,
          '&.visible': {
            opacity: 0.5
          },
          '&.checked': {
            opacity: 1
          },
          '&:hover': {
            opacity: 1
          }
        },
        '&:hover': {
          '& .virtualizedCheckbox': {
            opacity: 0.5
          }
        }
      }
    }
  },
  MuiTableCell: {
    root: {
      padding: '8px 4px'
    },
    head: {
      ...theme.typography.subtitle2,
      color: theme.palette.text.secondary,
      lineHeight: 1.292
    },
    body: {
      color: theme.palette.text.secondary,
      height: '2rem'
    },
    paddingCheckbox: {
      width: 32,
      padding: 0
    },
    stickyHeader: {
      backgroundColor: theme.palette.background.paper
    }
  },
  MuiTableSortLabel: {
    root: {
      padding: '8px 0',
      color: theme.palette.text.secondary
    },
    icon: {
      fontSize: 14
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
      width: '100%',
      '&.small': {
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
        maxWidth: '544px'
      },
      '&.large': {
        maxWidth: '800px'
      },
      '&.full': {
        maxWidth: '100%'
      }
    },
    scrollPaper: {
      '&.alignTop': {
        alignItems: 'start'
      }
    },
    paperFullScreen: {
      '&.small': {
        maxWidth: '100%'
      },
      '&.medium': {
        maxWidth: '100%'
      },
      '&.large': {
        maxWidth: '100%'
      },
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
  MuiAvatarGroup: {
    root: {
      '& > div:last-child': {
        boxShadow: `inset 0px 0px 0px 1px ${theme.palette.border.main}`
      }
    },
    avatar: {
      border: `2px solid ${theme.palette.background.paper}`
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
        background: 'var(--silver)', // should be semantic but used legacy component color for now
        '& img': {
          filter: 'grayscale(1) brightness(2)',
          opacity: 0.5
        }
      },
      '&.displayInline': {
        display: 'inline-flex'
      },
      '&.border': {
        border: `2px solid ${theme.palette.background.paper}`
      },
      '&.innerBorder': {
        boxShadow: `inset 0px 0px 0px 1px ${theme.palette.border.main}`
      }
    },
    colorDefault: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary
    }
  },
  MuiCheckbox: {
    root: {
      padding: 8,
      '&.small': {
        padding: 6
      }
    },
    colorSecondary: {
      '&$checked': {
        color: theme.palette.error.main
      }
    }
  },
  MuiSwitch: {
    root: {
      width: 50,
      height: 40,
      padding: '6px 1px'
    },
    checked: {
      '& + $track$track': {
        opacity: 1
      }
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
      },
      '&$checked': {
        transform: 'translateX(15px)'
      }
    },
    thumb: {
      width: 20,
      height: 20,
      backgroundColor: theme.palette.common.white
    },
    track: {
      width: 44,
      height: '100%',
      borderRadius: 100,
      opacity: 1,
      backgroundColor: theme.palette.text.disabled
    },
    colorPrimary: {
      '&$disabled + $track': {
        opacity: 1,
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    colorSecondary: {
      '&$checked': {
        color: theme.palette.success.main,
        '&$disabled + $track': {
          opacity: 1,
          backgroundColor: theme.palette.action.disabledBackground
        },
        '& + $track': {
          backgroundColor: theme.palette.success.main
        }
      }
    },
    disabled: {
      '&$checked + $track': {
        backgroundColor: theme.palette.action.disabledBackground
      },
      '& .cozySwitchThumb': {
        backgroundColor: theme.palette.background.default
      },
      '& $thumb': {
        backgroundColor: theme.palette.common.white
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
  MuiTooltip: {
    tooltip: {
      backgroundColor: alpha(theme.palette.grey[800], 0.9),
      fontSize: '1rem',
      lineHeight: '1.3',
      borderRadius: '4px',
      padding: '8px 12px'
    }
  },
  MuiIconButton: {
    root: {
      color: theme.palette.text.secondary,
      '&.small': {
        padding: 8
      },
      '&.medium': {
        padding: 12
      },
      '&.large': {
        padding: 16
      },
      '&.xlarge': {
        padding: 20
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
      borderRadius: '100%',
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
    colorPrimary: {
      '&.colorSuccess': {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText
      },
      '&.colorWarning': {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.warning.contrastText
      },
      '&.colorInfo': {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText
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
          width: '100%',
          paddingLeft: 0,
          justifyContent: 'end'
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
      marginRight: '-8px'
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
      borderRadius: 28,
      width: 96,
      height: 96,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      '&:hover': {
        backgroundColor: darken(theme.palette.background.paper, 0.05)
      },
      '@media (hover: none)': {
        backgroundColor: theme.palette.background.paper
      }
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
      height: 56,
      minWidth: 56,
      padding: '0 20px',
      '&$sizeSmall': {
        borderRadius: 16,
        height: 42,
        minWidth: 42,
        padding: '0 12px'
      },
      '&$sizeMedium': {
        borderRadius: 16,
        height: 48,
        minWidth: 48,
        padding: '0 16px'
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
  MuiMobileStepper: {
    root: {
      background: 'transparent',
      height: 40,
      padding: 0
    },
    dot: {
      backgroundColor: 'transparent',
      width: '10px',
      height: '10px',
      margin: '0 3px',
      border: `1px solid ${theme.palette.border.main}`,
      boxSizing: 'border-box'
    },
    dotActive: {
      border: 'none'
    }
  }
})
