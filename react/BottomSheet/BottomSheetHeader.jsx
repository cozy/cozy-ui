import React from 'react'
import cx from 'classnames'

import Paper from 'cozy-ui/transpiled/react/Paper'

const BottomSheetHeader = ({ className, headerContentRef, children }) => {
  return (
    <Paper
      ref={headerContentRef}
      className={cx('u-flex u-flex-items-center', className)}
      elevation={0}
      square
    >
      {children}
    </Paper>
  )
}

BottomSheetHeader.defaultProps = {
  classes: {}
}

export default BottomSheetHeader
