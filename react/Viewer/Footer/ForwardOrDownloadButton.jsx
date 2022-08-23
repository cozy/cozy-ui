import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { isFlagshipApp, isIOS } from 'cozy-device-helper'

import ForwardButton from './ForwardButton'
import DownloadButton from './DownloadButton'
import { shouldBeForwardButton } from './helpers'

const ForwardOrDownloadButton = ({ file }) => {
  const client = useClient()

  const FileActionButton = shouldBeForwardButton(client)
    ? ForwardButton
    : DownloadButton

  // Temporarily disable Download button on iOS Flagship app until
  // the download feature is fixed on this platform
  // When fixed on this platform, revert this commit from PR #2215
  return isFlagshipApp() && isIOS() ? null : <FileActionButton file={file} />
}

ForwardOrDownloadButton.propTypes = {
  file: PropTypes.object
}

export default ForwardOrDownloadButton
