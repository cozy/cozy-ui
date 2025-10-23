import React from 'react'

import withActionsLocales from './locales/withActionsLocales'
import EmailIcon from '../../../Icons/Email'
import { useI18n } from '../../../providers/I18n'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const emailTo = () => {
  return {
    name: 'emailTo',
    action: docs => {
      const emailAddress = docs?.[0]?.email?.[0]?.address
      !!emailAddress && window.open(`mailto:${emailAddress}`, '_self')
    },
    Component: withActionsLocales(({ className, onClick }) => {
      const { t } = useI18n()

      return (
        <ActionMenuItemWrapper
          className={className}
          icon={EmailIcon}
          onClick={onClick}
        >
          {t('emailTo')}
        </ActionMenuItemWrapper>
      )
    })
  }
}
