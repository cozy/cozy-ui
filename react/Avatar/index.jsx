import AvatarMui from '@material-ui/core/Avatar'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { colorMapping, supportedColors, nameToColor } from './helpers'
import { makeStyles } from '../styles'

const useStyles = makeStyles(theme => ({
  colorDefault: {
    color: ({ color }) => (color ? theme.palette.primary.contrastText : ''),
    background: ({ color }) => colorMapping[color]
  }
}))

const Avatar = ({
  className,
  color,
  size,
  border,
  innerBorder,
  disabled,
  ...props
}) => {
  const defaultColor =
    typeof props.children === 'string' ? nameToColor(props.children) : undefined
  const classes = useStyles({
    color:
      color === 'none'
        ? undefined
        : supportedColors.includes(color)
        ? color
        : defaultColor
  })

  return (
    <AvatarMui
      classes={classes}
      className={cx(className, `size-${size}`, {
        disabled: !!disabled,
        border: !!border,
        innerBorder: !!innerBorder
      })}
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
  color: PropTypes.oneOf([...supportedColors, 'none']),
  disabled: PropTypes.bool
}

Avatar.defaultProps = {
  size: 'm'
}

export default Avatar
