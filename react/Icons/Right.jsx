// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/right.svg` to regenerate
import React from 'react'

import SvgRightTwake from './Right_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgRight(props) {
  if (isTwakeTheme()) return SvgRightTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M12.707 7.293l-6-6a.999.999 0 10-1.414 1.414L10.586 8l-5.293 5.293a.999.999 0 101.414 1.414l6-6a.999.999 0 000-1.414"
      />
    </svg>
  )
}

export default SvgRight
