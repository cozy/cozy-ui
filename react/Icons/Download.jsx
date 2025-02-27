// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/download.svg` to regenerate
import React from 'react'

import SvgDownloadTwake from './Download_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgDownload(props) {
  if (isTwakeTheme()) return SvgDownloadTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M7 9.586L5.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L9 9.586V2a1 1 0 10-2 0v7.586zM1 14h14a1 1 0 110 2H1a1 1 0 110-2z"
      />
    </svg>
  )
}

export default SvgDownload
