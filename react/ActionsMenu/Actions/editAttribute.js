import React, { forwardRef } from 'react'

import { getActionsI18n } from './locales/withActionsLocales'
import Icon from '../../Icon'
import TextInfoIcon from '../../Icons/TextInfo'
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

  Component.displayName = 'editAttribute'

  return Component
}

export const editAttribute = () => {
  const { t } = getActionsI18n()
  const icon = TextInfoIcon
  const label = t('editAttribute')

  return {
    name: 'editAttribute',
    icon,
    label,
    Component: makeComponent(label, icon),
    action: (docs, { editAttributeCallback }) => {
      editAttributeCallback(docs)
    }
  }
}
