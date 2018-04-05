import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Input = props => {
  const { type, id, className, value, placeholder, error, size, ...restProps } = props
  return (
    <input
      type={type}
      id={id}
      className={cx(
        styles['c-input-text'], {
          [styles[`is-error`]] : error,
          [styles[`c-input-text--${size}`]] : size
        },
        className)}
      placeholder={placeholder}
      value={value}
      {...restProps}
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text','password','email','url']),
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny','medium'])
}

Input.defaultProps = {
  type: 'text',
  error: false
}

export default Input
