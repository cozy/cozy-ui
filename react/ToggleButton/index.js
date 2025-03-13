import MuiToggleButton from '@material-ui/lab/ToggleButton'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

const ToggleButton = forwardRef(
  ({ className, rounded, color, ...props }, ref) => {
    return (
      <MuiToggleButton
        ref={ref}
        className={cx(className, { rounded }, `customColor-${color}`)}
        {...props}
      />
    )
  }
)

ToggleButton.displayName = 'ToggleButton'

ToggleButton.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  color: PropTypes.string
}

export default ToggleButton
