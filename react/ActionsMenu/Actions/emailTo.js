import React, { forwardRef } from 'react'

import EmailIcon from '../../Icons/Email'
import { getActionsI18n } from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

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
