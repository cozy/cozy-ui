import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { isIOS, isMobileApp } from 'cozy-device-helper'

import { useI18n } from '../../providers/I18n'
import Icon from '../../Icon'
import IconButton from '../../IconButton'
import ReplyIcon from '../../Icons/Reply'
import ShareIosIcon from '../../Icons/ShareIos'
import Button from '../../Buttons'
import Alerter from '../../deprecated/Alerter'
import { exportFilesNative } from './helpers'
import { getSharingLink } from 'cozy-client/dist/models/sharing'

const ForwardIcon = isIOS() ? ShareIosIcon : ReplyIcon

const ForwardButton = ({ file, variant, onClick }) => {
  const { t } = useI18n()
  const client = useClient()

  const icon = <Icon icon={ForwardIcon} />
  const label = t('Viewer.actions.forward')

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

  if (variant === 'iconButton') {
    return (
      <IconButton className="u-white" aria-label={label} onClick={handleClick}>
        {icon}
      </IconButton>
    )
  }

  if (variant === 'buttonIcon') {
    return (
      <Button
        variant="secondary"
        label={icon}
        aria-label={label}
        onClick={handleClick}
      />
    )
  }

  return (
    <Button
      fullWidth
      variant="secondary"
      startIcon={icon}
      data-testid="openFileButton"
      label={label}
      onClick={handleClick}
    />
  )
}

ForwardButton.propTypes = {
  file: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['default', 'iconButton', 'buttonIcon']),
  onClick: PropTypes.func
}

ForwardButton.defaultProptypes = {
  variant: 'default'
}

export { exportFilesNative }
export default ForwardButton
