import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'

import Icon from '../../Icon'
import DownloadIcon from '../../Icons/Download'
import Button from '../../Buttons'
import Alerter from '../../deprecated/Alerter'
import { withViewerLocales } from '../hoc/withViewerLocales'

const DownloadButton = ({ file, t }) => {
  const client = useClient()

  const handleClick = async file => {
    try {
      await client.collection('io.cozy.files').download(file)
    } catch (error) {
      Alerter.info('Viewer.error.generic')
    }
  }

  return (
    <Button
      fullWidth
      variant="secondary"
      startIcon={<Icon icon={DownloadIcon} />}
      label={t('Viewer.download')}
      onClick={() => handleClick(file)}
    />
  )
}

DownloadButton.propTypes = {
  file: PropTypes.object
}

export default withViewerLocales(DownloadButton)
