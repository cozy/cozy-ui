import React, { forwardRef } from 'react'

import DnDConfigWrapper from './DnDConfigWrapper'
import TableRowDnD from './TableRow'
import TableContainer from '../../../TableContainer'
import virtuosoComponents from '../virtuosoComponents'

/**
 Be aware that context is spread to every components but should not be spread to Table components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/
const virtuosoComponentsDnd = {
  ...virtuosoComponents,
  // eslint-disable-next-line no-unused-vars
  Scroller: forwardRef(({ context, ...props }, ref) => (
    <DnDConfigWrapper ref={ref}>
      <TableContainer {...props} ref={ref} />
    </DnDConfigWrapper>
  )),
  TableRow: forwardRef((props, ref) => {
    return <TableRowDnD {...props} ref={ref} />
  })
}

export default virtuosoComponentsDnd
