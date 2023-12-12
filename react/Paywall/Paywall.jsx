import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { isFlagshipApp } from 'cozy-device-helper'
import { useInstanceInfo } from 'cozy-client'
import { buildPremiumLink } from 'cozy-client/dist/models/instance'
import flag from 'cozy-flags'
import { useWebviewIntent } from 'cozy-intent'

import Spinner from '../Spinner'
import { IllustrationDialog } from '../CozyDialogs'
import Icon from '../Icon'
import CozyUpgradeIcon from '../Icons/CozyUpgrade'
import Button from '../Buttons'
import Typography from '../Typography'
import { makeType } from './helpers'
import { useI18n } from '../providers/I18n'
import withPaywallLocales from './locales/withPaywallLocales'

/**
 * Component with the core logic of the paywall, which is then declined in several variants to adapt to the user case
 */
const Paywall = ({ variant, onClose, isPublic, contentInterpolation }) => {
  const instanceInfo = useInstanceInfo()
  const { t } = useI18n()

  const webviewIntent = useWebviewIntent()
  const [isFlagshipAppIapAvailable, setFlagshipAppIapAvailable] = useState(null)

  useEffect(() => {
    const fetchIapAvailability = async () => {
      const isAvailable =
        (await webviewIntent?.call('isAvailable', 'iap')) ?? false
      setFlagshipAppIapAvailable(isAvailable)
    }

    fetchIapAvailability()
  }, [webviewIntent])

  if (!instanceInfo.isLoaded)
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

  const canOpenPremiumLink =
    !isFlagshipApp() ||
    (isFlagshipApp() &&
      !!flag('flagship.iap.enabled') &&
      isFlagshipAppIapAvailable)

  const link = buildPremiumLink(instanceInfo)
  const type = makeType(instanceInfo, isPublic, link)

  const onAction = () => {
    return type === 'premium' && canOpenPremiumLink
      ? window.open(link, '_self')
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
            isFlagshipAppIapAvailable === null
              ? t(`action.loading`)
              : canOpenPremiumLink
              ? t(`${variant}Paywall.${type}.action`)
              : t(`action.withoutIAP`)
          }
          busy={isFlagshipAppIapAvailable === null}
        />
      }
      content={
        <ReactMarkdown
          source={t(`${variant}Paywall.${type}.content`, {
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
