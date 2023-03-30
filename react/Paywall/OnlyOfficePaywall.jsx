import React from 'react'
import ReactMarkdown from 'react-markdown'

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
import withLocales from '../I18n/withLocales'
import { makeType } from './helpers'
import fr from './locales/fr.json'
import en from './locales/en.json'

const locales = {
  en,
  fr
}

const OnlyOfficePaywall = ({ onClose, isPublic, t } = { isPublic: false }) => {
  const client = useClient()
  const instance = useInstance(client)

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
            {t(`onlyOfficePaywall.${type}.title`)}
          </Typography>
        </div>
      }
      actions={
        <Button
          onClick={onAction}
          label={
            isMobileAppVersion
              ? t(`mobileApp.action`)
              : t(`onlyOfficePaywall.${type}.action`)
          }
        />
      }
      content={
        type === 'default' ? (
          <ReactMarkdown
            source={t('onlyOfficePaywall.default.content', {
              mail: instance?.context?.data?.attributes?.reply_to
            })}
            renderers={{
              paragraph: props => (
                <span className="u-mv-0">{props.children}</span>
              )
            }}
          />
        ) : (
          t(`onlyOfficePaywall.${type}.content`)
        )
      }
      onClose={onClose}
    />
  )
}

export default withLocales(locales)(OnlyOfficePaywall)
