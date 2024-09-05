import PropTypes from 'prop-types'
import React from 'react'

import { withClient } from 'cozy-client'

import Button from '../../deprecated/Button'
import { FileDoctype } from '../../proptypes'
import { useI18n } from '../../providers/I18n'
import { downloadFile } from '../helpers'

const DownloadButton = ({ client, file, url }) => {
  const { t } = useI18n()

  return (
    <Button
      onClick={() => downloadFile({ client, file, url })}
      label={t('Viewer.download')}
    />
  )
}

DownloadButton.propTypes = {
  client: PropTypes.object.isRequired,
  file: FileDoctype,
  url: PropTypes.string
}

export default withClient(DownloadButton)
