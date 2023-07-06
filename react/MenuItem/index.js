import React, { forwardRef } from 'react'
import MuiMenuItem from '@material-ui/core/MenuItem'

import ListItem, { LitItemPropTypes } from '../ListItem'

const MenuItem = forwardRef(({ component, ...props }, ref) => {
  return (
    <MuiMenuItem
      ref={ref}
      component={ListItem}
      componentElement={component}
      gutters="disabled"
      {...props}
    />
  )
})

MenuItem.displayName = 'MenuItem'

MenuItem.propTypes = LitItemPropTypes

export default MenuItem
