import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Label from '../Label'
import Input from '../Input'
import Textarea from '../Textarea'

const Field = props => {
  const {
    className,
    label,
    id,
    type,
    value,
    placeholder,
    error,
    onChange,
    readOnly,
    size
  } = props

  const inputType = type => {
    switch (type) {
      case 'textarea':
        return (
          <Textarea
            id={id}
            placeholder={placeholder}
            value={value}
            error={error}
            onChange={onChange}
            readOnly={readOnly}
          />
        )
      case 'text':
      case 'password':
      case 'email':
      case 'url':
        return (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            error={error}
            onChange={onChange}
            readOnly={readOnly}
            size={size}
          />
        )
      default:
        throw new Error(
          'type must be text, password, email, url or textarea, got ' + type
        )
    }
  }

  return (
    <div className={cx(styles['o-field'], className)}>
      <Label htmlFor={id}>{label}</Label>
      {inputType(type)}
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'url', 'textarea']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'medium', 'large'])
}

Field.defaultProps = {
  label: '',
  id: '',
  type: 'text',
  value: '',
  placeholder: '',
  error: false,
  size: 'large'
}

export default Field
