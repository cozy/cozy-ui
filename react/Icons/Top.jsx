// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/top.svg` to regenerate
import React from 'react'

import SvgTopTwake from './Top_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgTop(props) {
  if (isTwakeTheme()) return SvgTopTwake(props)
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M20.603 17.825a1.571 1.571 0 002.222-2.222l-9.428-9.428a1.571 1.571 0 00-2.222 0l-9.429 9.428a1.571 1.571 0 002.222 2.222l8.318-8.317 8.317 8.317z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgTop
