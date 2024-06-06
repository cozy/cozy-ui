import React from 'react'
import cx from 'classnames'

import { BottomSheetItem } from '../BottomSheet'

const BottomSheetHeader = ({ className, headerContentRef, children }) => {
  return (
    <BottomSheetItem
      ref={headerContentRef}
      className={cx('u-flex u-flex-items-center', className)}
      disableGutters
      disableElevation
    >
      {children}
    </BottomSheetItem>
  )
}
BottomSheetHeader.displayName = 'BottomSheetHeader'

export default BottomSheetHeader
