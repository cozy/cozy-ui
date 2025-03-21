// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/dash.svg` to regenerate
import React from 'react'

import SvgDashTwake from './Dash_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgDash(props) {
  if (isTwakeTheme()) return SvgDashTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" d="M2 7h12a1 1 0 010 2H2a1 1 0 110-2z" />
    </svg>
  )
}

export default SvgDash
