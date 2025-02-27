// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/paperplane.svg` to regenerate
import React from 'react'

import SvgPaperplaneTwake from './Paperplane_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgPaperplane(props) {
  if (isTwakeTheme()) return SvgPaperplaneTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        d="M16 0l-6 15-2.5-2.5L4 15l-1-4 10-8.5-10 6L0 6z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgPaperplane
