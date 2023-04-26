import React, { forwardRef } from 'react'
import MuiMenuItem from '@material-ui/core/MenuItem'

import ListItem, { LitItemPropTypes } from '../MuiCozyTheme/ListItem'

const MenuItem = forwardRef((props, ref) => {
  return (
    <MuiMenuItem ref={ref} component={ListItem} gutters="disabled" {...props} />
  )
})

MenuItem.displayName = 'MenuItem'

MenuItem.propTypes = LitItemPropTypes

export default MenuItem
