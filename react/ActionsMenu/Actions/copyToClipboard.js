import React, { forwardRef } from 'react'

import { getActionsI18n } from './locales/withActionsLocales'
import Icon from '../../Icon'
import CopyIcon from '../../Icons/Copy'
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

  Component.displayName = 'copyToClipboard'

  return Component
}

export const copyToClipboard = () => {
  const { t } = getActionsI18n()
  const icon = CopyIcon
  const label = t('copyToClipboard.copy')

  return {
    name: 'copyToClipboard',
    icon,
    label,
    Component: makeComponent(label, icon),
    action: async (_, { showAlert, copyValue }) => {
      if (!copyValue) return false
      try {
        await navigator.clipboard.writeText(copyValue)
        showAlert({
          message: t('copyToClipboard.success'),
          severity: 'success',
          variant: 'filled'
        })
      } catch (error) {
        showAlert({
          message: t('copyToClipboard.error'),
          severity: 'error',
          variant: 'filled'
        })
      }
    }
  }
}
