// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/circle-filled.svg` to regenerate
import React from 'react'

import SvgCircleFilledTwake from './CircleFilled_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgCircleFilled(props) {
  if (isTwakeTheme()) return SvgCircleFilledTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <circle cx={8} cy={8} r={8} fillRule="evenodd" />
    </svg>
  )
}

export default SvgCircleFilled
