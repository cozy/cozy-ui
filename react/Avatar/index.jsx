import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import palette from '../palette'
import styles from './styles.styl'
import Icon from '../Icon'

const nameToColor = (name = '') => {
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
    palette['fushsia']
  ]
  const key =
    Array.from(name.toUpperCase())
      .map(letter => letter.charCodeAt(0))
      .reduce((sum, number) => sum + number, 0) % colors.length
  return colors[key]
}

export const Avatar = ({ text, textId, image, size, className, style }) => {
  const colored = {
    backgroundColor: `${nameToColor(textId || text)}`,
    color: 'white'
  }

  if (style) {
    Object.assign(colored, style)
  }

  return (
    <div
      className={cx(
        styles['c-avatar'],
        size !== 'medium' ? styles[`c-avatar--${size}`] : '',
        className
      )}
      style={text ? colored : style}
    >
      {image && <img src={image} className={styles['c-avatar-image']} alt="" />}
      {!image && text && (
        <span className={styles['c-avatar-initials']}>{text}</span>
      )}
      {!image && !text && <Icon icon="people" />}
    </div>
  )
}

export const avatarPropTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  className: PropTypes.string
}

Avatar.propTypes = avatarPropTypes

Avatar.defaultProps = {
  text: '',
  image: '',
  size: 'medium',
  className: ''
}

export default Avatar
