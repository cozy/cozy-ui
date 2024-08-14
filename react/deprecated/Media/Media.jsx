import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'

/**
 * Useful to align image/icon and content.
 */
export const Media = ({ children, className, align, ...rest }) => {
  return (
    <div
      className={cx(
        styles.media,
        { [styles['media--' + align]]: align && align !== 'middle' },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

Media.propTypes = {
  align: PropTypes.oneOf(['top', 'middle', 'bottom'])
}

export const Img = ({ children, className, style, ...rest }) => {
  return (
    <div className={cx(styles.img, className)} style={style} {...rest}>
      {children}
    </div>
  )
}

export const Bd = ({ children, className, style, ...rest }) => {
  return (
    <div className={cx(styles.bd, className)} style={style} {...rest}>
      {children}
    </div>
  )
}
