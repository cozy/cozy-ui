// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/text.svg` to regenerate
import React from 'react'

import SvgTextTwake from './Text_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgText(props) {
  if (isTwakeTheme()) return SvgTextTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 110 2H1a1 1 0 110-2h8zm6-4a1 1 0 110 2H1a1 1 0 110-2h14zm0-4a1 1 0 110 2H1a1 1 0 010-2h14zm0-4a1 1 0 110 2H1a1 1 0 010-2h14z"
      />
    </svg>
  )
}

export default SvgText
