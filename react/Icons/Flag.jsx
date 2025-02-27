// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/flag.svg` to regenerate
import React from 'react'

import SvgFlagTwake from './Flag_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgFlag(props) {
  if (isTwakeTheme()) return SvgFlagTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" d="M8.98 2L8 0H1v16h2v-6h4.021L8 12h7V2z" />
    </svg>
  )
}

export default SvgFlag
