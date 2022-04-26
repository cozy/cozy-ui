import React from 'react'
import PropTypes from 'prop-types'

import { useClient, useCapabilities, models } from 'cozy-client'
import { isIOS, isMobileApp } from 'cozy-device-helper'

import { useI18n } from '../../I18n'
import Button from '../../Button'
import ReplyIcon from '../../Icons/Reply'
import ShareIosIcon from '../../Icons/ShareIos'
import Alerter from '../../Alerter'
import { withViewerLocales } from '../withViewerLocales'
import { exportFilesNative } from './helpers'

const {
  sharing: { getSharingLink }
} = models

const ForwardIcon = isIOS() ? ShareIosIcon : ReplyIcon

const ForwardButton = ({ file }) => {
  const { t } = useI18n()
  const client = useClient()
  const { capabilities } = useCapabilities(client)

  const onFileOpen = async file => {
    if (isMobileApp()) {
      try {
        await exportFilesNative(client, [file])
      } catch (error) {
        Alerter.info(`Viewer.error.${error}`, { fileMime: file.mime })
      }
    } else {
      try {
        const isFlatDomain = capabilities?.data?.attributes?.flat_subdomains
        const url = await getSharingLink(client, file, isFlatDomain)
        const shareData = {
          title: t('Viewer.share.title', { name: file.name }),
          text: t('Viewer.share.text', { name: file.name }),
          url
        }
        navigator.share(shareData)
      } catch (error) {
        Alerter.error('Viewer.share.error', { error: error })
      }
    }
  }

  return (
    <Button
      extension="full"
      data-testid="openFileButton"
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

export { exportFilesNative }
export default withViewerLocales(ForwardButton)
