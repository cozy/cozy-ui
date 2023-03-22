import React from 'react'

import { useI18n } from '../../../../../I18n'
import EmailIcon from '../../../../../Icons/Email'
import withListItemLocales from '../../../hoc/withListItemLocales'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const emailTo = () => {
  return {
    name: 'emailTo',
    action: docs => {
      const emailAddress = docs?.[0]?.email?.[0]?.address
      !!emailAddress && window.open(`mailto:${emailAddress}`, '_self')
    },
    Component: withListItemLocales(({ className, onClick }) => {
      const { t } = useI18n()

      return (
        <ActionMenuItemWrapper
          className={className}
          icon={EmailIcon}
          onClick={onClick}
        >
          {t('ListItem.actions.emailTo')}
        </ActionMenuItemWrapper>
      )
    })
  }
}
