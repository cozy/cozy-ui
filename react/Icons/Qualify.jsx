// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/qualify.svg` to regenerate
import React from 'react'

import SvgQualifyTwake from './Qualify_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgQualify(props) {
  if (isTwakeTheme()) return SvgQualifyTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M2 2h8.002a2 2 0 011.414.586l4 4a2 2 0 010 2.828l-4 4a2 2 0 01-1.414.586H2a2 2 0 01-2-2V4a2 2 0 012-2z"
      />
    </svg>
  )
}

export default SvgQualify
