import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ActionsMenuItem from './ActionsMenuItem'
import Divider from '../Divider'
import useBreakpoints from '../providers/Breakpoints'

const ActionsMenuMobileHeader = forwardRef(({ children, ...props }, ref) => {
  const { isMobile } = useBreakpoints()

  // To make accessibility work, we need to return a displayed item.
  // The trick is to return an empty one with no padding to simulate a display none.
  // Otherwise it will be impossible to use keyboard navigation for example
  // probably due to the inner workings of Mui
  if (!isMobile) {
    return <ActionsMenuItem {...props} ref={ref} className="u-p-0" />
  }

  return (
    <>
      <ActionsMenuItem {...props} ref={ref} isListItem>
        {children}
      </ActionsMenuItem>
      <Divider className="u-mv-half" />
    </>
  )
})

ActionsMenuMobileHeader.propTypes = {
  children: PropTypes.node
}

export default ActionsMenuMobileHeader
