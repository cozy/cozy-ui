import React, { forwardRef } from 'react'

import logger from 'cozy-logger'

import { downloadBlob } from './helpers'
import { getActionsI18n } from './locales/withActionsLocales'
import { makePdfBlobFromText } from './pdfHelpers'
import Icon from '../../Icon'
import ExportIcon from '../../Icons/Export'
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

  Component.displayName = 'exportToText'

  return Component
}

export const exportToText = ({ exportedText, file }) => {
  const { t } = getActionsI18n()
  const icon = ExportIcon
  const label = t('exportToText')

  return {
    name: 'exportToText',
    icon,
    label,
    displayCondition: () => !!exportedText,
    Component: makeComponent(label, icon),
    action: async () => {
      try {
        const blob = await makePdfBlobFromText(exportedText)
        const baseName = file?.name
          ? `${file.name.replace(/\.[^/.]+$/, '')}_export`
          : 'export'
        downloadBlob(blob, `${baseName}.pdf`)
      } catch (error) {
        logger.error(error)
      }
    }
  }
}
