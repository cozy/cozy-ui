import AvatarMui from '@material-ui/core/Avatar'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { colorMapping, supportedColors, nameToColor } from './helpers'
import { makeStyles } from '../styles'
import { capitalize } from '../utils/index'

const useStyles = makeStyles(theme => ({
  root: {
    width: ({ size }) => size,
    height: ({ size }) => size,
    fontSize: ({ size }) => size / 2
  },
  colorDefault: {
    color: ({ color, textColor }) =>
      textColor ? textColor : color ? theme.palette.primary.contrastText : '',
    background: ({ color }) =>
      supportedColors.includes(color) ? colorMapping[color] : color
  }
}))

const Avatar = ({
  className,
  color,
  size,
  border,
  innerBorder,
  disabled,
  display,
  textColor,
  ...props
}) => {
  const isCustomSize = typeof size === 'number'
  const defaultColor =
    typeof props.children === 'string' ? nameToColor(props.children) : undefined
  const classes = useStyles({
    size: isCustomSize ? size : undefined,
    color: color === 'none' ? undefined : color || defaultColor,
    textColor
  })

  return (
    <AvatarMui
      classes={classes}
      className={cx(className, {
        [`size-${size}`]: !isCustomSize,
        disabled: !!disabled,
        border: !!border,
        [`display${capitalize(display)}`]: display !== 'initial',
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
  textColor: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.oneOf([...supportedColors, 'none']),
    PropTypes.string
  ]),
  /** Controls the display type */
  display: PropTypes.oneOf(['initial', 'inline']),
  disabled: PropTypes.bool
}

Avatar.defaultProps = {
  display: 'initial',
  size: 'm'
}

export default Avatar
