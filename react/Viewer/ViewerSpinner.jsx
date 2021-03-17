import React from 'react'

import useBreakpoints from '../hooks/useBreakpoints'
import Spinner from '../Spinner'

const ViewerSpinner = () => {
  const { isMobile } = useBreakpoints()

  return (
    <Spinner
      size="xxlarge"
      middle
      noMargin
      {...(!isMobile && { color: 'white' })}
    />
  )
}

export default ViewerSpinner
