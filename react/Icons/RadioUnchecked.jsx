// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/radio-unchecked.svg` to regenerate
import React from 'react'

import SvgRadioUncheckedTwake from './RadioUnchecked_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgRadioUnchecked(props) {
  if (isTwakeTheme()) return SvgRadioUncheckedTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14A6 6 0 108 2a6 6 0 000 12z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default SvgRadioUnchecked
