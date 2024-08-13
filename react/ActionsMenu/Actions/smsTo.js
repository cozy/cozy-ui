import React, { forwardRef } from 'react'

import CommentIcon from '../../Icons/Comment'
import { getActionsI18n } from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

export const smsTo = () => {
  const { t } = getActionsI18n()
  const icon = CommentIcon
  const label = t('smsTo')

  return {
    name: 'smsTo',
    icon,
    label,
    action: docs => {
      const phoneNumber = docs?.[0]?.phone?.[0]?.number
      !!phoneNumber && window.open(`sms:${phoneNumber}`, '_self')
    },
    Component: forwardRef((props, ref) => {
      return (
        <ActionsMenuItem {...props} ref={ref}>
          <ListItemIcon>
            <Icon icon={icon} />
          </ListItemIcon>
          <ListItemText primary={label} />
        </ActionsMenuItem>
      )
    })
  }
}
