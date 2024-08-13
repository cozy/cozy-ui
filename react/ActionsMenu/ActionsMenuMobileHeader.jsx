import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ActionsMenuItem from './ActionsMenuItem'
import Divider from '../Divider'
import useBreakpoints from '../providers/Breakpoints'

const ActionsMenuMobileHeader = forwardRef(({ children, ...props }, ref) => {
  const { isMobile } = useBreakpoints()

  if (!isMobile) {
    return null
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

ActionsMenuMobileHeader.displayName = 'ActionsMenuMobileHeader'

ActionsMenuMobileHeader.propTypes = {
  children: PropTypes.node
}

export default ActionsMenuMobileHeader
