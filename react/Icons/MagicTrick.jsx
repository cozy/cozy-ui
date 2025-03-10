// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/magic-trick.svg` to regenerate
import React from 'react'

import SvgMagicTrickTwake from './MagicTrick_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgMagicTrick(props) {
  if (isTwakeTheme()) return SvgMagicTrickTwake(props)
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M16.236 5.87a.631.631 0 00-.893 0L.185 21.026a.631.631 0 000 .893l1.895 1.895a.629.629 0 00.893 0L18.13 8.657a.631.631 0 000-.893l-1.895-1.895zm-1.71 4.605l-1.001-1.001 2.264-2.265 1.002 1.002-2.265 2.264zm-.2-7.981l.648.216.216.647a.631.631 0 001.199 0l.216-.647.648-.216a.631.631 0 000-1.198l-.648-.216-.216-.648a.631.631 0 00-1.199 0l-.216.648-.648.216a.631.631 0 000 1.198zM9.274 5.02l.648.216.216.648a.631.631 0 001.198 0l.216-.648.648-.216a.631.631 0 000-1.198l-.648-.216-.216-.648a.631.631 0 00-1.198 0l-.216.648-.648.216a.631.631 0 000 1.198zm13.031 6.38l-.648-.215-.216-.648a.631.631 0 00-1.198 0l-.216.648-.648.216a.631.631 0 000 1.198l.648.216.216.648a.631.631 0 001.198 0l.216-.648.648-.216a.631.631 0 000-1.198zm1.263-6.946l-1.121-.374-.374-1.122a.631.631 0 00-1.198 0L20.5 4.08l-1.122.374a.631.631 0 000 1.198l1.122.374.374 1.12a.631.631 0 001.198 0l.374-1.12 1.121-.374a.631.631 0 000-1.198z" />
    </svg>
  )
}

export default SvgMagicTrick
