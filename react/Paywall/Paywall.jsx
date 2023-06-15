import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { isMobileApp, isFlagshipApp } from 'cozy-device-helper'
import { useClient } from 'cozy-client'
import { buildPremiumLink } from 'cozy-client/dist/models/instance'

import useInstance from '../helpers/useInstance'
import Spinner from '../Spinner'
import { IllustrationDialog } from '../CozyDialogs'
import Icon from '../Icon'
import CozyUpgradeIcon from '../Icons/CozyUpgrade'
import Button from '../Buttons'
import Typography from '../Typography'
import { makeType } from './helpers'
import { useI18n } from '../I18n'
import withPaywallLocales from './locales/withPaywallLocales'

/**
 * Component with the core logic of the paywall, which is then declined in several variants to adapt to the user case
 */
const Paywall = ({ variant, onClose, isPublic, contentInterpolation }) => {
  const client = useClient()
  const instance = useInstance(client)
  const { t } = useI18n()

  if (instance.state === 'loading' && instance.state !== 'loaded')
    return (
      <IllustrationDialog
        open
        size="small"
        content={
          <div className="u-h-5">
            <Spinner size="xxlarge" noMargin middle />
          </div>
        }
        onClose={onClose}
      />
    )

  const isMobileAppVersion = isMobileApp() || isFlagshipApp()
  const link = buildPremiumLink(instance)
  const type = makeType(instance, isPublic, link)

  const onAction = () => {
    return type === 'premium' && !isMobileAppVersion
      ? window.open(link, 'self')
      : onClose()
  }

  return (
    <IllustrationDialog
      open
      size="small"
      actionsLayout="column"
      title={
        <div className="u-flex u-flex-column u-flex-items-center">
          <Icon icon={CozyUpgradeIcon} width={128} height={128} />
          <Typography variant="h3" className="u-mt-1">
            {t(`${variant}Paywall.${type}.title`)}
          </Typography>
        </div>
      }
      actions={
        <Button
          onClick={onAction}
          label={
            isMobileAppVersion
              ? t(`mobileApp.action`)
              : t(`${variant}Paywall.${type}.action`)
          }
        />
      }
      content={
        <ReactMarkdown
          source={t(`${variant}Paywall.${type}.content`, {
            mail: instance?.context?.data?.attributes?.reply_to,
            ...contentInterpolation
          })}
          renderers={{
            paragraph: ({ children }) => <p className="u-mt-0">{children}</p>
          }}
        />
      }
      onClose={onClose}
    />
  )
}

Paywall.propTypes = {
  /** Type of paywall */
  variant: PropTypes.string.isRequired,
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired,
  /** Whether paywall is display in a public context */
  isPublic: PropTypes.bool,
  /** Translation interpolation for the content of the paywall */
  contentInterpolation: PropTypes.object
}

Paywall.defaultProps = {
  isPublic: false,
  contentInterpolation: {}
}

export default withPaywallLocales(Paywall)
