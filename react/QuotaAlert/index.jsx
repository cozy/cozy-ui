import React from 'react'
import get from 'lodash/get'
import Modal from '../Modal'
import { withClient } from 'cozy-client'
import { isMobileApp } from 'cozy-device-helper'

import useInstance from '../../helpers/useInstance'

import withLocales from '../I18n/withLocales'
import en from './locales/en.json'
import fr from './locales/fr.json'

const locales = {
  en,
  fr
}

const buildPremiumLink = (uuid, managerUrl) =>
  `${managerUrl}/cozy/instances/${uuid}/premium`

const QuotaAlert = ({ t, onClose, client }) => {
  let uuid, managerUrl
  /**
   * We do the request only on the web since Apple
   * and Google have a restricted policy for the
   * inApp purchase...
   */
  if (!isMobileApp()) {
    const instanceInfo = useInstance(client)
    uuid = get(instanceInfo, 'instance.data.attributes.uuid')
    managerUrl = get(instanceInfo, 'context.data.attributes.manager_url')
  }

  return (
    <Modal
      title={t('quotaalert.title')}
      description={t('quotaalert.desc')}
      secondaryText={t('quotaalert.confirm')}
      secondaryAction={onClose}
      primaryText={uuid && managerUrl ? t('quotaalert.increase') : undefined}
      primaryAction={() =>
        uuid && managerUrl
          ? window.open(buildPremiumLink(uuid, managerUrl), 'self')
          : onClose
      }
      dismissAction={onClose}
    />
  )
}

export default withLocales(locales)(withClient(QuotaAlert))
