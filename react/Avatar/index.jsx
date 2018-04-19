import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import palette from '../../stylus/settings/palette.json'
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
    palette['emerald']
  ]
  const key =
    Array.from(name.toUpperCase())
      .map(letter => letter.charCodeAt(0))
      .reduce((sum, number) => sum + number, 0) % colors.length
  return colors[key]
}

export const Avatar = ({ text, image, size, className }) => {
  const colored = {
    backgroundColor: `${nameToColor(text)}`,
    color: 'white'
  }

  return (
    <div
      className={classNames(
        styles['c-avatar'],
        {
          [styles[`c-avatar--${size}`]]: size
        },
        className
      )}
      {...{ style: text ? colored : undefined }}
    >
      {image && <img src={image} className={styles['c-avatar-image']} alt="" />}
      {!image &&
        text && <span className={styles['c-avatar-initials']}>{text}</span>}
      {!image && !text && <Icon icon="people" />}
    </div>
  )
}

Avatar.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  className: PropTypes.string
}

Avatar.defaultProps = {
  text: '',
  image: '',
  size: 'medium',
  className: ''
}

export default Avatar
