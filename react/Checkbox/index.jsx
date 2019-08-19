import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import palette from '../palette'
import styles from './styles.styl'

const Checkbox = props => {
  const {
    className,
    value,
    name,
    label,
    error,
    mixed,
    disabled,
    children,
    ...restProps
  } = props
  return (
    <label
      className={cx(
        styles['c-input-checkbox'],
        styles['c-input-checkbox--svg'],
        {
          [styles['is-error']]: error
        },
        className
      )}
      aria-checked={mixed ? 'mixed' : ''}
      aria-disabled={disabled}
    >
      <input
        type="checkbox"
        value={value}
        name={name}
        disabled={disabled}
        {...restProps}
      />
      <span>
        <Icon
          icon={mixed ? 'dash' : 'check'}
          color={palette['primaryContrastTextColor']}
          className={styles['c-input-checkbox-icon']}
          aria-hidden
          focusable="false"
        />
        {label || children}
      </span>
    </label>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  mixed: PropTypes.bool,
  label: PropTypes.string
}

Checkbox.defaultProps = {
  className: '',
  value: '',
  name: '',
  error: false,
  mixed: false,
  label: ''
}

export default Checkbox
