import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'

const sizeNameToPx = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}

export const createSizeStyle = size => {
  const sizeConverter = sizeNameToPx
  const sizeToPixel = Number.isInteger(size) ? size : sizeConverter[size]
  return { '--circleSize': `${sizeToPixel}px` }
}

const Circle = ({ children, backgroundColor, size, className }) => {
  const sizeStyle = createSizeStyle(size)
  const bgColorStyle = { backgroundColor }
  const circleStyle = Object.assign(bgColorStyle, sizeStyle)

  return (
    <div className={cx(styles['c-circle'], className)} style={circleStyle}>
      <span className={styles['c-circle-text']}>{children}</span>
    </div>
  )
}

Circle.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
    PropTypes.number
  ]),
  className: PropTypes.string
}

Circle.defaultProps = {
  size: 'medium',
  className: ''
}

export default Circle
