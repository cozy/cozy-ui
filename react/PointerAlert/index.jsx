import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { makeStyles } from '../styles'
import { makeAlertBackgroundColor } from '../MuiCozyTheme/helpers'
import { AlertPropTypes, AlertDefaultProps } from '../Alert'

import Alert from '../Alert'

const useStyles = makeStyles(theme => ({
  top: {
    // create the arrow
    borderLeft: '0.75rem solid transparent',
    borderRight: '0.75rem solid transparent',
    borderBottom: ({ variant, severity }) =>
      `0.75rem solid ${makeAlertBackgroundColor({ theme, severity })[variant]}`,
    // position the arrow
    position: 'absolute',
    top: '-0.75rem',
    left: ({ position }) => position,
    marginLeft: '-0.75rem'
  },
  bottom: {
    // create the arrow
    borderLeft: '0.75rem solid transparent',
    borderRight: '0.75rem solid transparent',
    borderTop: ({ variant, severity }) =>
      `0.75rem solid ${makeAlertBackgroundColor({ theme, severity })[variant]}`,
    // position the arrow
    position: 'absolute',
    bottom: '-0.75rem',
    left: ({ position }) => position,
    marginLeft: '-0.75rem'
  },
  left: {
    // create the arrow
    borderTop: '0.75rem solid transparent',
    borderBottom: '0.75rem solid transparent',
    borderRight: ({ variant, severity }) =>
      `0.75rem solid ${makeAlertBackgroundColor({ theme, severity })[variant]}`,
    // position the arrow
    position: 'absolute',
    left: '-0.75rem',
    top: ({ position }) => position,
    marginTop: '-0.75rem'
  },
  right: {
    // create the arrow
    borderTop: '0.75rem solid transparent',
    borderBottom: '0.75rem solid transparent',
    borderLeft: ({ variant, severity }) =>
      `0.75rem solid ${makeAlertBackgroundColor({ theme, severity })[variant]}`,
    // position the arrow
    position: 'absolute',
    right: '-0.75rem',
    top: ({ position }) => position,
    marginTop: '-0.75rem'
  }
}))

const PointerAlert = forwardRef(
  (
    { className, variant, severity, children, direction, position, ...props },
    ref
  ) => {
    const styles = useStyles({ variant, severity, position })

    return (
      <Alert
        ref={ref}
        className={cx(className, 'u-pos-relative')}
        variant={variant}
        severity={severity}
        {...props}
      >
        {children}
        <span className={styles[direction]}></span>
      </Alert>
    )
  }
)

PointerAlert.displayName = 'PointerAlert'

PointerAlert.propTypes = {
  ...AlertPropTypes,
  /** Direction of the arrow.*/
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Position of the arrow. Can be any length or percentage value like "100px" or "30%".
   * If you want to position the arrow on the edge, you need to pay attention to the arrow width.
   * For example, "calc(0% + 0.75rem)" will position the arrow at the starting edge. */
  position: PropTypes.string
}

PointerAlert.defaultProps = {
  ...AlertDefaultProps,
  direction: 'bottom',
  position: '50%'
}

export default PointerAlert
