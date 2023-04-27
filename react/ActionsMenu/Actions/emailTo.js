import React, { forwardRef } from 'react'

import EmailIcon from '../../Icons/Email'
import withActionsLocales from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../MuiCozyTheme/ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

export const emailTo = () => {
  return {
    name: 'emailTo',
    action: doc => {
      const emailAddress = doc?.email?.[0]?.address
      !!emailAddress && window.open(`mailto:${emailAddress}`, '_self')
    },
    Component: withActionsLocales(
      // eslint-disable-next-line no-unused-vars
      forwardRef(({ t, f, lang, ...props }, ref) => {
        return (
          <ActionsMenuItem {...props} ref={ref}>
            <ListItemIcon>
              <Icon icon={EmailIcon} />
            </ListItemIcon>
            <ListItemText primary={t('emailTo')} />
          </ActionsMenuItem>
        )
      })
    )
  }
}
