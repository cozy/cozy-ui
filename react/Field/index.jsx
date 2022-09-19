import React, { useState } from 'react'
import cx from 'classnames'
import omit from 'lodash/omit'
import PropTypes from 'prop-types'

import labelStyles from '../Label/styles.styl'
import styles from './styles.styl'
import Label from '../Label'
import Input from '../Input'
import SelectBox from '../SelectBox'
import Textarea from '../Textarea'
import ContactPicker from '../ContactPicker'

/**
 * PropTypes to pass to Input but not to other components, like SelectBox
 * for example
 */
const inputSpecificPropTypes = {
  autoCapitalize: PropTypes.string,
  autoComplete: PropTypes.string,
  onKeyUp: PropTypes.func
}

const InputPassword = ({
  hideLabel,
  showLabel,
  fullwidth,
  secondaryComponent,
  inputRef,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(visible => !visible)
  }

  return (
    <div className={styles['o-field-input']}>
      {!secondaryComponent && (
        <div
          className={cx(
            labelStyles['c-label'],
            styles['o-field-input-action'],
            { [styles['o-side-fullwidth']]: fullwidth }
          )}
          onClick={toggleVisibility}
        >
          {visible ? hideLabel : showLabel}
        </div>
      )}
      {secondaryComponent && (
        <div
          className={cx(styles['o-field-input-action'], {
            [styles['o-side-fullwidth']]: fullwidth
          })}
          onClick={toggleVisibility}
        >
          {secondaryComponent({ visible })}
        </div>
      )}
      <Input
        {...restProps}
        ref={inputRef}
        fullwidth={fullwidth}
        type={visible ? 'text' : 'password'}
      />
    </div>
  )
}

InputPassword.propTypes = {
  ...Input.propTypes,
  hideLabel: PropTypes.string,
  showLabel: PropTypes.string
}

InputPassword.defaultProps = {
  ...Input.defaultProps
}

const FieldContainer = props => {
  const { className, variant, ...rest } = props

  return (
    <div
      className={cx(
        styles['o-field'],
        { [styles['o-field--inline']]: variant === 'inline' },
        className
      )}
      {...rest}
    />
  )
}

const Field = props => {
  const {
    autoCapitalize,
    autoComplete,
    className,
    disabled,
    fieldProps,
    labelProps,
    fullwidth,
    label,
    id,
    inputRef,
    name,
    type,
    value,
    placeholder,
    error,
    onChange,
    onKeyUp,
    onFocus,
    onBlur,
    readOnly,
    secondaryLabels,
    secondaryComponent,
    side,
    size,
    variant
  } = props
  const controlledProps = {
    ...(value !== undefined ? { value } : {}),
    ...(onChange ? { onChange } : {})
  }
  const inputType = type => {
    switch (type) {
      case 'select':
        return (
          <SelectBox
            {...omit(props, ...Object.keys(inputSpecificPropTypes))}
            // If value prop is falsy, the SelectBox never displays any selected
            // option. Only passing `undefined` make the SelectBox work
            // properly.
            value={props.value || undefined}
          />
        )
      case 'textarea':
        return (
          <Textarea
            autoCapitalize={autoCapitalize}
            disabled={disabled}
            id={id}
            name={name}
            placeholder={placeholder}
            error={error}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
            onBlur={onBlur}
            readOnly={readOnly}
            {...controlledProps}
          />
        )
      case 'password':
        return (
          <InputPassword
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            disabled={disabled}
            fullwidth={fullwidth}
            id={id}
            inputRef={inputRef}
            name={name}
            type={type}
            placeholder={placeholder}
            error={error}
            {...controlledProps}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
            onBlur={onBlur}
            readOnly={readOnly}
            size={size}
            {...fieldProps}
            {...secondaryLabels}
            secondaryComponent={secondaryComponent}
          />
        )

      case 'contact':
        return (
          <ContactPicker
            placeholder={placeholder}
            onChange={onChange}
            selectedContact={value}
          />
        )

      case 'date':
      case 'email':
      case 'url':
      case 'text':
      case 'number':
        return (
          <Input
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            disabled={disabled}
            fullwidth={fullwidth}
            id={id}
            ref={inputRef}
            name={name}
            type={type}
            placeholder={placeholder}
            error={error}
            {...controlledProps}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
            onBlur={onBlur}
            readOnly={readOnly}
            size={size}
            {...fieldProps}
          />
        )
      default:
        throw new Error(
          `${type} is not a valid type. Type must be ${allowedTypes.join(', ')}`
        )
    }
  }

  return (
    <FieldContainer className={className} variant={variant}>
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
      {side && (
        <div
          className={cx(styles['o-side'], labelStyles['c-label'], {
            [styles['o-side-fullwidth']]: fullwidth
          })}
        >
          {side}
        </div>
      )}
      {inputType(type)}
    </FieldContainer>
  )
}

const allowedTypes = [
  'date',
  'email',
  'password',
  'select',
  'textarea',
  'text',
  'url',
  'number',
  'contact'
]

Field.propTypes = {
  ...inputSpecificPropTypes,
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  fieldProps: PropTypes.object,
  fullwidth: PropTypes.bool,
  label: PropTypes.node.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(allowedTypes),
  // value should be an object for type=select and string for others
  value: function(props, propName, componentName) {
    // not a required props
    if (typeof props[propName] === 'undefined') return
    if (props.type === 'select' && typeof props[propName] !== 'object') {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Expected an object for a Field value with type=select.'
      )
    } else if (props.type !== 'select' && typeof props[propName] !== 'string') {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Expected value to be a string.'
      )
    }
  },
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  side: PropTypes.node,
  size: PropTypes.oneOf(['tiny', 'medium', 'large']),
  secondaryLabels: PropTypes.object,
  secondaryComponent: PropTypes.func
}

Field.defaultProps = {
  fieldProps: {},
  labelProps: {},
  fullwidth: false,
  label: '',
  id: '',
  type: 'text',
  value: undefined,
  placeholder: '',
  error: false,
  size: 'large',
  secondaryLabels: {}
}

export default Field
export { FieldContainer }
