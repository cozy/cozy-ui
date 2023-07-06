import React, { forwardRef } from 'react'

import CommentIcon from '../../Icons/Comment'
import withActionsLocales from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'
import { useI18n } from '../../I18n'

export const smsTo = () => {
  return {
    name: 'smsTo',
    action: doc => {
      const phoneNumber = doc?.phone?.[0]?.number
      !!phoneNumber && window.open(`sms:${phoneNumber}`, '_self')
    },
    Component: withActionsLocales(
      forwardRef((props, ref) => {
        const { t } = useI18n()

        return (
          <ActionsMenuItem {...props} ref={ref}>
            <ListItemIcon>
              <Icon icon={CommentIcon} />
            </ListItemIcon>
            <ListItemText primary={t('smsTo')} />
          </ActionsMenuItem>
        )
      })
    )
  }
}
