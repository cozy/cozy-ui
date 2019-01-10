import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import cx from 'classnames'

const DEFAULT_SIZE = '16'

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
  let style = props.style
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

  return (
    <svg
      className={iconClass}
      style={style}
      width={width || size || DEFAULT_SIZE}
      height={height || size || DEFAULT_SIZE}
      {...restProps}
    >
      <use xlinkHref={anchor} />
    </svg>
  )
}

Icon.isProperIcon = icon => {
  const isSvgSymbol = icon && !!icon.id
  const isIconIdentifier = typeof icon === 'string'
  return isSvgSymbol || isIconIdentifier
}

export const iconPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object
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
export { default as Sprite } from './Sprite'
