import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import { useRadioGroup } from '@material-ui/core/RadioGroup'

import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logRadioDepecrated = createDepreciationLogger()

/**
 * @deprecated Please use [Radios](#/Radios)
 */
const Radio = props => {
  const {
    className,
    value,
    name: nameProp,
    label,
    error,
    disabled,
    style,
    gutter,
    onChange: onChangeProp,
    checked: checkedProp,
    ...restProps
  } = props
  logRadioDepecrated(
    'The Radio component is deprecated, please use `<Radios />` instead. You can replace `<Radio value="" label="" />` by `<FormControlLabel value="" label="" control={<Radios />} />`. See documentation for more details.'
  )
  const radioGroup = useRadioGroup()

  let checked = checkedProp
  let name = nameProp

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name
    }
  }

  const onChange =
    onChangeProp || (radioGroup && radioGroup.onChange) || (() => {})

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
        onChange={onChange}
        checked={checked}
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
