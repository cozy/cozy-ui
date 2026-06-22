import { Icon, Comment } from '@linagora/twake-icons'
import React, { forwardRef } from 'react'

import { getActionsI18n } from './locales/withActionsLocales'
import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import ActionsMenuItem from '../ActionsMenuItem'

export const smsTo = () => {
  const { t } = getActionsI18n()
  const icon = Comment
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
