// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/illus/file-type-server.svg` to regenerate
import React from 'react'

import SvgFileTypeServerTwake from './FileTypeServer_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgFileTypeServer(props) {
  if (isTwakeTheme()) return SvgFileTypeServerTwake(props)
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M2.799 16.501A4 4 0 015.923 15h20.155a4 4 0 013.123 1.501l2.142 2.677A3 3 0 0132 21.052V24H0v-2.948a3 3 0 01.657-1.874L2.8 16.501zm0-14A4 4 0 015.923 1h20.155A4 4 0 0129.2 2.501l2.142 2.677A3 3 0 0132 7.052V10H0V7.052a3 3 0 01.657-1.874L2.8 2.501z"
        fill="#197BFF"
      />
      <path
        d="M0 21a2 2 0 012-2h28a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2v-8zM0 7a2 2 0 012-2h28a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V7z"
        fill="#B2D3FF"
      />
      <path
        d="M8 25a2 2 0 11-4 0 2 2 0 014 0zm0-14a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#297EF2"
      />
    </svg>
  )
}

export default SvgFileTypeServer
