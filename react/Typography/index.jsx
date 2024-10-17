import MuiTypography from '@material-ui/core/Typography'
import React, { forwardRef } from 'react'

/**
 * @typedef TypographyPropTypes
 * @property {string} [color] - The color of the text.
 * @property {string} [variant] - The variant of the text.
 * @property {React.ReactNode} children - The content of the component.
 */

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, TypographyPropTypes & MuiTypography>
 */
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
