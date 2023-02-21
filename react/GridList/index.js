import React, { forwardRef } from 'react'
import ImageList from '@mui/material/ImageList'

const GridList = forwardRef((props, ref) => {
  console.warn('Deprecated, use ImageList instead')

  return <ImageList ref={ref} {...props} />
})

GridList.displayName = 'GridList'

export default GridList
