import React, { forwardRef } from 'react'
import MuiTextField from '@material-ui/core/TextField'
import { getRandomUUID } from '../../helpers/getRandomUUID'

const TextField = forwardRef(({ children, ...props }, ref) => {
  // A11Y, https://v4.mui.com/api/text-field/#props
  const uuid = getRandomUUID()

  return (
    <MuiTextField ref={ref} id={uuid} {...props}>
      {children}
    </MuiTextField>
  )
})

TextField.displayName = 'TextField'

export default TextField
