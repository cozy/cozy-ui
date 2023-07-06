import React, { forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Input = forwardRef((props, ref) => {
  const {
    autoComplete,
    disabled,
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
      aria-disabled={disabled}
      autoComplete={autoComplete}
      type={type}
      id={id}
      ref={ref}
      className={cx(
        styles['c-input-text'],
        {
          [styles[`is-error`]]: error,
          [styles[`c-input-text--${size}`]]: size,
          [styles[`c-input-text--fullwidth`]]: fullwidth
        },
        className
      )}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      spellCheck={false}
      {...restProps}
    />
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'date',
    'email',
    'number',
    'password',
    'text',
    'url',
    'tel'
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'medium', 'large']),
  fullwidth: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  error: false,
  fullwidth: false,
  size: 'large'
}

export default Input
