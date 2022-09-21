import React from 'react'

import withBreakpoints from '../../helpers/withBreakpoints'
import Spinner from '../../Spinner'

const ViewerSpinner = ({ breakpoints: { isDesktop } }) => {
  return (
    <Spinner
      size="xxlarge"
      middle
      noMargin
      {...(isDesktop && { color: 'white' })}
    />
  )
}

export default withBreakpoints()(ViewerSpinner)
