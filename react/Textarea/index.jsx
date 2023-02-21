import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Textarea = React.forwardRef((props, ref) => {
  const {
    className,
    disabled,
    placeholder,
    children,
    error,
    size,
    fullwidth,
    ...restProps
  } = props
  return (
    <textarea
      ref={ref}
      aria-disabled={disabled}
      disabled={disabled}
      placeholder={placeholder}
      className={cx(
        styles['c-textarea'],
        {
          [styles[`is-error`]]: error,
          [styles[`c-textarea--${size}`]]: size,
          [styles[`c-textarea--fullwidth`]]: fullwidth
        },
        className
      )}
      {...restProps}
    >
      {children}
    </textarea>
  )
})

Textarea.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'medium']),
  fullwidth: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func
}

Textarea.defaultProps = {
  placeholder: '',
  error: false,
  fullwidth: false
}

export default Textarea
