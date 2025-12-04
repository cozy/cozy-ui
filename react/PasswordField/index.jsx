import React, { useState } from 'react'
import { useI18n, withOnlyLocales } from 'twake-i18n'

import en from './locales/en.json'
import fr from './locales/fr.json'
import ru from './locales/ru.json'
import vi from './locales/vi.json'
import Icon from '../Icon'
import IconButton from '../IconButton'
import EyeIcon from '../Icons/Eye'
import EyeClosedIcon from '../Icons/EyeClosed'
import InputAdornment from '../InputAdornment'
import TextField from '../TextField'

export const locales = {
  en,
  fr,
  ru,
  vi
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
