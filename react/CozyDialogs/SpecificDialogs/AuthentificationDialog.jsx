import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import PermissionDialog from '../PermissionDialog'
import Buttons from '../../Buttons'
import { useI18n } from '../../providers/I18n'
import Typography from '../../Typography'
import { useClient } from 'cozy-client'
import CozyAuthentificationIcon from '../../Icons/CozyAuthentification'
import PasswordField from '../../PasswordField'

import withSpecificDialogsLocales from './withSpecificDialogsLocales'

/**
 * Dialog used to authenticate a user in the cozy system.
 * The authentication logic is implemented in the applications.
 */
const AuthentificationDialog = ({
  onClose,
  onSubmit,
  isLoading,
  isOIDC,
  error,
  resetRedirection
}) => {
  const { t } = useI18n()
  const client = useClient()
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(password)
  }

  const onPasswordChange = e => {
    setPassword(e.currentTarget.value)
  }

  const passphraseResetUrl = useMemo(() => {
    const url = new URL('/auth/passphrase_reset', client.getStackClient().uri)
    if (resetRedirection) {
      url.searchParams.set('from', resetRedirection)
    }
    return url.href
  }, [client, resetRedirection])

  return (
    <PermissionDialog
      open
      onClose={onClose}
      title={t(`authentification-dialog.${isOIDC ? 'title-oidc' : 'title'}`)}
      icon={CozyAuthentificationIcon}
      content={
        <form onSubmit={handleSubmit}>
          <Typography variant="body1" className="u-ta-center">
            {t('authentification-dialog.subtitle')}
          </Typography>
          <PasswordField
            autoFocus
            disabled={isLoading}
            value={password}
            onChange={onPasswordChange}
            className="u-mv-1"
            label={t(
              `authentification-dialog.${isOIDC ? 'label-oidc' : 'label'}`
            )}
            error={Boolean(error)}
            helperText={error && t(`authentification-dialog.errors.${error}`)}
            fullWidth
            required
          />
          <Typography
            variant="body1"
            component="a"
            color="primary"
            href={passphraseResetUrl}
            className="u-link"
          >
            {t('authentification-dialog.forgotten-password')}
          </Typography>
        </form>
      }
      actions={
        <Buttons
          busy={isLoading}
          disabled={isLoading || password.length === 0}
          onClick={handleSubmit}
          label={t('authentification-dialog.unlock')}
          fullWidth
        />
      }
    />
  )
}

AuthentificationDialog.defaultProps = {
  isOIDC: false
}

AuthentificationDialog.propTypes = {
  /** A function call on clicking the close button */
  onClose: PropTypes.func,
  /** A function call on submitting the form with the password entered */
  onSubmit: PropTypes.func,
  /** Waiting status, e.g. processing of form submission */
  isLoading: PropTypes.bool,
  /** Show specific wording for OIDC */
  isOIDC: PropTypes.bool,
  /** Error key to display a message */
  error: PropTypes.string,
  /** Application slug where to redirect the user after a password reset */
  resetRedirection: PropTypes.string
}

export default withSpecificDialogsLocales(AuthentificationDialog)
