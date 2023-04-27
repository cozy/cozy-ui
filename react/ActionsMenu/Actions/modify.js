import React, { forwardRef } from 'react'

import { generateWebLink } from 'cozy-client'

import ListItemIcon from '../../MuiCozyTheme/ListItemIcon'
import ListItemText from '../../ListItemText'
import Icon from '../../Icon'
import PenIcon from '../../Icons/Pen'
import ActionsMenuItem from '../ActionsMenuItem'
import withActionsLocales from './locales/withActionsLocales'

export const modify = () => {
  return {
    name: 'modify',
    action: (doc, { client }) => {
      const contactId = doc._id

      const webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: `/${contactId}/edit`
      })

      window.open(webLink, '_blank')
    },
    Component: withActionsLocales(
      // eslint-disable-next-line no-unused-vars
      forwardRef(({ t, f, lang, ...props }, ref) => {
        return (
          <ActionsMenuItem ref={ref} {...props}>
            <ListItemIcon>
              <Icon icon={PenIcon} />
            </ListItemIcon>
            <ListItemText primary={t('modify')} />
          </ActionsMenuItem>
        )
      })
    )
  }
}
