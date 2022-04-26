import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { isIOS } from 'cozy-device-helper'

import { useI18n } from '../../I18n'
import Button from '../../Button'
import ReplyIcon from '../../Icons/Reply'
import ShareIosIcon from '../../Icons/ShareIos'
import Alerter from '../../Alerter'
import { withViewerLocales } from '../withViewerLocales'
import { exportFilesNative } from './helpers'

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

export { exportFilesNative }
export default withViewerLocales(ForwardButton)
