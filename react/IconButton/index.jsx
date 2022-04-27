import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import MuiIconButton from '@material-ui/core/IconButton'

const IconButton = ({ size = 'medium', className, children, ...props }) => {
  return (
    <MuiIconButton className={cx(className, size)} {...props}>
      {children}
    </MuiIconButton>
  )
}

IconButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default IconButton
