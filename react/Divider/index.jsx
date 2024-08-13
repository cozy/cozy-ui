import React, { forwardRef } from 'react'
import MuiDivider from '@material-ui/core/Divider'

import { withStyles } from '../styles'

import TextDivider from './TextDivider'

/**
 * @desc If this component is provided a string children, it will render a `<TextDivider>` component
 * and will handle the `textAlign` prop that accepts a `"center"` or undefined value
 */
const Divider = forwardRef((props, ref) =>
  typeof props.children === 'string' ? (
    <TextDivider {...props} ref={ref} />
  ) : (
    <MuiDivider {...props} ref={ref} />
  )
)

Divider.displayName = 'Divider'

Divider.propTypes = {
  ...TextDivider.propTypes
}

export default Divider

const defaultValues = {
  borderRadius: 6,
  dialog: {
    sm: {
      padding: 16
    },
    md: {
      padding: 32
    }
  }
}

export const DeprecatedDivider = withStyles(theme => ({
  /**
   * calcs are made since we have defaultMargin on the Dialog so
   * we need to remove the left margin and add the width of 2 margins
   * in order to have the divider takes the full width of the Modal
   */
  root: {
    [theme.breakpoints.down('md')]: {
      width: `calc(100% + ${defaultValues.dialog.sm.padding}*2px)`,
      marginLeft: `-${defaultValues.dialog.sm.padding}px`
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(100% + ${defaultValues.dialog.md.padding}*2px)`,
      marginLeft: `-${defaultValues.dialog.md.padding}px`
    }
  }
}))(Divider)
