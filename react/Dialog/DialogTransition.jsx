import React from 'react'
import MuiSlide from '@material-ui/core/Slide'
import MuiGrow from '@material-ui/core/Grow'

import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

const DialogTransition = props => {
  const { isMobile } = useBreakpoints()

  return isMobile ? (
    <MuiSlide direction="up" {...props} />
  ) : (
    <MuiGrow {...props} />
  )
}

export default DialogTransition
