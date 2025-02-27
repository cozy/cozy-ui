// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/key.svg` to regenerate
import React from 'react'

import SvgKeyTwake from './Key_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgKey(props) {
  if (isTwakeTheme()) return SvgKeyTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M9 9.584V10H7v2H5v2H3v2H0v-3l6.297-6.297A5 5 0 119 9.584zM11 3a2 2 0 100 4 2 2 0 000-4z"
      />
    </svg>
  )
}

export default SvgKey
