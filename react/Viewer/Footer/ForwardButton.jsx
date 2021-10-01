import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { saveFileWithCordova } from 'cozy-client/dist/models/fsnative'
import { isIOS } from 'cozy-device-helper'

import { useI18n } from '../../I18n'
import Button from '../../Button'
import ReplyIcon from '../../Icons/Reply'
import ShareIosIcon from '../../Icons/ShareIos'
import Alerter from '../../Alerter'
import { withViewerLocales } from '../withViewerLocales'

const isMissingFileError = error => error.status === 404
const downloadFileError = error => {
  return isMissingFileError(error)
    ? 'Viewer.error.downloadFile.missing'
    : 'Viewer.error.missing'
}
/**
 * exportFilesNative - Triggers a prompt to download a file on mobile devices
 *
 * @param {CozyClient} client
 * @param {array} files    One or more files to download
 * @param {string} filename The name of the file that will be saved
 */
export const exportFilesNative = async (client, files, filename) => {
  const downloadAllFiles = files.map(async file => {
    const response = await client
      .collection('io.cozy.files')
      .fetchFileContentById(file.id)

    const blob = await response.blob()
    const filenameToUse = filename ? filename : file.name
    const localFile = await saveFileWithCordova(blob, filenameToUse)
    return localFile.nativeURL
  })

  try {
    Alerter.info('Viewer.alert.preparing', {
      duration: Math.min(downloadAllFiles.length * 2000, 6000)
    })

    const urls = await Promise.all(downloadAllFiles)
    if (urls.length === 1 && isIOS()) {
      // TODO
      // It seems that files: is not well supported on iOS. url seems to work well
      // at with one file. Need to check when severals
      window.plugins.socialsharing.shareWithOptions(
        {
          url: urls[0]
        },
        result => {
          if (result.completed === true) {
            Alerter.success('Viewer.share.success')
          }
        },
        error => {
          throw error
        }
      )
    } else {
      window.plugins.socialsharing.shareWithOptions(
        {
          files: urls
        },
        null,
        error => {
          throw error
        }
      )
    }
  } catch (error) {
    Alerter.error(downloadFileError(error))
  }
}

const ForwardIcon = isIOS() ? ShareIosIcon : ReplyIcon

const ForwardButton = ({ file }) => {
  const { t } = useI18n()
  const client = useClient()

  const onFileOpen = async file => {
    try {
      await exportFilesNative(client, [file])
    } catch (error) {
      Alerter.info(`Viewer.error.${error}`, { fileMime: file.mime })
    }
  }

  return (
    <Button
      extension="full"
      theme="secondary"
      icon={ForwardIcon}
      label={t('Viewer.actions.forward')}
      onClick={() => onFileOpen(file)}
    />
  )
}

ForwardButton.propTypes = {
  file: PropTypes.object.isRequired
}

export default withViewerLocales(ForwardButton)
