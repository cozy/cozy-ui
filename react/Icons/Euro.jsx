// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/euro.svg` to regenerate
import React from 'react'

import SvgEuroTwake from './Euro_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgEuro(props) {
  if (isTwakeTheme()) return SvgEuroTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M14.684 2.904C13.518 1.232 12 0 9.316 0 6.192 0 3.948 2.134 3.068 5.104H1v1.87h1.716c-.044.33-.044.682-.044 1.012 0 .286 0 .572.022.836H1v1.892h2.002c.858 3.124 3.146 5.214 6.402 5.214 2.508 0 4.07-1.276 5.324-3.102l-1.936-1.43c-1.012 1.342-1.892 2.112-3.366 2.112-1.716 0-2.97-1.056-3.586-2.794h4.752V8.822h-5.17C5.4 8.536 5.4 8.25 5.4 7.942c0-.33 0-.66.044-.968h5.148v-1.87h-4.73C6.478 3.454 7.688 2.42 9.25 2.42c1.54 0 2.442.704 3.388 2.002l2.046-1.518z"
      />
    </svg>
  )
}

export default SvgEuro
