import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const NotInlineWrapper = ({
  anchorElRef,
  popperOptions,
  placement,
  preventOverflow,
  onClose,
  children
}) => {
  const [popperElement, setPopperElement] = useState(null)
  const referenceElement = anchorElRef ? anchorElRef.current : null

  const normalOverflowModifiers = [
    {
      name: 'preventOverflow',
      enabled: false
    },
    {
      name: 'hide',
      enabled: false
    }
  ]
  const options = popperOptions || {
    placement,
    modifiers: preventOverflow ? undefined : normalOverflowModifiers
  }

  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    options
  )

  const handleClose = e => {
    if (referenceElement.contains(e.target)) return
    onClose(e)
  }
  return (
    <div
      ref={setPopperElement}
      style={{
        ...styles.popper,
        zIndex: 'var(--zIndex-popover)'
      }}
      {...attributes.popper}
    >
      <ClickAwayListener onClickAway={handleClose}>
        {children}
      </ClickAwayListener>
    </div>
  )
}

export default NotInlineWrapper
