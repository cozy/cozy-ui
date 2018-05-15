import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

export const Badge = ({ children, content, type, ...props }) => {
  return (
    <span className={styles['c-badge-root']} {...props}>
      {children}
      <span
        className={classNames(styles['c-badge'], {
          [styles[`c-badge--${type}`]]: type
        })}
      >
        {content}
      </span>
    </span>
  )
}

Badge.propTypes = {
  /** The content of the badge */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The type of the badge */
  type: PropTypes.oneOf(['normal', 'new', 'error'])
}

Badge.defaultProps = {
  content: '',
  type: 'normal'
}

export default Badge
