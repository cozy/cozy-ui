import React from 'react'
import get from 'lodash/get'

import { useClient } from 'cozy-client'
import { isMobileApp } from 'cozy-device-helper'

import { Dialog } from '../CozyDialogs'
import Button from '../Button'

import useInstance from '../helpers/useInstance'

import withLocales from '../I18n/withLocales'
import en from './locales/en.json'
import fr from './locales/fr.json'

const locales = {
  en,
  fr
}

const buildPremiumLink = (uuid, managerUrl) =>
  `${managerUrl}/cozy/instances/${uuid}/premium`

const QuotaModalAlert = withLocales(locales)(({ t, onClose, instance }) => {
  const uuid = get(instance, 'instance.data.attributes.uuid')
  const managerUrl = get(instance, 'context.data.attributes.manager_url')
  return (
    <Dialog
      open={true}
      title={t('quotaalert.title')}
      content={t('quotaalert.desc')}
      actions={
        <>
          <Button
            theme="secondary"
            onClick={onClose}
            label={t('quotaalert.confirm')}
          />
          {uuid && managerUrl && (
            <Button
              theme="primary"
              label={t('quotaalert.increase')}
              onClick={() =>
                window.open(buildPremiumLink(uuid, managerUrl), 'self')
              }
            />
          )}
        </>
      }
      onClose={onClose}
    />
  )
})

const QuotaAlert = ({ onClose }) => {
  const client = useClient()
  /**
   * We don't want to call useInstance if we are on
   * mobile since we don't want to create a link to the cozy manager
   * because Apple and Google have restricted policy about
   * making a link to an outside purchase.
   *
   * So no call, no instance info, no button
   */
  if (isMobileApp()) {
    return <QuotaModalAlert onClose={onClose} />
  }
  // TODO: why is there a conditional hook here?
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const instanceInfo = useInstance(client)
  return <QuotaModalAlert instance={instanceInfo} onClose={onClose} />
}

export default QuotaAlert
