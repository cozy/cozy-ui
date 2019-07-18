import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.styl'

const Circle = ({ children, backgroundColor, size, className }) => {
  return (
    <div
      className={cx(
        styles['c-circle'],
        {
          [styles[`c-circle--${size}`]]: size
        },
        className
      )}
      style={{ backgroundColor }}
    >
      <span className={styles['c-circle-text']}>{children}</span>
    </div>
  )
}

Circle.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  className: PropTypes.string
}

Circle.defaultProps = {
  size: 'medium',
  className: ''
}

export default Circle
