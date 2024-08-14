import MuiTypography from '@material-ui/core/Typography'
import React, { forwardRef } from 'react'

const Typography = forwardRef(({ color, variant, children, ...props }, ref) => {
  const madeColor =
    color || (variant === 'caption' ? 'textSecondary' : 'textPrimary')

  return (
    <MuiTypography ref={ref} variant={variant} color={madeColor} {...props}>
      {children}
    </MuiTypography>
  )
})

export default Typography
