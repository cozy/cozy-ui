// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/link.svg` to regenerate
import React from 'react'

import SvgLinkTwake from './Link_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgLink(props) {
  if (isTwakeTheme()) return SvgLinkTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M9.259 4.045a1.043 1.043 0 11-1.475-1.474L9.44.915a3.126 3.126 0 014.417-.002l1.23 1.23a3.126 3.126 0 01-.007 4.422l-3.612 3.612c-1.6 1.6-4.244 1.65-5.77.124a1.043 1.043 0 111.475-1.474c.699.698 2.023.673 2.82-.125l3.613-3.612a1.04 1.04 0 00.006-1.473l-1.23-1.23a1.04 1.04 0 00-1.468.003L9.26 4.045zm-2.518 7.91a1.043 1.043 0 011.475 1.474L6.56 15.085a3.126 3.126 0 01-4.417.002l-1.23-1.23a3.126 3.126 0 01.006-4.422l3.613-3.612c1.6-1.6 4.243-1.65 5.77-.124a1.043 1.043 0 01-1.475 1.474c-.7-.698-2.023-.673-2.82.125L2.393 10.91a1.04 1.04 0 00-.007 1.473l1.23 1.23a1.04 1.04 0 001.469-.003l1.655-1.655z"
      />
    </svg>
  )
}

export default SvgLink
