import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Icon from '../Icon'

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
  const { theme, size, extension, busy, disabled, className, children, label, icon, onClick } = props
  return (
    <button
      aria-busy={busy}
      disabled={disabled}
      role="button"
      className={btnClass(theme, size, extension, className)}
      onClick={onClick}
    >
      <span>
        {typeof icon === 'string' ? <Icon icon={icon} /> : icon}
        {label && <span>{label}</span>}
        {children}
      </span>
    </button>
  )
}

export default Button

export const ButtonLink = props => {
  const { theme, size, extension, href, target, className, children, label, icon, onClick } = props
  return (
    <a
      href={href}
      target={target}
      className={btnClass(theme, size, extension, className)}
      onClick={onClick}
    >
      <span>
        {label && <span>label</span>}
        {typeof icon === 'string' ? <Icon icon={icon} /> : icon}
        {children}
      </span>
    </a>
  )
}

// Proptypes
const commonPropTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  icon: PropTypes.node,
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
  label: '',
  icon: '',
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
