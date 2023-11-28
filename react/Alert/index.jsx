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

    return (
      <MuiAlert
        ref={ref}
        style={{ backgroundColor: color, borderRadius: square && 0 }}
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

Alert.propTypes = {
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

Alert.defaultProps = {
  severity: 'primary',
  block: false,
  square: false,
  variant: 'standard'
}

export default Alert
