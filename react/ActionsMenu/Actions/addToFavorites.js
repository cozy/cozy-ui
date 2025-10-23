import React, { forwardRef } from 'react'

import { splitFilename } from 'cozy-client/dist/models/file'

import { getActionsI18n } from './locales/withActionsLocales'
import Icon from '../../Icon'
import StarOutlineIcon from '../../Icons/StarOutline'
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

  Component.displayName = 'addToFavorites'

  return Component
}

export const addToFavorites = ({ showAlert }) => {
  const { t } = getActionsI18n()
  const icon = StarOutlineIcon
  const label = t('favorites.add.label')

  return {
    name: 'addToFavorites',
    icon,
    label,
    displayCondition: docs =>
      docs.length > 0 && docs.every(doc => !doc.cozyMetadata?.favorite),
    Component: makeComponent(label, icon),
    action: async (docs, { client }) => {
      try {
        for (const doc of docs) {
          await client.save({
            ...doc,
            cozyMetadata: {
              ...doc.cozyMetadata,
              favorite: true
            }
          })
        }

        const { filename } = splitFilename(docs[0])
        showAlert({
          message: t('favorites.add.success', {
            filename,
            smart_count: docs.length
          }),
          severity: 'success'
        })
      } catch (error) {
        showAlert({ message: t('favorites.error'), severity: 'error' })
      }
    }
  }
}
