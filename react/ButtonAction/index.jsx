import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Icon from '../Icon'

const usableByIcon = icon => {
  const isSvgSymbol = icon && !!icon.id
  const isIconIdentifier = typeof icon === 'string'
  return isSvgSymbol || isIconIdentifier
}

const ButtonAction = props => {
  const { type, disabled, children, label, leftIcon, rightIcon, className, onClick, ...rest } = props
  return (
    <button
      disabled={disabled}
      type="button"
      role="button"
      className={cx(
        styles['c-actionbtn'], {
          [styles[`c-actionbtn--${type}`]] : type
        },
        className)}
      onClick={onClick}
    >
      <span>
        {usableByIcon(leftIcon) ? <Icon icon={leftIcon} /> : leftIcon}
        {label && <span className={styles['c-actionbtn-label']}>{label}</span>}
        {rightIcon &&
          <span data-icon="action" className={styles['c-actionbtn-icon']}>
            {usableByIcon(rightIcon) ? <Icon icon={rightIcon} /> : rightIcon}
          </span>
        }
        {children}
      </span>
    </button>
  )
}

ButtonAction.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  disabled: PropTypes.bool
}

ButtonAction.defaultProps = {
  type: 'normal',
  disabled: false
}

export default ButtonAction
