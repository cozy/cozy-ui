import React from 'react'

import useBreakpoints from '../hooks/useBreakpoints'
import BottomSheet from '../BottomSheet'

import NotInlineWrapper from './NotInlineWrapper'

const ActionMenuWrapper = ({
  onClose,
  anchorElRef,
  popperOptions,
  placement,
  preventOverflow,
  children
}) => {
  const { isMobile } = useBreakpoints()

  if (isMobile) {
    return (
      <BottomSheet backdrop onClose={onClose}>
        {children}
      </BottomSheet>
    )
  }

  return (
    <NotInlineWrapper
      anchorElRef={anchorElRef}
      popperOptions={popperOptions}
      onClose={onClose}
      placement={placement}
      preventOverflow={preventOverflow}
    >
      {children}
    </NotInlineWrapper>
  )
}

export default ActionMenuWrapper
