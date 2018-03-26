import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Checkbox = props => {
  const { className, value, name, label, error, mixed, ...restProps } = props
  return (
    <label
      className={cx(
        styles['c-input-checkbox'], {
          [styles['is-error']] : error,
        },
        className)
      }
      aria-checked={mixed ? 'mixed' : ''}
    >
      <input type="checkbox" value={value} name={name} {...restProps} />
      <span>{label}</span>
    </label>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
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
