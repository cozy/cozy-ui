import React, { useState } from 'react'

import en from './locales/en.json'
import fr from './locales/fr.json'
import Icon from '../Icon'
import IconButton from '../IconButton'
import EyeIcon from '../Icons/Eye'
import EyeClosedIcon from '../Icons/EyeClosed'
import InputAdornment from '../InputAdornment'
import TextField from '../TextField'
import { useI18n } from '../providers/I18n'
import withOnlyLocales from '../providers/I18n/withOnlyLocales'

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
