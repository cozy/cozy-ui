import React, { forwardRef } from 'react'

import logger from 'cozy-logger'
import { fetchBlobFileById, isFile } from 'cozy-client/dist/models/file'

import { makeBase64FromFile } from './helpers'
import PrinterIcon from '../../Icons/Printer'
import { getActionsI18n } from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'

export const print = () => {
  const { t } = getActionsI18n()
  const icon = PrinterIcon
  const label = t('print')

  return {
    name: 'print',
    icon,
    label,
    disabled: docs => docs.length === 0,
    displayCondition: docs => isFile(docs[0]), // feature not yet supported for multi-files
    action: async (docs, { client, webviewIntent }) => {
      const doc = docs[0] // feature not yet supported for multi-files

      if (webviewIntent) {
        try {
          const blob = await fetchBlobFileById(client, doc._id)
          const base64 = await makeBase64FromFile(blob)

          return webviewIntent.call('print', base64)
        } catch (error) {
          logger.error(
            `Error trying to print document with Flagship App: ${JSON.stringify(
              error
            )}`
          )
        }
      }

      try {
        const downloadURL = await client
          .collection('io.cozy.files')
          .getDownloadLinkById(doc._id, doc.name)

        window.open(downloadURL, '_blank')
      } catch (error) {
        logger.error(`Error trying to print document: ${JSON.stringify(error)}`)
      }
    },
    Component: forwardRef((props, ref) => {
      return (
        <ActionsMenuItem {...props} ref={ref}>
          <ListItemIcon>
            <Icon icon={icon} />
          </ListItemIcon>
          <ListItemText primary={label} />
        </ActionsMenuItem>
      )
    })
  }
}
