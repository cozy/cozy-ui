// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/stop.svg` to regenerate
import React from 'react'

import SvgStopTwake from './Stop_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgStop(props) {
  if (isTwakeTheme()) return SvgStopTwake(props)
  return (
    <svg viewBox="0 0 12 12" {...props}>
      <path d="M.75 1.5A.75.75 0 011.5.75h9a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75v-9z" />
    </svg>
  )
}

export default SvgStop
