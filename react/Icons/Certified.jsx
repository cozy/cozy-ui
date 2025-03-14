// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/certified.svg` to regenerate
import React from 'react'

import SvgCertifiedTwake from './Certified_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgCertified(props) {
  if (isTwakeTheme()) return SvgCertifiedTwake(props)
  return (
    <svg viewBox="0 0 12 12" {...props}>
      <path d="M11.806 5.468a.782.782 0 010 1.032l-.714.812a.782.782 0 00-.19.588L11 8.976a.782.782 0 01-.606.835l-1.057.24a.782.782 0 00-.5.363l-.553.93a.782.782 0 01-.98.32l-.995-.427a.782.782 0 00-.619 0l-.993.43a.782.782 0 01-.983-.318l-.553-.929a.782.782 0 00-.499-.363l-1.057-.24A.782.782 0 011 8.982L1.1 7.9a.782.782 0 00-.191-.587l-.715-.814a.782.782 0 010-1.031l.715-.819a.782.782 0 00.19-.587L1 2.988a.782.782 0 01.608-.836l1.054-.236a.782.782 0 00.501-.364l.552-.93a.783.783 0 01.982-.318l.995.427c.197.085.42.085.617 0l.995-.427a.782.782 0 01.981.319l.553.93c.11.185.29.316.5.363l1.057.24a.782.782 0 01.606.835l-.1 1.076c-.02.214.05.427.191.588l.714.813zm-7.526.001a.75.75 0 00-1.06 1.062l1.5 1.497a.75.75 0 001.06 0l3-2.997a.75.75 0 10-1.06-1.062L5.25 6.42l-.97-.95z" />
    </svg>
  )
}

export default SvgCertified
