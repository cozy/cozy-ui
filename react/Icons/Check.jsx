// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/check.svg` to regenerate
import React from 'react'

import SvgCheckTwake from './Check_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgCheck(props) {
  if (isTwakeTheme()) return SvgCheckTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M1.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l11-11a1 1 0 00-1.414-1.414L4 12.586l-2.293-2.293z" />
    </svg>
  )
}

export default SvgCheck
