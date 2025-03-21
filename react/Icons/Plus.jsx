// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/plus.svg` to regenerate
import React from 'react'

import SvgPlusTwake from './Plus_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgPlus(props) {
  if (isTwakeTheme()) return SvgPlusTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <defs>
        <path id="plus_svg__a" d="M7 0h2v7h7v2H9v7H7V9H0V7h7z" />
      </defs>
      <use xlinkHref="#plus_svg__a" fillRule="evenodd" />
    </svg>
  )
}

export default SvgPlus
