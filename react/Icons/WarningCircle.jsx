// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/warning-circle.svg` to regenerate
import React from 'react'

import SvgWarningCircleTwake from './WarningCircle_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgWarningCircle(props) {
  if (isTwakeTheme()) return SvgWarningCircleTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM8 4a1 1 0 00-.993.883L7 5v3a1 1 0 001.993.117L9 8V5a1 1 0 00-1-1z"
      />
    </svg>
  )
}

export default SvgWarningCircle
