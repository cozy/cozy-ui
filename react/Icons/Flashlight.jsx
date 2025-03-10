// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/flashlight.svg` to regenerate
import React from 'react'

import SvgFlashlightTwake from './Flashlight_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgFlashlight(props) {
  if (isTwakeTheme()) return SvgFlashlightTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M6 7.003L3 3h10l-3 4.003H6zM13 2H3V0h10v2zM6 16V7h4v9H6z"
      />
    </svg>
  )
}

export default SvgFlashlight
