import React, { forwardRef } from 'react'

import { getActionsI18n } from './locales/withActionsLocales'
import Icon from '../../Icon'
import EmailIcon from '../../Icons/Email'
import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import ActionsMenuItem from '../ActionsMenuItem'

export const emailTo = () => {
  const { t } = getActionsI18n()
  const icon = EmailIcon
  const label = t('emailTo')

  return {
    name: 'emailTo',
    icon,
    label,
    action: docs => {
      const emailAddress = docs?.[0]?.email?.[0]?.address
      !!emailAddress && window.open(`mailto:${emailAddress}`, '_self')
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
