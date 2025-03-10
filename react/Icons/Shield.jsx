// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/shield.svg` to regenerate
import React from 'react'

import SvgShieldTwake from './Shield_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgShield(props) {
  if (isTwakeTheme()) return SvgShieldTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        d="M8 0c1.205 0 2.396.162 3.782.498 1.22.296 2.47.713 3.751 1.25.27.095.467.337.467.62 0 3.335-.483 5.931-1.687 8.083-1.205 2.166-3.104 3.874-5.907 5.448a.838.838 0 01-.798 0c-2.802-1.574-4.7-3.282-5.906-5.447C.497 8.298 0 5.702 0 2.366a.65.65 0 01.38-.576l.103-.043a23.733 23.733 0 013.75-1.25C5.605.162 6.81 0 8 0zm0 2c-1.014 0-2.06.139-3.3.443a20.91 20.91 0 00-2.44.75l-.246.093.014.362c.108 2.322.523 4.107 1.284 5.575l.138.256c.891 1.6 2.276 2.95 4.399 4.244l.158.095.157-.094c2.007-1.224 3.354-2.495 4.25-3.984l.154-.265c.84-1.502 1.292-3.35 1.404-5.82l.013-.372-.234-.09a22.272 22.272 0 00-1.962-.629l-.48-.123C10.056 2.137 9.024 2 8 2zm0 2c.761 0 1.538.092 2.478.301l.36.084.456.117.425.12.174.053-.004.058c-.151 1.44-.46 2.578-.933 3.514l-.134.251-.139.24-.136.218c-.516.786-1.23 1.522-2.209 2.247l-.331.237-.008-.005L8 4z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgShield
