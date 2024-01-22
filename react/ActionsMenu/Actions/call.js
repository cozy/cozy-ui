import React, { forwardRef } from 'react'

import TelephoneIcon from '../../Icons/Telephone'
import { getActionsI18n } from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

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
