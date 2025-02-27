// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/attention.svg` to regenerate
import React from 'react'

import SvgAttentionTwake from './Attention_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgAttention(props) {
  if (isTwakeTheme()) return SvgAttentionTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M8 2l8 12H0L8 2zM7 6v4h2V6H7zm0 5v2h2v-2H7z"
      />
    </svg>
  )
}

export default SvgAttention
