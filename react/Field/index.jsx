import React from 'react'
import cx from 'classnames'
import omit from 'lodash/omit'
import PropTypes from 'prop-types'

import labelStyles from '../Label/styles.styl'
import styles from './styles.styl'
import Label from '../Label'
import Input from '../Input'
import SelectBox from '../SelectBox'
import Textarea from '../Textarea'

/**
 * PropTypes to pass to Input but not to other components, like SelectBox
 * for example
 */
const inputSpecificPropTypes = {
  autoComplete: PropTypes.string,
  onKeyUp: PropTypes.func
}

class InputPassword extends React.Component {
  state = {
    visible: false
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const {
      hideLabel,
      showLabel,
      showVisibilityButton,
      fullwidth,
      secondaryComponent,
      ...restProps
    } = this.props
    const { visible } = this.state

    return (
      <div className={styles['o-field-input']}>
        {showVisibilityButton && !secondaryComponent && (
          <div
            className={cx(
              labelStyles['c-label'],
              styles['o-field-input-action'],
              { [styles['o-side-fullwidth']]: fullwidth }
            )}
            onClick={() => this.toggleVisibility()}
          >
            {visible ? hideLabel : showLabel}
          </div>
        )}
        {showVisibilityButton && secondaryComponent && (
          <div
            className={cx(styles['o-field-input-action'], {
              [styles['o-side-fullwidth']]: fullwidth
            })}
            onClick={() => this.toggleVisibility()}
          >
            {secondaryComponent({
              visible
            })}
          </div>
        )}
        <Input
          {...restProps}
          fullwidth={fullwidth}
          type={visible ? 'text' : 'password'}
        />
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
    onBlur,
    readOnly,
    secondaryLabels,
    secondaryComponent,
    side,
    size
  } = props

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
            disabled={disabled}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            error={error}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            readOnly={readOnly}
          />
        )
      case 'password':
        return (
          <InputPassword
            autoComplete={autoComplete}
            disabled={disabled}
            fullwidth={fullwidth}
            id={id}
            inputRef={inputRef}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            error={error}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            readOnly={readOnly}
            size={size}
            {...fieldProps}
            {...secondaryLabels}
            secondaryComponent={secondaryComponent}
          />
        )
      case 'date':
      case 'email':
      case 'url':
      case 'text':
      case 'number':
        return (
          <Input
            autoComplete={autoComplete}
            disabled={disabled}
            fullwidth={fullwidth}
            id={id}
            inputRef={inputRef}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            error={error}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            readOnly={readOnly}
            size={size}
            {...fieldProps}
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
    </div>
  )
}

Field.propTypes = {
  ...inputSpecificPropTypes,
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  fieldProps: PropTypes.object,
  fullwidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'date',
    'email',
    'password',
    'select',
    'textarea',
    'text',
    'url',
    'number'
  ]),
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
  value: '',
  placeholder: '',
  error: false,
  size: 'large',
  secondaryLabels: {}
}

export default Field
