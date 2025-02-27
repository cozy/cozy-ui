// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/filter.svg` to regenerate
import React from 'react'

import SvgFilterTwake from './Filter_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgFilter(props) {
  if (isTwakeTheme()) return SvgFilterTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M2 0h12a1 1 0 011 1v.581a1 1 0 01-.299.713L10 6.92V16l-4-3.09v-6L1.3 2.294A1 1 0 011 1.58V1a1 1 0 011-1z"
      />
    </svg>
  )
}

export default SvgFilter
