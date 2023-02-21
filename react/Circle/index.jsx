import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.styl'

export const createSizeStyle = size => {
  const sizeToPixel = Number.isInteger(size)
    ? size
    : { xsmall: 16, small: 32, medium: 40, large: 48, xlarge: 64 }[size]
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
