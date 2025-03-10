// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/data-control.svg` to regenerate
import React from 'react'

import SvgDataControlTwake from './DataControl_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgDataControl(props) {
  if (isTwakeTheme()) return SvgDataControlTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M14.792.198A.625.625 0 0115 .667v7.999c0 .598-.122 1.189-.366 1.776a6.574 6.574 0 01-.909 1.564c-.361.454-.79.896-1.289 1.328a14.745 14.745 0 01-2.708 1.88 19.53 19.53 0 01-.979.515c-.193.09-.348.161-.465.208A.646.646 0 018 16a.643.643 0 01-.284-.063 9.866 9.866 0 01-.465-.208 19 19 0 01-.98-.515 14.743 14.743 0 01-2.707-1.88 10.006 10.006 0 01-1.29-1.328 6.538 6.538 0 01-.908-1.564A4.588 4.588 0 011 8.666V.667c0-.181.069-.337.208-.469A.69.69 0 011.7 0h12.6a.69.69 0 01.492.198zM5 6.998a1 1 0 102 0V4.414l.293.293a.997.997 0 001.414 0 .999.999 0 000-1.414l-1.999-2a1 1 0 00-1.416 0l-1.999 2a.999.999 0 101.414 1.414L5 4.413v2.586zm5.708 5.708l1.999-1.999a.999.999 0 10-1.414-1.414L11 9.586V7a1 1 0 10-2 0v2.586l-.293-.293a.999.999 0 10-1.414 1.414l1.999 1.999a.99.99 0 00.326.217.991.991 0 001.09-.217z"
      />
    </svg>
  )
}

export default SvgDataControl
