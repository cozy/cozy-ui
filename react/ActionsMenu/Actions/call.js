import React, { forwardRef } from 'react'

import { getActionsI18n } from './locales/withActionsLocales'
import Icon from '../../Icon'
import TelephoneIcon from '../../Icons/Telephone'
import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import ActionsMenuItem from '../ActionsMenuItem'

export const call = () => {
  const { t } = getActionsI18n()
  const icon = TelephoneIcon
  const label = t('call')

  return {
    name: 'call',
    icon,
    label,
    action: docs => {
      const phoneNumber = docs?.[0]?.phone?.[0]?.number
      !!phoneNumber && window.open(`tel:${phoneNumber}`, '_self')
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
