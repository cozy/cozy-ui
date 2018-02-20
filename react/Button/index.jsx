import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const btnClass = function (theme, size, extension, className) {
  return cx(
    styles['c-btn'], {
      [styles[`c-btn--${theme}`]] : theme,
      [styles[`c-btn--${size}`]] : size,
      [styles[`c-btn--${extension}`]] : extension
    },
    className)
}

export const Button = props => {
  const { theme, size, extension, busy, disabled, className, children, onClick } = props
  return (
    <button
      aria-busy={busy}
      disabled={disabled}
      role="button"
      className={btnClass(theme, size, extension, className)}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button

export const ButtonLink = props => {
  const { theme, size, extension, href, target, className, children, onClick } = props
  return (
    <a
      href={href}
      target={target}
      className={btnClass(theme, size, extension, className)}
      onClick={onClick}
    >
      <span>{children}</span>
    </a>
  )
}

// Proptypes
const commonPropTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  size: PropTypes.oneOf(['tiny','small','large']),
  extension: PropTypes.oneOf(['narrow','full']),
  className: PropTypes.string,
  onClick: PropTypes.func
}

Button.propTypes = {
   ...commonPropTypes,
  busy: PropTypes.bool,
  disabled: PropTypes.bool
}

ButtonLink.propTypes = {
   ...commonPropTypes,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
}

// DefaultProps
const commonDefaultProps = {
  theme: '',
  size: '',
  extension: '',
  className: '',
  onClick: null
}

Button.defaultProps = {
  ...commonDefaultProps,
  busy: false,
  disabled: false
}

ButtonLink.defaultProps = {
  ...commonDefaultProps,
  target: '',
  href: ''
}

