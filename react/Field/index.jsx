import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { default as labelStyles } from '../Label/styles.styl'
import styles from './styles.styl'
import Label from '../Label'
import Input from '../Input'
import SelectBox from '../SelectBox'
import Textarea from '../Textarea'

class InputPassword extends React.Component {
  state = {
    visible: false
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { hideLabel, showLabel, showVisibilityButton } = this.props
    const { visible } = this.state
    return (
      <div className={styles['o-field-input']}>
        {showVisibilityButton && (
          <div
            className={cx(
              labelStyles['c-label'],
              styles['o-field-input-action']
            )}
            onClick={() => this.toggleVisibility()}
          >
            {visible ? hideLabel : showLabel}
          </div>
        )}
        <Input {...this.props} type={visible ? 'text' : 'password'} />
      </div>
    )
  }
}

InputPassword.propTypes = {
  ...Input.propTypes,
  hideLabel: PropTypes.string,
  showLabel: PropTypes.string,
  showVisibilityButton: PropTypes.bool
}

InputPassword.defaultProps = {
  ...Input.defaultProps,
  showVisibilityButton: true
}

const Field = props => {
  const {
    className,
    disabled,
    fieldProps,
    fullwidth,
    label,
    id,
    type,
    value,
    placeholder,
    error,
    onChange,
    readOnly,
    secondaryLabels,
    side,
    size
  } = props

  const inputType = type => {
    switch (type) {
      case 'select':
        // If value prop is falsy, the SelectBox never displays any selected option.
        // Only passing `undefined` make the SelectBox work properly.
        return <SelectBox {...props} value={props.value || undefined} />
      case 'textarea':
        return (
          <Textarea
            disabled={disabled}
            id={id}
            placeholder={placeholder}
            value={value}
            error={error}
            onChange={onChange}
            readOnly={readOnly}
          />
        )
      case 'password':
        return (
          <InputPassword
            disabled={disabled}
            fullwidth={fullwidth}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            error={error}
            onChange={onChange}
            readOnly={readOnly}
            size={size}
            {...fieldProps}
            {...secondaryLabels}
          />
        )
      case 'date':
      case 'email':
      case 'url':
      case 'text':
        return (
          <Input
            disabled={disabled}
            fullwidth={fullwidth}
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
          `type must be text, password, email, date, url or textarea, got ${type}`
        )
    }
  }

  return (
    <div className={cx(styles['o-field'], className)}>
      <Label htmlFor={id}>{label}</Label>
      {side && (
        <div className={cx(styles['o-side'], labelStyles['c-label'])}>
          {side}
        </div>
      )}
      {inputType(type)}
    </div>
  )
}

Field.PropTypes = {
  fieldProps: PropTypes.object,
  fullwidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'url', 'textarea']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  side: PropTypes.element,
  size: PropTypes.oneOf(['tiny', 'medium', 'large']),
  secondaryLabels: PropTypes.object
}

Field.defaultProps = {
  fieldProps: {},
  fullwidth: false,
  label: '',
  id: '',
  type: 'text',
  value: '',
  placeholder: '',
  error: false,
  size: 'large',
  secondaryLabels: {}
}

export default Field
