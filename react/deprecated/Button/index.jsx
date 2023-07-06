import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Icon, { iconPropType } from '../../Icon'

import SpinnerIcon from '../../Icons/Spinner'

const btnClass = function(options) {
  const { className, extension, size, theme, variant, round, align } = options
  return cx(
    styles['c-btn'],
    {
      [styles[`c-btn--${theme}`]]: theme,
      [styles[`c-btn--${size}`]]: size !== 'normal',
      [styles[`c-btn--${variant}`]]: variant,
      [styles[`c-btn--${extension}`]]: extension,
      [styles[`c-btn--${align}`]]: align,
      [styles[`c-btn--round`]]: round
    },
    className
  )
}

const transformToAria = tag => props => {
  const { busy, disabled, ...newProps } = props

  if (busy) {
    newProps['aria-busy'] = true
  }
  if (disabled) {
    newProps['aria-disabled'] = true
  }
  if (tag === 'button' && disabled) {
    newProps['disabled'] = true
  }

  return newProps
}

const tagToTransformProps = {
  button: transformToAria('button'),
  a: transformToAria('a')
}

const identity = x => x

const sizeToIconSize = {
  tiny: 8,
  small: 12,
  large: 18
}

const BaseButton = props => {
  const {
    children,
    icon,
    iconOnly,
    label,
    subtle,
    className,
    extension,
    round,
    size,
    theme,
    align,
    extraRight,
    tag: Tag,
    ...restProps
  } = props
  const transformProps = tagToTransformProps[Tag] || identity
  const tooltip = iconOnly ? label : null
  const iconOnlyClass = iconOnly ? 'u-visuallyhidden' : null

  return (
    <Tag
      {...transformProps(restProps)}
      className={btnClass({
        extension,
        align,
        round,
        size,
        theme,
        className,
        variant: subtle && 'subtle'
      })}
      title={tooltip}
    >
      <span>
        {Icon.isProperIcon(icon) ? (
          <Icon
            size={sizeToIconSize[size]}
            icon={icon}
            aria-hidden
            focusable="false"
          />
        ) : (
          icon
        )}
        {label && <span className={iconOnlyClass}>{label}</span>}
        {children}
        {extraRight && <span className="u-ml-auto">{extraRight}</span>}
        {restProps.busy && (
          <Icon
            size={sizeToIconSize[size]}
            icon={SpinnerIcon}
            spin
            className="u-ml-half"
            aria-hidden
            focusable="false"
          />
        )}
      </span>
    </Tag>
  )
}

const Button = props => <BaseButton {...props} />
const ButtonLink = props => <BaseButton {...props} />

export { Button, ButtonLink }

const DefaultButton = props => {
  if (!props.tag) {
    return <Button {...props} />
  } else {
    return <BaseButton {...props} />
  }
}

export default DefaultButton

// Proptypes (unfortunately, Styleguidist does not pick
// proptypes coming from a spread so we have to keep both
// proptypes in sync)
Button.propTypes = {
  /** DEPRECATED: please use label and icon */
  children: PropTypes.node,
  /** Label of the button */
  label: PropTypes.node.isRequired,
  /** Icon of the button */
  icon: PropTypes.oneOfType([PropTypes.node, iconPropType]),
  /** Displays only the icon, not the label */
  iconOnly: PropTypes.bool,
  theme: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'large', 'normal']),
  /** Spacing of the button */
  extension: PropTypes.oneOf(['narrow', 'full']),
  /** Button's label alignment */
  align: PropTypes.oneOf(['left', 'right', 'center']),
  /** Will make the button round */
  round: PropTypes.bool,
  /** Extra class */
  className: PropTypes.string,
  /** What to do on click */
  onClick: PropTypes.func,
  /** Adds an element to the right of the button */
  extraRight: PropTypes.PropTypes.node,

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

Button.defaultProps = {
  type: 'submit',
  tag: 'button',
  size: 'normal',
  align: 'center'
}

ButtonLink.defaultProps = {
  tag: 'a'
}
