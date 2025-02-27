// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/up.svg` to regenerate
import React from 'react'

import SvgUpTwake from './Up_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgUp(props) {
  if (isTwakeTheme()) return SvgUpTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" d="M11 16V8h5L8 0 0 8h5v8z" />
    </svg>
  )
}

export default SvgUp
