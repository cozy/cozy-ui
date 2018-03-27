import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Textarea = props => {
  const { className, placeholder, children, error, size, ...restProps } = props
  return (
    <textarea
      placeholder={placeholder}
      className={cx(
        styles['c-textarea'], {
          [styles[`is-error`]] : error,
          [styles[`c-textarea--${size}`]] : size
        },
        className)}
      {...restProps}
    >
      {children}
    </textarea>
  )
}

Textarea.propTypes = {
  children: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny','medium'])
}

Textarea.defaultProps = {
  placeholder: '',
  className: '',
  error: false
}

export default Textarea
