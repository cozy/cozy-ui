import React, { forwardRef } from 'react'
import ImageListItemBar from '@mui/material/ImageListItemBar'

const GridListTileBar = forwardRef((props, ref) => {
  console.warn('Deprecated, use ImageListItemBar instead')

  return <ImageListItemBar ref={ref} {...props} />
})

GridListTileBar.displayName = 'GridListTileBar'

export default GridListTileBar
