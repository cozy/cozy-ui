import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'

import { useI18n } from '../../providers/I18n'
import Icon from '../../Icon'
import IconButton from '../../IconButton'
import DownloadIcon from '../../Icons/Download'
import Button from '../../Buttons'
import Alerter from '../../deprecated/Alerter'

const DownloadButton = ({ file, variant }) => {
  const client = useClient()
  const { t } = useI18n()

  const icon = <Icon icon={DownloadIcon} />
  const label = t('Viewer.download')

  const handleClick = async () => {
    try {
      await client.collection('io.cozy.files').download(file)
    } catch (error) {
      Alerter.info('Viewer.error.generic')
    }
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
      label={label}
      onClick={handleClick}
    />
  )
}

DownloadButton.propTypes = {
  file: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'iconButton', 'buttonIcon'])
}

DownloadButton.defaultProptypes = {
  variant: 'default'
}

export default DownloadButton
