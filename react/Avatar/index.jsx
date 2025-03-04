import AvatarMui from '@material-ui/core/Avatar'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { colorMapping } from './helpers'
import { makeStyles } from '../styles'

const useStyles = makeStyles(theme => ({
  colorDefault: {
    color: ({ color }) => (color ? theme.palette.primary.contrastText : ''),
    background: ({ color }) => colorMapping[color]
  }
}))

const Avatar = ({ className, color, size, disabled, ...props }) => {
  const classes = useStyles({ color })

  return (
    <AvatarMui
      classes={classes}
      className={cx(className, `size-${size}`, { disabled: !!disabled })}
      {...props}
    />
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
    PropTypes.number
  ]),
  color: PropTypes.string,
  disabled: PropTypes.bool
}

Avatar.defaultProps = {
  size: 'm'
}

export default Avatar
