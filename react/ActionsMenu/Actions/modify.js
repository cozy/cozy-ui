import React, { forwardRef } from 'react'

import { generateWebLink } from 'cozy-client'

import { getActionsI18n } from './locales/withActionsLocales'
import Icon from '../../Icon'
import PenIcon from '../../Icons/Pen'
import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import ActionsMenuItem from '../ActionsMenuItem'

export const modify = () => {
  const { t } = getActionsI18n()
  const icon = PenIcon
  const label = t('modify')

  return {
    name: 'modify',
    icon,
    label,
    action: (docs, { client }) => {
      const contactId = docs[0]._id

      const webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: `/${contactId}/edit`
      })

      window.open(webLink, '_blank')
    },
    Component: forwardRef((props, ref) => {
      return (
        <ActionsMenuItem ref={ref} {...props}>
          <ListItemIcon>
            <Icon icon={icon} />
          </ListItemIcon>
          <ListItemText primary={label} />
        </ActionsMenuItem>
      )
    })
  }
}
