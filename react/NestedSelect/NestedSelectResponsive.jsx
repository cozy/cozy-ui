import React from 'react'

import useBreakpoints from '../providers/Breakpoints'
import BottomSheet from './BottomSheet'
import Modal from './Modal'

const NestedSelectResponsive = props => {
  const { isMobile } = useBreakpoints()

  const Wrapper = isMobile ? BottomSheet : Modal

  return <Wrapper {...props} />
}

export default NestedSelectResponsive
