import { Icon, Bottom } from '@linagora/twake-icons'
import MuiTextField from '@material-ui/core/TextField'
import React, { forwardRef } from 'react'

import MobileSelect from './MobileSelect'
import { getRandomUUID } from '../helpers/getRandomUUID'
import { useBreakpoints } from '../providers/Breakpoints'

const TextField = forwardRef(
  ({ select, SelectProps, options, children, ...props }, ref) => {
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
          ...SelectProps,
          IconComponent: iconProps => (
            <Icon
              {...iconProps}
              icon={Bottom}
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
  }
)

TextField.displayName = 'TextField'

export default TextField
