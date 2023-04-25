import React from 'react'

import Divider from '../../MuiCozyTheme/Divider'

export const divider = () => {
  return {
    name: 'divider',
    Component: function divider() {
      return <Divider className="u-mv-half" />
    }
  }
}
