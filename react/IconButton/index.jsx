import MuiIconButton from '@material-ui/core/IconButton'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

const muiSupportedColors = ['default', 'inherit', 'primary', 'secondary']

const IconButton = forwardRef(
  ({ size = 'large', className, children, color, ...props }, ref) => {
    const selfColor = muiSupportedColors.includes(color) ? color : 'default'

    return (
      <MuiIconButton
        ref={ref}
        className={cx(className, size, {
          'cozyStyles-error': color === 'error'
        })}
        color={selfColor}
        {...props}
      >
        {children}
      </MuiIconButton>
    )
  }
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'error'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
}

export default IconButton
