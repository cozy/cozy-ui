import React, { forwardRef } from 'react'

import Fab from '.'
import Icon from '../Icon'
import useScroll from '../hooks/useScroll'

const ExtendableFab = forwardRef(
  ({ label, icon, follow, topLimit = 50, scrollOptions, ...rest }, ref) => {
    const { scrollTop } = useScroll(follow, scrollOptions)
    const isBelowTopLimit = scrollTop < topLimit

    return (
      <Fab
        ref={ref}
        aria-label={label}
        variant={isBelowTopLimit ? 'extended' : 'circular'}
        {...rest}
      >
        <Icon
          icon={icon}
          {...(isBelowTopLimit && { className: 'u-mr-half' })}
        />
        {isBelowTopLimit && label}
      </Fab>
    )
  }
)

ExtendableFab.displayName = 'ExtendableFab'

export default ExtendableFab
