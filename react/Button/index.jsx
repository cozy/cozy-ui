import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles'

const btnClass = function (theme, className) {
  return cx(
    styles['c-btn'], {
      [styles[`c-btn--${theme}`]] : theme
    },
    className)
}

export const Button = props => {
  const { theme, busy, disabled, className, children, onClick } = props
  return (
    <button
      aria-busy={busy}
      disabled={disabled}
      role="button"
      className={btnClass(theme, className)}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  )
}

export const ButtonLink = props => {
  const { theme, href, target, className, children, onClick } = props
  return (
    <a
      href={href}
      target={target ? '_blank' : undefined}
      className={btnClass(theme, className)}
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
  className: PropTypes.string,
  onClick: PropTypes.func
}

Button.PropTypes = {
   ...commonPropTypes,
  busy: PropTypes.bool,
  disabled: PropTypes.bool
}

ButtonLink.PropTypes = {
   ...commonPropTypes,
  href: PropTypes.string.isRequired,
  target: PropTypes.bool,
}

// DefaultProps
const commonDefaultProps = {
  theme: '',
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
  target: false,
  href: ''
}

