import React, { forwardRef } from 'react'

import CommentIcon from '../../Icons/Comment'
import withActionsLocales from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../MuiCozyTheme/ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

export const smsTo = () => {
  return {
    name: 'smsTo',
    action: doc => {
      const phoneNumber = doc?.phone?.[0]?.number
      !!phoneNumber && window.open(`sms:${phoneNumber}`, '_self')
    },
    Component: withActionsLocales(
      // eslint-disable-next-line no-unused-vars
      forwardRef(({ t, f, lang, ...props }, ref) => {
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
