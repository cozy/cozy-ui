// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/illus/check-white.svg` to regenerate
import React from 'react'

import SvgCheckWhiteTwake from './CheckWhite_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgCheckWhite(props) {
  if (isTwakeTheme()) return SvgCheckWhiteTwake(props)
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        d="M3 10.019l4.523 4.523 9.541-9.541"
        stroke="#FFF"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  )
}

export default SvgCheckWhite
