import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'

import ForwardButton from './ForwardButton'
import DownloadButton from './DownloadButton'
import { shouldBeForwardButton } from './helpers'

const ForwardOrDownloadButton = ({ file }) => {
  const client = useClient()

  const FileActionButton = shouldBeForwardButton(client)
    ? ForwardButton
    : DownloadButton

  return <FileActionButton file={file} />
}

ForwardOrDownloadButton.propTypes = {
  file: PropTypes.object
}

export default ForwardOrDownloadButton
