// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/down.svg` to regenerate
import React from 'react'

import SvgDownTwake from './Down_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgDown(props) {
  if (isTwakeTheme()) return SvgDownTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" d="M5 0v8H0l8 8 8-8h-5V0z" />
    </svg>
  )
}

export default SvgDown
