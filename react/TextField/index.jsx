import React, { forwardRef } from 'react'
import MuiTextField from '@material-ui/core/TextField'

import Icon from '../Icon'
import BottomIcon from '../Icons/Bottom'
import { getRandomUUID } from '../helpers/getRandomUUID'

const TextField = forwardRef(({ children, ...props }, ref) => {
  // A11Y, https://v4.mui.com/api/text-field/#props
  const uuid = getRandomUUID()

  return (
    <MuiTextField
      ref={ref}
      id={uuid}
      SelectProps={{
        IconComponent: iconProps => (
          <Icon
            {...iconProps}
            icon={BottomIcon}
            color={
              props.disabled
                ? 'var(--disabledTextColor)'
                : 'var(--iconTextColor)'
            }
          />
        )
      }}
      {...props}
    >
      {children}
    </MuiTextField>
  )
})

TextField.displayName = 'TextField'

export default TextField
