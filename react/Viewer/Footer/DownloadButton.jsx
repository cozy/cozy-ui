import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'

import DownloadIcon from '../../Icons/Download'
import Button from '../../Button'
import Alerter from '../../Alerter'
import { withViewerLocales } from '../withViewerLocales'

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
      extension="full"
      theme="secondary"
      icon={DownloadIcon}
      label={t('Viewer.download')}
      onClick={() => handleClick(file)}
    />
  )
}

DownloadButton.propTypes = {
  file: PropTypes.object
}

export default withViewerLocales(DownloadButton)
