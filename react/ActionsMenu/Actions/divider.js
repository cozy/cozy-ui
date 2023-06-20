import React, { forwardRef } from 'react'

import Divider from '../../MuiCozyTheme/Divider'

export const divider = () => {
  return {
    name: 'divider',
    Component: forwardRef((props, ref) => {
      return <Divider className="u-mv-half" ref={ref} />
    })
  }
}
