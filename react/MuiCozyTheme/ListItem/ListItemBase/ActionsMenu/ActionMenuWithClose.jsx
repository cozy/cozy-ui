import React, {
  forwardRef,
  isValidElement,
  cloneElement,
  Children
} from 'react'

import ActionMenu from '../../../../ActionMenu'

/**
 * Add onClose method on every children, to close the menu when clicking them
 */
const ActionMenuWithClose = forwardRef(({ onClose, children }, ref) => {
  return (
    <ActionMenu anchorElRef={ref} onClose={onClose}>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, { onClose })
        }
        return null
      })}
    </ActionMenu>
  )
})

ActionMenuWithClose.displayName = 'ActionMenuWithClose'

export default ActionMenuWithClose
