import React from 'react'

import BottomDrawer from '../BottomDrawer'
import NotInlineWrapper from './NotInlineWrapper'

const ActionMenuWrapper = ({
  inline,
  onClose,
  anchorElRef,
  popperOptions,
  placement,
  preventOverflow,
  children
}) => {
  if (!inline) {
    return <BottomDrawer onClose={onClose}>{children}</BottomDrawer>
  }

  return (
    <NotInlineWrapper
      anchorElRef={anchorElRef}
      popperOptions={popperOptions}
      placement={placement}
      preventOverflow={preventOverflow}
      onClose={onClose}
    >
      {children}
    </NotInlineWrapper>
  )
}

export default ActionMenuWrapper
