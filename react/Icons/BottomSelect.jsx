// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/illus/bottom-select.svg` to regenerate
import React from 'react'

import SvgBottomSelectTwake from './BottomSelect_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgBottomSelect(props) {
  if (isTwakeTheme()) return SvgBottomSelectTwake(props)
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M3.968 6.175a1.571 1.571 0 00-2.222 2.222l9.429 9.428a1.571 1.571 0 002.222 0l9.428-9.428a1.571 1.571 0 00-2.222-2.222l-8.317 8.317-8.318-8.317z"
        fill="#95999d"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgBottomSelect
