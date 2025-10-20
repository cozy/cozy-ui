import MUICheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../Icon'
import CheckSquareIcon from '../Icons/CheckSquare'
import createDepreciationLogger from '../helpers/createDepreciationLogger'

const logDepecratedCheckbox = createDepreciationLogger()

const DefaultCheckbox = ({
  className,
  label,
  error,
  mixed,
  disabled,
  size,
  disableEffect,
  ...props
}) => {
  return (
    <MUICheckbox
      className={cx(className, {
        ['u-p-0']: disableEffect,
        small: size === 'small'
      })}
      inputProps={{
        'aria-label': label,
        'aria-checked': mixed ? 'mixed' : '',
        'aria-disabled': disabled
      }}
      color={error ? 'secondary' : 'primary'}
      indeterminate={mixed}
      disabled={disabled}
      size={size}
      disableRipple={disableEffect}
      checkedIcon={
        <div
          className="u-flex u-flex-items-center u-flex-justify-center"
          style={{
            width: size === 'small' ? 20 : 24,
            height: size === 'small' ? 20 : 24
          }}
        >
          <Icon icon={CheckSquareIcon} size={size === 'small' ? 16 : 18} />
        </div>
      }
      {...props}
    />
  )
}

const Checkbox = ({
  className,
  label,
  labelPlacement,
  onChange,
  children,
  ...props
}) => {
  if (children) {
    logDepecratedCheckbox(
      '<Checkbox> used with children is deprecated, please use <Checkbox label={something} /> instead of <Checkbox>something</Checkbox>'
    )
  }

  if (label || children) {
    return (
      <FormControlLabel
        className={cx(
          {
            'FormControlLabel-error': props.error
          },
          className
        )}
        label={label || children}
        labelPlacement={labelPlacement}
        control={<DefaultCheckbox {...props} label={label} />}
        onChange={onChange}
      />
    )
  }

  return (
    <DefaultCheckbox
      className={className}
      onChange={onChange}
      label={label}
      {...props}
    />
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  mixed: PropTypes.bool,
  disableEffect: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  labelPlacement: PropTypes.oneOf(['top', 'end', 'bottom', 'start']),
  label: PropTypes.string
}

Checkbox.defaultProps = {
  className: '',
  value: '',
  error: false,
  mixed: false,
  disableEffect: false,
  size: 'medium',
  labelPlacement: 'end',
  label: ''
}

export default Checkbox
