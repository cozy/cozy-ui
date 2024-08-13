import React, { forwardRef } from 'react'
import MuiTextField from '@material-ui/core/TextField'

import Icon from '../Icon'
import BottomIcon from '../Icons/Bottom'
import { getRandomUUID } from '../helpers/getRandomUUID'
import { useBreakpoints } from '../providers/Breakpoints'
import MobileSelect from './MobileSelect'

const TextField = forwardRef(({ select, options, children, ...props }, ref) => {
  // A11Y, https://v4.mui.com/api/text-field/#props
  const uuid = getRandomUUID()
  const { isMobile } = useBreakpoints()

  // options is not required to avoid breaking change but needed to have the mobile behavior
  if (isMobile && select && options) {
    return (
      <MobileSelect ref={ref} id={uuid} options={options} {...props}>
        {children}
      </MobileSelect>
    )
  }

  return (
    <MuiTextField
      ref={ref}
      id={uuid}
      select={select}
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
