import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import Label from '../Label'
import Input from '../Input'
import Textarea from '../Textarea'

const Field = props => {
  const { className, label, id, type, value, placeholder, error, htmlFor, onChange, readOnly } = props

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
  error: PropTypes.bool
}

Field.defaultProps = {
  label: '',
  id: '',
  type: 'text',
  value: '',
  placeholder: '',
  error: false
}

export default Field
