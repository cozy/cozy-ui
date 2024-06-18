import React, { forwardRef } from 'react'

import logger from 'cozy-logger'
import { fetchBlobFileById, isFile } from 'cozy-client/dist/models/file'

import { makeBase64FromFile, makePdfBlob } from './helpers'
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
    displayCondition: docs => docs.every(doc => isFile(doc)),
    action: async (docs, { client, webviewIntent }) => {
      const isSingleDoc = docs.length === 1
      const firstDoc = docs[0]

      try {
        // in flagship app
        if (webviewIntent) {
          const blob = isSingleDoc
            ? await fetchBlobFileById(client, firstDoc._id)
            : await makePdfBlob(client, docs)
          const base64 = await makeBase64FromFile(blob)

          return webviewIntent.call('print', base64)
        }

        // not in flagship app
        let docUrl = ''
        if (isSingleDoc) {
          docUrl = await client
            .collection('io.cozy.files')
            .getDownloadLinkById(firstDoc._id, firstDoc.name)
        } else {
          const blob = await makePdfBlob(client, docs)
          docUrl = URL.createObjectURL(blob)
        }

        /*
          We need to write window.open in a setTimeout because
          Safari does not allow window.open in an async function.
        */
        setTimeout(() => {
          window.open(docUrl, '_blank')
        })
      } catch (error) {
        logger.error(
          `Error trying to print document ${
            webviewIntent ? 'inside flagship appp' : 'outside flagship app'
          }: ${JSON.stringify(error)}`
        )
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
