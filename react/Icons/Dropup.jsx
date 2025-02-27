// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/dropup.svg` to regenerate
import React from 'react'

import SvgDropupTwake from './Dropup_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgDropup(props) {
  if (isTwakeTheme()) return SvgDropupTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" d="M14 12H2l6-7z" />
    </svg>
  )
}

export default SvgDropup
