import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Icon from '../Icon'

const btnClass = function(options) {
  const { className, extension, size, theme, variant } = options
  return cx(
    styles['c-btn'],
    {
      [styles[`c-btn--${theme}`]]: theme,
      [styles[`c-btn--${size}`]]: size,
      [styles[`c-btn--${variant}`]]: variant,
      [styles[`c-btn--${extension}`]]: extension
    },
    className
  )
}

const actualProps = (propTypes, props) => {
  return Object.keys(props).reduce((filteredProps, key) => {
    return propTypes[key]
      ? { ...filteredProps, [key]: props[key] }
      : filteredProps
  }, {})
}

export const Button = props => {
  const { busy, children, disabled, label, icon, onClick, subtle, type } = props
  return (
    <button
      aria-busy={busy}
      disabled={disabled}
      type={type}
      role="button"
      className={btnClass({
        ...props,
        variant: subtle && 'subtle'
      })}
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

export const AsButton = props => {
  const { children } = props
  const Wrapped = React.Children.only(children)
  const buttonProps = props.isLink
    ? {
        ...ButtonLink.defaultProps,
        ...actualProps(ButtonLink.propTypes, props)
      }
    : { ...Button.defaultProps, ...actualProps(Button.propTypes, props) }
  return React.cloneElement(
    Wrapped,
    {
      ...buttonProps,
      ...Wrapped.props,
      className: btnClass({
        ...buttonProps,
        variant: buttonProps.subtle && 'subtle'
      })
    },
    Wrapped.children
  )
}

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
    onClick,
    subtle
  } = props
  return (
    <a
      aria-disabled={disabled}
      href={href}
      target={target}
      className={btnClass({
        className,
        extension,
        size,
        theme,
        variant: subtle && 'subtle'
      })}
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
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** Use the `subtle` alternative look for the Button  */
  subtle: PropTypes.bool
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
  type: 'submit',
  subtle: false
}

ButtonLink.defaultProps = {
  ...commonDefaultProps,
  disabled: false,
  target: '',
  href: ''
}

AsButton.propTypes = {
  ...ButtonLink.propTypes,
  isLink: PropTypes.bool
}
AsButton.defaultProps = Button.defaultProps
