import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Input = props => {
  const {
    type,
    id,
    className,
    value,
    placeholder,
    error,
    size,
    fullwidth,
    ...restProps
  } = props
  return (
    <input
      type={type}
      id={id}
      className={cx(
        styles['c-input-text'],
        {
          [styles[`is-error`]]: error,
          [styles[`c-input-text--${size}`]]: size,
          [styles[`c-input-text--fullwidth`]]: fullwidth
        },
        className
      )}
      placeholder={placeholder}
      value={value}
      {...restProps}
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'url']),
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'medium']),
  fullwidth: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  error: false,
  fullwidth: false
}

export default Input
