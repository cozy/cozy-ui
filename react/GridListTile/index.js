import React, { forwardRef } from 'react'
import ImageListItem from '@mui/material/ImageListItem'

const GridListTile = forwardRef((props, ref) => {
  console.warn('Deprecated, use ImageListItem instead')

  return <ImageListItem ref={ref} {...props} />
})

GridListTile.displayName = 'GridListTile'

export default GridListTile
