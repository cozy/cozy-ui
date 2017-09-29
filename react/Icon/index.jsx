import React from 'react'
import Types from 'prop-types'
import styles from './styles.styl'
import icons from '../../src/icons'

function Icon (props) {
  const { icon, width, height, color, className, preserveColor } = props
  let style = props.style
  let anchor
  if (icon.id) {
    anchor = `#${icon.id}`
  } else if (icon[0] === '#') {
    anchor = icon
  } else {
    anchor = icons[icon].id ? `#${icons[icon].id}` : icons[icon]
  }

  if (!anchor) {
    throw new Error(`Icon not found ${icon}.\nAvailable icons : ${Object.keys(icons)}`)
  }

  style = Object.assign({}, style)
  if (color) {
    style['fill'] = color
  }

  const iconClassName = preserveColor ? 'icon--preserveColor' : 'icon'
  const iconClass = className
    ? `${styles[iconClassName]} ${className}`
    : styles[iconClassName]

  return <svg
    className={iconClass}
    style={style}
    width={width || '1em'}
    height={height || '1em'}>
    <use xlinkHref={anchor} />
  </svg>
}


Icon.propTypes = {
  icon: Types.oneOfType([Types.string, Types.object]).isRequired,
  width: Types.oneOfType([Types.string, Types.number]),
  height: Types.oneOfType([Types.string, Types.number]),
  color: Types.oneOfType([Types.string, Types.object]),
  className: Types.string,
  preserveColor: Types.bool
}

export default Icon
