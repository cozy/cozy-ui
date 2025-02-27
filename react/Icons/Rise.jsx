// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/rise.svg` to regenerate
import React from 'react'

import SvgRiseTwake from './Rise_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgRise(props) {
  if (isTwakeTheme()) return SvgRiseTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M4 2v2.001h6.59L2 12.5 3.5 14l8.499-8.59V12H14V2z"
      />
    </svg>
  )
}

export default SvgRise
