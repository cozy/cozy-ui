import React from 'react'
import PropTypes from 'prop-types'
import flow from 'lodash/flow'

import { withClient } from 'cozy-client'

import { FileDoctype } from '../../proptypes'
import Button from '../../Button'

import { withViewerLocales } from '../withViewerLocales'
import { downloadFile } from '../helpers'

const DownloadButton = ({ t, client, file, url }) => {
  return (
    <Button
      onClick={() => downloadFile({ client, file, url })}
      label={t('Viewer.download')}
    />
  )
}

DownloadButton.propTypes = {
  t: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
  file: FileDoctype,
  url: PropTypes.string
}

export default flow(
  withClient,
  withViewerLocales
)(DownloadButton)
