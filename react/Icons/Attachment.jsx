// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/attachment.svg` to regenerate
import React from 'react'

import SvgAttachmentTwake from './Attachment_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgAttachment(props) {
  if (isTwakeTheme()) return SvgAttachmentTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M2.43 14.43C.457 12.457.337 9.385 2.16 7.56l6.3-6.3c1.327-1.325 3.563-1.237 4.997.197 1.434 1.434 1.522 3.67.196 4.996l-5.1 5.1c-.828.828-2.227.773-3.123-.123-.895-.895-.95-2.294-.122-3.122l4.5-4.5 1.298 1.298L6.552 9.66c-.33.33.319.979.649.649l5.154-5.154c.66-.66.616-1.784-.098-2.498-.714-.714-1.838-.758-2.498-.098l-6.3 6.3c-1.158 1.158-1.081 3.119.171 4.371 1.253 1.253 3.214 1.33 4.372.172l5.7-5.7L15 9l-5.7 5.7c-1.824 1.824-4.897 1.703-6.87-.27z"
      />
    </svg>
  )
}

export default SvgAttachment
