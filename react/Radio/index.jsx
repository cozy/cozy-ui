import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Radio = props => {
  const {
    className,
    value,
    name,
    label,
    error,
    disabled,
    style,
    gutter,
    ...restProps
  } = props
  return (
    <label
      className={cx(
        styles['c-input-radio'],
        {
          [styles['c-input-radio--noGutter']]: gutter === false,
          [styles['is-error']]: error
        },
        className
      )}
      aria-disabled={disabled}
      style={style}
    >
      <input
        type="radio"
        value={value}
        name={name}
        disabled={disabled}
        {...restProps}
      />
      <span>{label}</span>
    </label>
  )
}

Radio.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string
}

Radio.defaultProps = {
  error: false,
  gutter: true
}

export default Radio
