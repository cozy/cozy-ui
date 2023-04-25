import React, { forwardRef } from 'react'

import TelephoneIcon from '../../Icons/Telephone'
import withActionsLocales from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../MuiCozyTheme/ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

export const call = () => {
  return {
    name: 'call',
    action: doc => {
      const phoneNumber = doc?.phone?.[0]?.number
      !!phoneNumber && window.open(`tel:${phoneNumber}`, '_self')
    },
    Component: withActionsLocales(
      forwardRef(({ t, ...props }, ref) => {
        return (
          <ActionsMenuItem {...props} ref={ref}>
            <ListItemIcon>
              <Icon icon={TelephoneIcon} />
            </ListItemIcon>
            <ListItemText primary={t('call')} />
          </ActionsMenuItem>
        )
      })
    )
  }
}
