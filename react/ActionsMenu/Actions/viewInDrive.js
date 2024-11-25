import React, { forwardRef } from 'react'

import { generateWebLink } from 'cozy-client'

import { getActionsI18n } from './locales/withActionsLocales'
import Icon from '../../Icon'
import FolderOpenIcon from '../../Icons/FolderOpen'
import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import ActionsMenuItem from '../ActionsMenuItem'

const makeComponent = (label, icon) => {
  const Component = forwardRef((props, ref) => {
    return (
      <ActionsMenuItem {...props} ref={ref}>
        <ListItemIcon>
          <Icon icon={icon} />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ActionsMenuItem>
    )
  })

  Component.displayName = 'viewInDrive'

  return Component
}

export const viewInDrive = () => {
  const { t } = getActionsI18n()
  const icon = FolderOpenIcon
  const label = t('viewInDrive')

  return {
    name: 'viewInDrive',
    icon,
    label,
    Component: makeComponent(label, icon),
    action: (docs, { client }) => {
      const dirId = docs[0].dir_id
      const webLink = generateWebLink({
        slug: 'drive',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: `folder/${dirId}`
      })

      window.open(webLink, '_blank')
    }
  }
}
