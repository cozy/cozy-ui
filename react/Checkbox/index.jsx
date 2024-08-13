import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import MUICheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import createDepreciationLogger from '../helpers/createDepreciationLogger'

const logDepecratedCheckbox = createDepreciationLogger()

const DefaultCheckbox = ({ label, error, mixed, disabled, ...props }) => {
  return (
    <MUICheckbox
      inputProps={{
        'aria-label': label,
        'aria-checked': mixed ? 'mixed' : '',
        'aria-disabled': disabled
      }}
      color={error ? 'secondary' : 'primary'}
      indeterminate={mixed}
      disabled={disabled}
      {...props}
    />
  )
}

const Checkbox = ({ className, label, onChange, children, ...props }) => {
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
  label: PropTypes.string
}

Checkbox.defaultProps = {
  className: '',
  value: '',
  error: false,
  mixed: false,
  label: ''
}

export default Checkbox
