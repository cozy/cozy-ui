import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import MuiIconButton from '@mui/material/IconButton'

const IconButton = forwardRef(
  ({ size = 'large', className, children, ...props }, ref) => {
    return (
      <MuiIconButton ref={ref} className={cx(className, size)} {...props}>
        {children}
      </MuiIconButton>
    )
  }
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default IconButton
