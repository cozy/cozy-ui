import React, { forwardRef } from 'react'
import MuiTypography from '@mui/material/Typography'

const Typography = forwardRef(({ color, variant, children, ...props }, ref) => {
  if (color) {
    console.warn(
      '`color` is no longer a valid prop for Typography component. You should use a different way to colorize it.'
    )
  }

  const madeColor =
    color || (variant === 'caption' ? 'textSecondary' : 'textPrimary')

  return (
    <MuiTypography ref={ref} variant={variant} color={madeColor} {...props}>
      {children}
    </MuiTypography>
  )
})

export default Typography
