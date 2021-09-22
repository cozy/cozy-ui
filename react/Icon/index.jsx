import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import cx from 'classnames'
const DEFAULT_SIZE = '16'

function getSvgObject(icon) {
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
    className,
    preserveColor,
    rotate,
    size,
    spin,
    ...restProps
  } = props

  const Svg = useMemo(() => (isFunction(icon) ? icon : getSvgObject(icon)), [
    icon
  ])

  let style = props.style
  style = Object.assign({}, style)
  if (color) {
    style['fill'] = color
  }
  if (rotate) {
    style['transform'] = `rotate(${rotate}deg)`
  }

  const iconClassName = preserveColor ? 'icon--preserveColor' : 'icon'
  const iconClass = cx(className, styles[iconClassName], {
    [styles['icon--spin']]: spin
  })

  return Svg ? (
    <Svg
      className={iconClass}
      style={style}
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
  icon: iconPropType.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  preserveColor: PropTypes.bool,
  /** Shorthand for both width and height */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spin: PropTypes.bool
}

Icon.defaultProps = {
  spin: false
}

export default Icon
