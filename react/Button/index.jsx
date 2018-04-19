import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Icon from '../Icon'

const btnClass = function(theme, size, extension, className) {
  return cx(
    styles['c-btn'],
    {
      [styles[`c-btn--${theme}`]]: theme,
      [styles[`c-btn--${size}`]]: size,
      [styles[`c-btn--${extension}`]]: extension
    },
    className
  )
}

const btnTextClass = function(theme, size, extension, className) {
  return cx(
    styles['c-btn'],
    styles['c-btn'],
    {
      [styles[`c-btn-text--${theme}`]]: theme,
      [styles[`c-btn--${size}`]]: size,
      [styles[`c-btn--${extension}`]]: extension
    },
    className
  )
}

export const Button = props => {
  const {
    theme,
    size,
    extension,
    busy,
    disabled,
    className,
    children,
    label,
    icon,
    onClick,
    type
  } = props
  return (
    <button
      aria-busy={busy}
      disabled={disabled}
      type={type}
      role="button"
      className={btnClass(theme, size, extension, className)}
      onClick={onClick}
    >
      <span>
        {Icon.isProperIcon(icon) ? <Icon icon={icon} /> : icon}
        {label && <span>{label}</span>}
        {children}
      </span>
    </button>
  )
}

export default Button

export const ButtonLink = props => {
  const {
    disabled,
    theme,
    size,
    extension,
    href,
    target,
    className,
    children,
    label,
    icon,
    onClick
  } = props
  return (
    <a
      aria-disabled={disabled}
      href={href}
      target={target}
      className={btnClass(theme, size, extension, className)}
      onClick={disabled ? event => event.preventDefault() : onClick}
    >
      <span>
        {Icon.isProperIcon(icon) ? <Icon icon={icon} /> : icon}
        {label && <span>{label}</span>}
        {children}
      </span>
    </a>
  )
}

export const ButtonText = props => {
  const { className, extension, size, theme } = props
  return (
    <Button
      {...props}
      className={btnTextClass(theme, size, extension, className)}
    />
  )
}

// Proptypes (unfortunately, Styleguidist does not pick
// proptypes coming from a spread so we have to keep both
// proptypes in sync)
Button.propTypes = {
  /** DEPRECATED: please use label and icon */
  children: PropTypes.node,
  /** Label of the button */
  label: PropTypes.node,
  /** Icon of the button */
  icon: PropTypes.node,
  theme: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'large']),
  /** Spacing of the button */
  extension: PropTypes.oneOf(['narrow', 'full']),
  /** Extra class */
  className: PropTypes.string,
  /** What to do on click */
  onClick: PropTypes.func,

  // Only for Button
  /** Will display a spinner if true */
  busy: PropTypes.bool,
  /** Disables the button */
  disabled: PropTypes.bool,
  /** Type of the underlying `<button />` */
  type: PropTypes.oneOf(['reset', 'submit'])
}

ButtonLink.propTypes = {
  /** DEPRECATED: please use label and icon */
  children: PropTypes.node,
  /** Disables the button */
  disabled: PropTypes.bool,
  /** Label of the button */
  label: PropTypes.node,
  /** Icon identifier or `<Icon />` */
  icon: PropTypes.node,
  theme: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'large']),
  /** Spacing of the button */
  extension: PropTypes.oneOf(['narrow', 'full']),
  /** Extra class */
  className: PropTypes.string,
  /** What to do on click */
  onClick: PropTypes.func,

  // Only for ButtonLink
  /** Where to go. Will be passed directly to the underlying `a` */
  href: PropTypes.string.isRequired,
  /** Target of the link. Will be passed directly to the underlying `a` */
  target: PropTypes.string
}

ButtonText.propTypes = {
  /** DEPRECATED: please use label and icon */
  children: PropTypes.node,
  /** Label of the button */
  label: PropTypes.node,
  /** Icon of the button */
  icon: PropTypes.node,
  theme: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'large']),
  /** Spacing of the button */
  extension: PropTypes.oneOf(['narrow', 'full']),
  /** Extra class */
  className: PropTypes.string,
  /** What to do on click */
  onClick: PropTypes.func,

  // Only for Button
  /** Will display a spinner if true */
  busy: PropTypes.bool,
  /** Disables the button */
  disabled: PropTypes.bool,
  /** Type of the underlying `<button />` */
  type: PropTypes.oneOf(['reset', 'submit'])
}

// DefaultProps
const commonDefaultProps = {
  label: null,
  icon: null,
  theme: '',
  className: '',
  onClick: null
}

Button.defaultProps = {
  ...commonDefaultProps,
  busy: false,
  disabled: false,
  type: 'submit'
}

ButtonLink.defaultProps = {
  ...commonDefaultProps,
  disabled: false,
  target: '',
  href: ''
}
