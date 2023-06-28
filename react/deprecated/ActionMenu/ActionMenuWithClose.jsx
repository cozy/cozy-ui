import React, {
  forwardRef,
  isValidElement,
  cloneElement,
  Children
} from 'react'

import ActionMenu from '.'

/**
 * Add onClose method on every children, to close the menu when clicking them
 * @deprecated This component is depreacated, please use [ActionsMenu](#/ActionsMenu) instead.
 */
const ActionMenuWithClose = forwardRef(
  ({ onClose, children, ...props }, ref) => {
    return (
      <ActionMenu anchorElRef={ref} onClose={onClose} {...props}>
        {Children.map(children, child => {
          if (isValidElement(child)) {
            return cloneElement(child, { onClose })
          }
          return null
        })}
      </ActionMenu>
    )
  }
)

ActionMenuWithClose.displayName = 'ActionMenuWithClose'

export default ActionMenuWithClose
