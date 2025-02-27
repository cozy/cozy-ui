// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/share.svg` to regenerate
import React from 'react'

import SvgShareTwake from './Share_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgShare(props) {
  if (isTwakeTheme()) return SvgShareTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        d="M5.083 10.16a3 3 0 110-4.319l4.94-2.47a3 3 0 11.895 1.789l-4.94 2.47a3.03 3.03 0 010 .74l4.94 2.47a3 3 0 11-.895 1.789l-4.94-2.47z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgShare
