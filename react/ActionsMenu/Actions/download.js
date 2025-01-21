import React, { forwardRef } from 'react'

import { downloadFile } from 'cozy-client/dist/models/file'

import { getActionsI18n } from './locales/withActionsLocales'
import Icon from '../../Icon'
import DownloadIcon from '../../Icons/Download'
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

  Component.displayName = 'download'

  return Component
}

export const download = ({ encryptedUrl }) => {
  const { t } = getActionsI18n()
  const icon = DownloadIcon
  const label = t('download')

  return {
    name: 'download',
    icon,
    label,
    Component: makeComponent(label, icon),
    action: (docs, { client, webviewIntent }) =>
      downloadFile({ client, file: docs[0], url: encryptedUrl, webviewIntent })
  }
}
