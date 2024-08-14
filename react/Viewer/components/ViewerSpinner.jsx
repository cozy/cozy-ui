import React from 'react'

import Spinner from '../../Spinner'
import withBreakpoints from '../../helpers/withBreakpoints'

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
