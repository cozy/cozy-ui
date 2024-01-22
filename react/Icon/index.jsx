import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.styl'

const DEFAULT_SIZE = '16'

function makeSvgObject(icon) {
  let anchor

  if (icon.id) {
    anchor = `#${icon.id}`
  } else if (icon[0] === '#') {
    anchor = icon
  } else {
    anchor = '#' + icon
  }

  if (!anchor) {
    console.warn(`Icon not found ${icon}.`)
    return null
  }

  return props => (
    <svg {...props}>
      <use xlinkHref={anchor} />
    </svg>
  )
}

function isFunction(obj) {
  return obj instanceof Function
}

function Icon(props) {
  const {
    icon,
    width,
    height,
    color,
    style,
    className,
    preserveColor,
    rotate,
    size,
    spin,
    ...restProps
  } = props

  if (!icon) return null

  const isIconComp = icon.type === Icon

  if (isIconComp) return icon

  const Svg = isFunction(icon) ? icon : makeSvgObject(icon)

  let selfStyle = style
  selfStyle = Object.assign({}, selfStyle)

  if (color) {
    selfStyle['fill'] = color
  }

  if (rotate) {
    selfStyle['transform'] = `rotate(${rotate}deg)`
  }

  const iconClassName = preserveColor ? 'icon--preserveColor' : 'icon'
  const iconClass = cx(className, styles[iconClassName], {
    [styles['icon--spin']]: spin
  })

  return Svg ? (
    <Svg
      className={iconClass}
      style={selfStyle}
      width={width || size || DEFAULT_SIZE}
      height={height || size || DEFAULT_SIZE}
      {...restProps}
    />
  ) : null
}

Icon.isProperIcon = icon => {
  const isSvgSymbol = icon && !!icon.id
  const isIconIdentifier = typeof icon === 'string'
  const isSvgr = isFunction(icon)
  return isSvgSymbol || isIconIdentifier || isSvgr
}

export const iconPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
  PropTypes.func
])

Icon.propTypes = {
  icon: iconPropType,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  className: PropTypes.string,
  preserveColor: PropTypes.bool,
  /** Shorthand for both width and height */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rotate: PropTypes.number,
  spin: PropTypes.bool
}

Icon.defaultProps = {
  spin: false
}

export default Icon
