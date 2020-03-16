import { withStyles } from '@material-ui/core/styles'
import { Tooltip } from '@material-ui/core'

// We use css-in-js because using external css may create
// conflicts of priorities between MUI and cozy-UI.
// MUI always loads its styes at the end of <head>, making them
// override any previous selector with the same specificity.
// It also allows the code using this component to overrides
// only some rules and not the whole classname.
const styles = {
  tooltip: {
    backgroundColor: 'var(--paleGrey)',
    borderRadius: '8px',
    fontSize: '1rem',
    color: 'var(--black)',
    lineHeight: '1.3',
    boxShadow:
      '0 1px 3px 0 rgba(50, 54, 63, 0.19), 0 6px 18px 0 rgba(50, 54, 63, 0.19)'
  }
}

const StyledTooltip = withStyles(styles, { name: 'MuiTooltip' })(Tooltip)

export default StyledTooltip
