// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/grid.svg` to regenerate
import React from 'react'

import SvgGridTwake from './Grid_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgGrid(props) {
  if (isTwakeTheme()) return SvgGridTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
      />
    </svg>
  )
}

export default SvgGrid
