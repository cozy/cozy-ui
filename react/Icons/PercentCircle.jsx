// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/percent-circle.svg` to regenerate
import React from 'react'

import SvgPercentCircleTwake from './PercentCircle_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgPercentCircle(props) {
  if (isTwakeTheme()) return SvgPercentCircleTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM9.9 4h1.2l-5 8H4.9l5-8zm1.704 6.604a.82.82 0 00.25-.604.82.82 0 00-.25-.604.82.82 0 00-.604-.25.821.821 0 00-.605.25.82.82 0 00-.25.604.82.82 0 00.25.604c.166.167.368.25.605.25a.82.82 0 00.604-.25zm.813.81A1.925 1.925 0 0111 12a1.925 1.925 0 01-1.414-.586A1.926 1.926 0 019 10c0-.552.195-1.023.586-1.414C9.976 8.195 10.448 8 11 8c.551 0 1.023.195 1.414.586.39.391.586.862.586 1.414 0 .552-.195 1.023-.583 1.414zm-6.813-4.81A.818.818 0 005.855 6a.818.818 0 00-.25-.604A.818.818 0 005 5.145a.818.818 0 00-.605.251.82.82 0 00-.25.604.82.82 0 00.25.604.818.818 0 00.605.251.818.818 0 00.604-.251zm.813.81C6.027 7.805 5.555 8 5 8a1.925 1.925 0 01-1.414-.586A1.926 1.926 0 013 6c0-.552.195-1.023.586-1.414C3.976 4.195 4.448 4 5 4c.551 0 1.023.195 1.414.586C6.804 4.977 7 5.448 7 6c0 .552-.195 1.023-.583 1.414z"
      />
    </svg>
  )
}

export default SvgPercentCircle
