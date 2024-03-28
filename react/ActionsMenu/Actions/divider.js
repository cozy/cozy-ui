import React, { forwardRef } from 'react'

import Divider from '../../Divider'

export const divider = () => {
  return {
    name: 'divider',
    displayInSelectionBar: false,
    Component: forwardRef((props, ref) => {
      return <Divider className="u-mv-half" ref={ref} />
    })
  }
}
