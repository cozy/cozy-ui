// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/dots.svg` to regenerate
import React from 'react'

import SvgDotsTwake from './Dots_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgDots(props) {
  if (isTwakeTheme()) return SvgDotsTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M2 10a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
  )
}

export default SvgDots
