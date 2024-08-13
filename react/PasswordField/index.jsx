import React, { useState } from 'react'

import TextField from '../TextField'
import IconButton from '../IconButton'
import Icon from '../Icon'
import InputAdornment from '../InputAdornment'
import EyeIcon from '../Icons/Eye'
import EyeClosedIcon from '../Icons/EyeClosed'
import { useI18n } from '../providers/I18n'
import withOnlyLocales from '../providers/I18n/withOnlyLocales'

import en from './locales/en.json'
import fr from './locales/fr.json'

export const locales = {
  en,
  fr
}

/**
 * Password field with the option of hiding or displaying it
 */
const PasswordField = props => {
  const { t } = useI18n()
  const [hidden, setHidden] = useState(true)

  return (
    <TextField
      variant="outlined"
      type={hidden ? 'password' : 'text'}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              label={
                hidden ? t('password-field.show') : t('password-field.hide')
              }
              disabled={props.disabled}
              onClick={() => setHidden(!hidden)}
              edge="end"
            >
              <Icon icon={hidden ? EyeIcon : EyeClosedIcon} />
            </IconButton>
          </InputAdornment>
        ),
        ...props.InputProps
      }}
    />
  )
}

export default withOnlyLocales(locales)(PasswordField)
