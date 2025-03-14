// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/permissions/identities.svg` to regenerate
import React from 'react'

import SvgIdentitiesTwake from './Identities_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgIdentities(props) {
  if (isTwakeTheme()) return SvgIdentitiesTwake(props)
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#D6D8DA"
          d="M48 40a2 2 0 01-2 2H36v-4.5c0-.83-.66-1.5-1.5-1.5H33c-.83 0-1.5.67-1.5 1.5V42h-15v-4.5c0-.83-.66-1.5-1.5-1.5h-1.5c-.83 0-1.5.67-1.5 1.5V42H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h44a2 2 0 012 2v32z"
        />
        <path
          fill="#5D6165"
          d="M25.5 13.5h9V15h-9v-1.5zm0 4.5H42v1.5H25.5V18zm0 4.5H42V24H25.5v-1.5zm0 4.5H42v1.5H25.5V27zm-12-4.88c-2.49 0-4.5-2.26-4.5-5.06S11.01 12 13.5 12s4.5 2.27 4.5 5.06c0 2.8-2.01 5.06-4.5 5.06zm-9 5.63c0-1.13 2.25-4.5 4.5-4.5s1.13 1.13 4.5 1.13c3.38 0 2.25-1.13 4.5-1.13s4.5 3.38 4.5 4.5c0 1.13 0 2.25-1.13 2.25H5.63C4.5 30 4.5 28.87 4.5 27.75z"
        />
      </g>
    </svg>
  )
}

export default SvgIdentities
