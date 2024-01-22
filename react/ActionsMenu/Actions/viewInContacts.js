import React, { forwardRef } from 'react'

import { generateWebLink } from 'cozy-client'

import OpenappIcon from '../../Icons/Openapp'
import { getActionsI18n } from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

export const viewInContacts = () => {
  const { t } = getActionsI18n()
  const icon = OpenappIcon
  const label = t('viewInContacts')

  return {
    name: 'viewInContacts',
    icon,
    label,
    action: (docs, { client }) => {
      const contactId = docs[0]._id
      const webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: `/${contactId}`
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
