import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import assign from 'lodash/assign'

import palette from '../palette'
import styles from './styles.styl'
import Icon, { iconPropType } from '../Icon'
import PeopleIcon from '../Icons/People'
import { createSizeStyle } from '../Circle'

export const nameToColor = (name = '') => {
  const colors = [
    palette['azure'],
    palette['melon'],
    palette['blazeOrange'],
    palette['pomegranate'],
    palette['mango'],
    palette['pumpkinOrange'],
    palette['darkPeriwinkle'],
    palette['purpley'],
    palette['lightishPurple'],
    palette['weirdGreen'],
    palette['puertoRico'],
    palette['emerald'],
    palette['seafoamGreen'],
    palette['lavender'],
    palette['brightSun'],
    palette['fuchsia']
  ]
  const key =
    Array.from(name.toUpperCase())
      .map(letter => letter.charCodeAt(0))
      .reduce((sum, number) => sum + number, 0) % colors.length
  return colors[key]
}

const createBgColorStyle = ({ text, textId }) =>
  text ? { backgroundColor: `${nameToColor(textId || text)}` } : {}

export const Avatar = ({
  text,
  textId,
  image,
  size,
  className,
  style,
  disabled,
  ghost,
  icon
}) => {
  const sizeStyle = createSizeStyle(size)
  const bgColorStyle = createBgColorStyle({ text, textId })
  const avatarStyle = assign(bgColorStyle, sizeStyle, style)
  const IconToRender = Icon.isProperIcon(icon) ? <Icon icon={icon} /> : icon
  return (
    <div
      className={cx(
        styles['c-avatar'],
        text ? styles['c-avatar--text'] : '',
        image ? styles['c-avatar--image'] : '',
        disabled ? styles['c-avatar--disabled'] : '',
        ghost ? styles['c-avatar--ghost'] : '',
        className
      )}
      style={avatarStyle}
    >
      {image && <img src={image} className={styles['c-avatar-image']} alt="" />}
      {!image && text && (
        <span className={styles['c-avatar-initials']}>{text}</span>
      )}
      {!image && !text && IconToRender}
    </div>
  )
}

Avatar.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
    PropTypes.number
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, iconPropType]),
  ghost: PropTypes.bool,
  style: PropTypes.object
}

Avatar.defaultProps = {
  text: '',
  image: '',
  size: 'medium',
  className: '',
  disabled: false,
  icon: PeopleIcon,
  ghost: false,
  style: {}
}

export default Avatar
