import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { isIOS, isMobileApp } from 'cozy-device-helper'

import { useI18n } from '../../providers/I18n'
import Icon from '../../Icon'
import ReplyIcon from '../../Icons/Reply'
import ShareIosIcon from '../../Icons/ShareIos'
import Button from '../../Buttons'
import Alerter from '../../deprecated/Alerter'
import { withViewerLocales } from '../hoc/withViewerLocales'
import { exportFilesNative } from './helpers'
import { getSharingLink } from 'cozy-client/dist/models/sharing'

const ForwardIcon = isIOS() ? ShareIosIcon : ReplyIcon

const ForwardButton = ({ file, onClick }) => {
  const { t } = useI18n()
  const client = useClient()

  const onFileOpen = async file => {
    if (isMobileApp()) {
      try {
        await exportFilesNative(client, [file])
      } catch (error) {
        Alerter.info(`Viewer.error.${error}`, { fileMime: file.mime })
      }
    } else {
      try {
        const url = await getSharingLink(client, [file.id])
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

  const handleClick = () => {
    if (onClick) onClick()
    else onFileOpen(file)
  }

  return (
    <Button
      fullWidth
      variant="secondary"
      startIcon={<Icon icon={ForwardIcon} />}
      data-testid="openFileButton"
      label={t('Viewer.actions.forward')}
      onClick={handleClick}
    />
  )
}

ForwardButton.propTypes = {
  file: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export { exportFilesNative }
export default withViewerLocales(ForwardButton)
