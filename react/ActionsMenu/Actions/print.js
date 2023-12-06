import React, { forwardRef } from 'react'

import logger from 'cozy-logger'
import { useWebviewIntent } from 'cozy-intent'
import { fetchBlobFileById } from 'cozy-client/dist/models/file'

import { makeBase64FromFile } from './helpers'
import PrinterIcon from '../../Icons/Printer'
import withActionsLocales from './locales/withActionsLocales'
import ActionsMenuItem from '../ActionsMenuItem'
import ListItemIcon from '../../ListItemIcon'
import Icon from '../../Icon'
import ListItemText from '../../ListItemText'
import { useI18n } from '../../providers/I18n'

export const print = () => {
  return {
    name: 'print',
    action: async (doc, { client, webviewIntent }) => {
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
    Component: withActionsLocales(
      forwardRef(({ onClick, ...props }, ref) => {
        const { t } = useI18n()
        const webviewIntent = useWebviewIntent()

        return (
          <ActionsMenuItem
            {...props}
            ref={ref}
            onClick={() => {
              onClick({ webviewIntent })
            }}
          >
            <ListItemIcon>
              <Icon icon={PrinterIcon} />
            </ListItemIcon>
            <ListItemText primary={t('print')} />
          </ActionsMenuItem>
        )
      })
    )
  }
}
