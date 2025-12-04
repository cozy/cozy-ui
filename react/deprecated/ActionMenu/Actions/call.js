import React from 'react'
import { useI18n } from 'twake-i18n'

import withActionsLocales from './locales/withActionsLocales'
import TelephoneIcon from '../../../Icons/Telephone'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const call = () => {
  return {
    name: 'call',
    action: docs => {
      const phoneNumber = docs?.[0]?.phone?.[0]?.number
      !!phoneNumber && window.open(`tel:${phoneNumber}`, '_self')
    },
    Component: withActionsLocales(({ className, onClick }) => {
      const { t } = useI18n()

      return (
        <ActionMenuItemWrapper
          className={className}
          icon={TelephoneIcon}
          onClick={onClick}
        >
          {t('call')}
        </ActionMenuItemWrapper>
      )
    })
  }
}
