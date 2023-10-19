import React, { forwardRef } from 'react'
import MuiListItemIcon from '@material-ui/core/ListItemIcon'

import cx from 'classnames'

export const smallSize = 16
export const mediumSize = 24
export const largeSize = 32

// We add a specific class to be able to override the style in makeOverride when used in an other component
const ListItemIcon = forwardRef(({ className, ...props }, ref) => {
  return (
    <MuiListItemIcon
      {...props}
      ref={ref}
      className={cx(className, 'cozyListItemIcon')}
    />
  )
})

ListItemIcon.displayName = 'ListItemIcon'

export default ListItemIcon
