import React from 'react'

import { useI18n } from '../../../../../I18n'
import CommentIcon from '../../../../../Icons/Comment'
import withListItemLocales from '../../../hoc/withListItemLocales'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const smsTo = () => {
  return {
    name: 'smsTo',
    action: docs => {
      const phoneNumber = docs?.[0]?.phone?.[0]?.number
      !!phoneNumber && window.open(`sms:${phoneNumber}`, '_self')
    },
    Component: withListItemLocales(({ className, onClick }) => {
      const { t } = useI18n()

      return (
        <ActionMenuItemWrapper
          className={className}
          icon={CommentIcon}
          onClick={onClick}
        >
          {t('ListItem.actions.smsTo')}
        </ActionMenuItemWrapper>
      )
    })
  }
}
