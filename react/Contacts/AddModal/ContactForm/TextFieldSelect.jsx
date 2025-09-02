import React from 'react'

import { locales } from './locales'
import MenuItem from '../../../MenuItem'
import TextField from '../../../TextField'
import { useI18n, useExtendI18n } from '../../../providers/I18n'
import { FieldInputWrapperPropTypes } from '../types'

const TextFieldSelect = ({ options, ...props }) => {
  useExtendI18n(locales)
  const { t } = useI18n()

  const _options = [
    ...options.map(option => ({
      ...option,
      label: option.translated ? option.label : t(option.label)
    }))
  ]

  return (
    <TextField {...props}>
      {_options.map((option, index) => {
        return (
          <MenuItem
            key={`${props.name}-${index}`}
            value={option.value}
            onClick={option.onClick}
          >
            {option.label}
          </MenuItem>
        )
      })}
    </TextField>
  )
}

TextFieldSelect.prototype = FieldInputWrapperPropTypes

export default TextFieldSelect
