import React from 'react'

import withActionsLocales from './locales/withActionsLocales'
import CommentIcon from '../../../Icons/Comment'
import { useI18n } from '../../../providers/I18n'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const smsTo = () => {
  return {
    name: 'smsTo',
    action: docs => {
      const phoneNumber = docs?.[0]?.phone?.[0]?.number
      !!phoneNumber && window.open(`sms:${phoneNumber}`, '_self')
    },
    Component: withActionsLocales(({ className, onClick }) => {
      const { t } = useI18n()

      return (
        <ActionMenuItemWrapper
          className={className}
          icon={CommentIcon}
          onClick={onClick}
        >
          {t('smsTo')}
        </ActionMenuItemWrapper>
      )
    })
  }
}
