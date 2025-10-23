import React from 'react'

import BottomSheet from './BottomSheet'
import Modal from './Modal'
import useBreakpoints from '../providers/Breakpoints'

const NestedSelectResponsive = props => {
  const { isMobile } = useBreakpoints()

  const Wrapper = isMobile ? BottomSheet : Modal

  return <Wrapper {...props} />
}

export default NestedSelectResponsive
