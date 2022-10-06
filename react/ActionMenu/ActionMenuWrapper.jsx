import React from 'react'

import useBreakpoints from '../hooks/useBreakpoints'
import BottomDrawer from '../BottomDrawer'

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
    return <BottomDrawer onClose={onClose}>{children}</BottomDrawer>
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
