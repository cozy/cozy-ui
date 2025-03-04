import AvatarGroupMui from '@material-ui/lab/AvatarGroup'
import React from 'react'

import { sizeToNb, sizeToFontSize } from '../Avatar/helpers'
import { makeStyles } from '../styles'

export const spacingByAvatarSize = {
  xs: 4,
  s: 6,
  m: 6,
  l: 10,
  xl: 16
}

const useStyles = makeStyles({
  avatar: {
    width: ({ size }) => sizeToNb[size],
    height: ({ size }) => sizeToNb[size],
    fontSize: ({ size }) => sizeToFontSize[size]
  }
})

const AvatarGroup = ({ size, ...props }) => {
  const classes = useStyles({ size })

  return (
    <AvatarGroupMui
      spacing={spacingByAvatarSize[size]}
      classes={classes}
      {...props}
    />
  )
}

AvatarGroup.defaultProps = {
  size: 'm'
}

export default AvatarGroup
