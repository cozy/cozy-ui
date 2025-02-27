// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/star.svg` to regenerate
import React from 'react'

import SvgStarTwake from './Star_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgStar(props) {
  if (isTwakeTheme()) return SvgStarTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M8 12l-4.702 2.472.898-5.236L.392 5.528l5.257-.764L8 0l2.351 4.764 5.257.764-3.804 3.708.898 5.236z"
      />
    </svg>
  )
}

export default SvgStar
