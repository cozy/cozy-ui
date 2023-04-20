import React from 'react'

import Icon from '../Icon'
import useScroll from '../hooks/useScroll'
import Fab from '.'

const ExtendableFab = ({
  label,
  icon,
  follow,
  topLimit = 50,
  scrollOptions,
  ...rest
}) => {
  const { scrollTop } = useScroll(follow, scrollOptions)
  const isBelowTopLimit = scrollTop < topLimit

  return (
    <Fab
      aria-label={label}
      variant={isBelowTopLimit ? 'extended' : 'circular'}
      {...rest}
    >
      <Icon icon={icon} {...(isBelowTopLimit && { className: 'u-mr-half' })} />
      {isBelowTopLimit && label}
    </Fab>
  )
}

export default ExtendableFab
