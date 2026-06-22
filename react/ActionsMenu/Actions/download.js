import { Icon, Download } from '@linagora/twake-icons'
import React, { forwardRef } from 'react'

import { getActionsI18n } from './locales/withActionsLocales'
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

export const download = ({ client, encryptedUrl, downloadFile }) => {
  const { t } = getActionsI18n()
  const icon = Download
  const label = t('download')

  return {
    name: 'download',
    icon,
    label,
    Component: makeComponent(label, icon),
    action: (docs, { webviewIntent, driveId }) =>
      downloadFile({
        client,
        file: docs[0],
        url: encryptedUrl,
        webviewIntent,
        driveId
      })
  }
}
