// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/graph-circle.svg` to regenerate
import React from 'react'

import SvgGraphCircleTwake from './GraphCircle_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgGraphCircle(props) {
  if (isTwakeTheme()) return SvgGraphCircleTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M7 16A7 7 0 017 2v7h7a7 7 0 01-7 7zm2-9V0a7 7 0 017 7H9z"
      />
    </svg>
  )
}

export default SvgGraphCircle
