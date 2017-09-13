import React from 'react'
import styles from './styles.styl'
import icons from '../../src/icons'


const Icon = function ({ icon, width, height, style, color, className }) {
  let anchor
  if (icon.id) {
    anchor = `#${icon.id}`
  } else if (icon[0] == '#') {
    anchor = icon
  } else {
    anchor = icons[icon]
  }

  if (!anchor) {
    throw new Error(`Icon not found ${icon}.\nAvailable icons : ${Object.keys(icons)}`)
  }

  style = Object.assign({}, style)
  if (color) {
    style['fill'] = color
  }

  return <svg
      className={ className ? `${styles['icon']} ${className}` : styles['icon'] }
      style={style}
      width={width || '1em'}
      height={height || '1em'}>
    <use xlinkHref={anchor} />
  </svg>
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired
}

export default Icon
