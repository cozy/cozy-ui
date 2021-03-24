import React from 'react'

import useBreakpoints from '../hooks/useBreakpoints'
import Spinner from '../Spinner'

const ViewerSpinner = () => {
  const { isDesktop } = useBreakpoints()

  return (
    <Spinner
      size="xxlarge"
      middle
      noMargin
      {...(isDesktop && { color: 'white' })}
    />
  )
}

export default ViewerSpinner
