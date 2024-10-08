import PropTypes from 'prop-types'
import React from 'react'

import { useClient } from 'cozy-client'

import DownloadButton from './DownloadButton'
import ForwardButton from './ForwardButton'
import { shouldBeForwardButton } from './helpers'

const ForwardOrDownloadButton = ({ file, ...props }) => {
  const client = useClient()

  const FileActionButton = shouldBeForwardButton(client)
    ? ForwardButton
    : DownloadButton

  return <FileActionButton file={file} {...props} />
}

ForwardOrDownloadButton.propTypes = {
  file: PropTypes.object
}

export default ForwardOrDownloadButton
