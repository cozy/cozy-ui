import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import merge from 'lodash/merge'
import MuiAlert from '@material-ui/lab/Alert'

import { makeStyles } from '../styles'
import Icon from '../Icon'
import CheckCircleIcon from '../Icons/CheckCircle'
import WarningIcon from '../Icons/Warning'
import WarningCircleIcon from '../Icons/WarningCircle'
import InfoIcon from '../Icons/Info'

const DEFAULT_ICON_SIZE = 16

const defaultIconMapping = {
  success: <Icon icon={CheckCircleIcon} />,
  warning: <Icon icon={WarningIcon} />,
  error: <Icon icon={WarningCircleIcon} />,
  info: <Icon icon={InfoIcon} />
}

const makeIcon = (icon, severity) => {
  // used to remove icon
  if (icon === false) {
    return false
  }

  return (
    icon ||
    (['primary', 'secondary'].includes(severity) && <Icon icon={InfoIcon} />) ||
    undefined
  )
}

const useStyles = makeStyles({
  message: {
    maxWidth: ({ block, iconSize }) =>
      block && `calc(100% - ${iconSize}px - 12px)`
  }
})

const Alert = forwardRef(
  (
    {
      className,
      classes,
      icon,
      severity,
      block,
      color,
      square,
      action,
      variant,
      style,
      children,
      ...props
    },
    ref
  ) => {
    // as primary and secondary doesn't exist on Mui Alert, we force success severity for those
    const madeSeverity = ['primary', 'secondary'].includes(severity)
      ? 'success'
      : severity
    const madeIcon = makeIcon(icon, severity)
    const iconSize = icon?.props?.size || DEFAULT_ICON_SIZE
    const styles = useStyles({ iconSize, block })

    /*
    When this component is the child of Snackbar, MUI injects a `style` prop
    (https://github.com/mui/material-ui/blob/bda562b435a70e3e8f6d7fb04581c6816a5ba0c7/packages/material-ui/src/Snackbar/Snackbar.js#L235
    =>
    https://github.com/mui/material-ui/blob/1e80616d3dde536227af56d49f91b28f830bd33c/packages/mui-material/src/Grow/Grow.js #L193), our styles are overwritten.
    */
    const computedStyles = {
      backgroundColor: color,
      borderRadius: square && 0,
      ...style
    }

    return (
      <MuiAlert
        ref={ref}
        style={computedStyles}
        className={cx(
          className,
          `cozyStyles-${severity}-${variant}`,
          { block },
          { action: Boolean(action) }
        )}
        classes={merge(styles, classes)}
        variant={variant}
        severity={madeSeverity}
        iconMapping={defaultIconMapping}
        icon={madeIcon}
        action={action}
        {...props}
      >
        {children}
      </MuiAlert>
    )
  }
)

Alert.displayName = 'Alert'

/**
 * @typedef {Object} AlertProps
 * @property {string} className - Classname of the alert
 * @property {React.FC<PropTypes.InferProps<typeof Icon.propTypes>>|false} icon - Icon component to display in the alert (or false to hide it)
 * @property {'primary'|'secondary'|'success'|'error'|'warning'|'info'} severity - Severity of the alert (default: primary)
 * @property {boolean} block - Block the alert to the full width of its container (default: false)
 * @property {string} color - Background color of the alert
 * @property {boolean} square - Square the alert corners (default: false)
 * @property {'standard'|'outlined'|'filled'} variant - Variant of the alert (default: standard)
 */

export const AlertPropTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  severity: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info'
  ]),
  block: PropTypes.bool,
  color: PropTypes.string,
  square: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
}

export const AlertDefaultProps = {
  severity: 'primary',
  block: false,
  square: false,
  variant: 'standard'
}

Alert.propTypes = AlertPropTypes

Alert.defaultProps = AlertDefaultProps

export default Alert
