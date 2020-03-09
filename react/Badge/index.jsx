import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

export const Badge = ({
  children,
  content,
  type,
  alignment = 'bottom-right',
  size = 'small',
  ...props
}) => {
  return (
    <span className={styles['c-badge-root']} {...props}>
      {children}
      <span
        className={cx(styles['c-badge'], {
          [styles[`c-badge--${alignment}`]]: alignment
        })}
      >
        <div
          className={cx(styles['c-badge--wrapper'], {
            [styles[`c-badge--size-${size}`]]: size,
            [styles[`c-badge--${type}`]]: type
          })}
        >
          {content}
        </div>
      </span>
    </span>
  )
}

Badge.propTypes = {
  /** The content of the badge */
  content: PropTypes.node,
  /** The type of the badge */
  type: PropTypes.oneOf(['normal', 'new', 'error']),
  alignment: PropTypes.oneOf(['bottom-right'])
}

Badge.defaultProps = {
  content: '',
  type: 'normal'
}

export default Badge
