import React, { Fragment } from 'react'

import Backdrop from '../Backdrop'

const BackdropOrFragment = ({ showBackdrop, children }) => {
  const Comp = showBackdrop ? Backdrop : Fragment
  const props = showBackdrop
    ? { style: { zIndex: 'var(--zIndex-overlay)' }, open: showBackdrop }
    : undefined

  return <Comp {...props}>{children}</Comp>
}

export default BackdropOrFragment
