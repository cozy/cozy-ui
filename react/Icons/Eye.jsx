// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/eye.svg` to regenerate
import React from 'react'

import SvgEyeTwake from './Eye_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgEye(props) {
  if (isTwakeTheme()) return SvgEyeTwake(props)
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M1 10s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6zm9 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
  )
}

export default SvgEye
