import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Paper from '../../!mui/Paper'

const BottomSheetItem = forwardRef(
  (
    { children, disableGutters, disableElevation, className, ...props },
    ref
  ) => {
    return (
      <Paper
        ref={ref}
        elevation={disableElevation ? 0 : 0} // need to set correct shadow values before setting a real elevation value
        square
        className={cx({ 'u-p-1': !disableGutters }, className)}
        {...props}
      >
        {children}
      </Paper>
    )
  }
)

BottomSheetItem.displayName = 'BottomSheetItem'

BottomSheetItem.propTypes = {
  /** CSS classes */
  className: PropTypes.string,
  /** Disables default padding */
  disableGutters: PropTypes.bool,
  /** Disables default paper elevation */
  disableElevation: PropTypes.bool
}

export default React.memo(BottomSheetItem)
