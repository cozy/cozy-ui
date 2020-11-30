import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { lighten } from '@material-ui/core/styles/colorManipulator'

const DangerButton = withStyles(theme => ({
  contained: {
    color: 'white',
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: lighten(theme.palette.error.main, 0.25)
    },
    '&:active': {
      backgroundColor: lighten(theme.palette.error.main, 0.5)
    }
  },
  outlined: {
    color: theme.palette.error.main,
    backgroundColor: 'transparent',
    borderColor: lighten(theme.palette.error.main, 0.75),
    '&:hover': {
      backgroundColor: lighten(theme.palette.error.main, 0.85)
    },
    '&:active': {
      backgroundColor: lighten(theme.palette.error.main, 0.95)
    }
  }
}))(Button)

DangerButton.defaultProps = {
  variant: 'contained'
}

const GhostButton = withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    background: lighten(theme.palette.primary.main, 0.95),
    border: `1px dashed ${lighten(theme.palette.primary.main, 0.65)}`,
    '&:hover': {
      backgroundColor: lighten(theme.palette.primary.main, 0.65)
    },
    '&:active': {
      backgroundColor: lighten(theme.palette.primary.main, 0.85),
      borderColor: lighten(theme.palette.primary.main, 0.85)
    }
  }
}))(Button)

export { DangerButton, GhostButton }

export default Button
