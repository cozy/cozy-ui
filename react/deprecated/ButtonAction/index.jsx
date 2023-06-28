import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Icon from '../../Icon'

const ButtonAction = props => {
  const {
    type,
    disabled,
    children,
    label,
    leftIcon,
    rightIcon,
    compact,
    className,
    onClick,
    ...restProps
  } = props
  console.warn(
    'ButtonAction is deprecated, please use either a Chip or a Button'
  )
  return (
    <button
      disabled={disabled}
      type="button"
      role="button"
      className={cx(
        styles['c-actionbtn'],
        {
          [styles[`c-actionbtn--${type}`]]: type,
          [styles[`c-actionbtn--compact`]]: compact
        },
        className
      )}
      onClick={onClick}
      title={compact ? label : undefined}
      {...restProps}
    >
      <span>
        {Icon.isProperIcon(leftIcon) ? <Icon icon={leftIcon} /> : leftIcon}
        {label && (
          <span data-action="label" className={styles['c-actionbtn-label']}>
            {label}
          </span>
        )}
        {rightIcon && (
          <span data-action="icon" className={styles['c-actionbtn-icon']}>
            {Icon.isProperIcon(rightIcon) ? (
              <Icon icon={rightIcon} />
            ) : (
              rightIcon
            )}
          </span>
        )}
        {children}
      </span>
    </button>
  )
}

ButtonAction.propTypes = {
  type: PropTypes.oneOf(['new', 'normal', 'error']).isRequired,
  label: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  disabled: PropTypes.bool,
  compact: PropTypes.bool
}

ButtonAction.defaultProps = {
  type: 'normal',
  disabled: false,
  compact: false
}

export default ButtonAction
