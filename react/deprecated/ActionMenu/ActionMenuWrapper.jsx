import React from 'react'

import useBreakpoints from '../../providers/Breakpoints'
import isTesting from '../../helpers/isTesting'
import BottomSheet from '../../BottomSheet'

import NotInlineWrapper from './NotInlineWrapper'

/**
 * @deprecated This component is depreacated, please use [ActionsMenu](#/ActionsMenu) instead.
 */
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
      <BottomSheet skipAnimation={isTesting()} backdrop onClose={onClose}>
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
