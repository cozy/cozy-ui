import AvatarMui from '@material-ui/core/Avatar'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Icon, { iconPropType } from '../Icon'
import { makeStyles, lighten } from '../styles'

// 10 16 20 28 36
// 8 11 16 24 32

const iconSizeBySize = {
  xs: 10,
  s: 16,
  m: 20,
  l: 28,
  xl: 36
}

export const sizeToFontSize = {
  xs: 8,
  s: 11,
  m: 16,
  l: 24,
  xl: 32
}

export const sizeToNb = {
  xs: 16,
  s: 24,
  m: 32,
  l: 48,
  xl: 64
}

// const colorMapping = {
//   sunrise: ['#F2AC69', '#F8D280'] 'linear-gradient(136deg, #F8D280 14.84%, #F2AC69 96.03%)'
// }

// light color could be generated with "h-16 s-18 b+3" from hsb dark color

export const supportedColors = [
  'sunrise',
  'downy',
  'sugarCoral',
  'pinkBonnet',
  'blueMana',
  'nightBlue',
  'snowPea',
  'pluviophile',
  'cornflower',
  'paleGreen',
  'moonBlue'
]

const colorMapping = {
  sunrise: 'linear-gradient(136deg, #F8D280 14.84%, #F2AC69 96.03%)',
  downy: 'linear-gradient(136deg, #81EAD4 14.84%, #62C6B7 96.03%)',
  sugarCoral: 'linear-gradient(136deg, #F19E86 14.84%, #F95967 96.03%)',
  pinkBonnet: 'linear-gradient(136deg, #E4ABF0 14.84%, #D96EED 96.03%)',
  blueMana: 'linear-gradient(136deg, #85D9FD 14.84%, #2A9EFC 96.03%)',
  nightBlue: 'linear-gradient(136deg, #80AEFF 39.32%, #883DFE 96.03%)',
  snowPea: 'linear-gradient(136deg, #BDF4A1 14.84%, #52CE64 96.03%)',
  pluviophile: 'linear-gradient(136deg, #A1D6F4 14.84%, #52CEC2 96.03%)',
  cornflower: 'linear-gradient(135deg, #86D9D3 0%, #1CCFB4 100%)',
  paleGreen: 'linear-gradient(135deg, #E2FA17 0%, #75D8CB 100%)',
  moonBlue: 'linear-gradient(136deg, #6DCFFF 14.84%, #3D88F8 96.03%)',
  undefined: ''
}

const useStyles = makeStyles(theme => ({
  colorDefault: {
    color: ({ color }) => (color ? theme.palette.primary.contrastText : ''),
    background: ({ color }) => colorMapping[color]
  }
}))

const AvatarTwake = ({
  icon,
  text,
  image,
  color,
  size,
  className,
  disabled,
  ...props
}) => {
  const classes = useStyles({ color })

  return (
    <AvatarMui
      classes={classes}
      className={cx(className, `size-${size}`, { disabled })}
      {...props}
    />
  )
}

AvatarTwake.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
    PropTypes.number
  ]),
  text: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, iconPropType])
}

AvatarTwake.defaultProps = {
  size: 'm'
}

export default AvatarTwake
