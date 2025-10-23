import React, { Fragment } from 'react'

import Backdrop from '../Backdrop'

const BackdropOrFragment = ({ showBackdrop, onClick, children }) => {
  const Comp = showBackdrop ? Backdrop : Fragment
  const props = showBackdrop
    ? {
        open: showBackdrop,
        onClick
      }
    : undefined

  return <Comp {...props}>{children}</Comp>
}

export default BackdropOrFragment
