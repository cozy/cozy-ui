import React, { forwardRef } from 'react'
import MuiTextField from '@material-ui/core/TextField'

const TextField = forwardRef(({ children, ...props }, ref) => {
  // A11Y, https://v4.mui.com/api/text-field/#props
  const uuid = crypto.randomUUID()

  return (
    <MuiTextField ref={ref} id={uuid} {...props}>
      {children}
    </MuiTextField>
  )
})

TextField.displayName = 'TextField'

export default TextField
