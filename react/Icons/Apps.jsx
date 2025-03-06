// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/permissions/apps.svg` to regenerate
import React from 'react'

import SvgAppsTwake from './Apps_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgApps(props) {
  if (isTwakeTheme()) return SvgAppsTwake(props)
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#d6d8da"
          d="M25.342 24.67l20.87 10.436a1 1 0 010 1.788L25.341 47.33a3 3 0 01-2.684 0L1.788 36.894a1 1 0 010-1.788l20.87-10.435a3 3 0 012.684 0z"
        />
        <path
          fill="#95999d"
          d="M25.342 12.67l20.87 10.436a1 1 0 010 1.788L25.341 35.33a3 3 0 01-2.684 0L1.788 24.894a1 1 0 010-1.788l20.87-10.435a3 3 0 012.684 0z"
        />
        <path
          fill="#5d6165"
          d="M25.342.67l20.87 10.436a1 1 0 010 1.788L25.341 23.33a3 3 0 01-2.684 0L1.788 12.894a1 1 0 010-1.788L22.659.67a3 3 0 012.684 0z"
        />
      </g>
    </svg>
  )
}

export default SvgApps
