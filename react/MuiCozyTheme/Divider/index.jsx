import React from 'react'
import MuiDivider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import { defaultValues, normalTheme } from '../theme'
import TextDivider from './TextDivider'

/**
 * @desc If this component is provided a string children, it will render a `<TextDivider>` component
 * and will handle the `textAlign` prop that accepts a `"center"` or undefined value
 */
const Divider = props =>
  typeof props.children === 'string' ? (
    <TextDivider {...props} />
  ) : (
    <MuiDivider {...props} />
  )

Divider.propTypes = {
  ...TextDivider.propTypes
}

export default Divider

export const DeprecatedDivider = withStyles({
  /**
   * calcs are made since we have defaultMargin on the Dialog so
   * we need to remove the left margin and add the width of 2 margins
   * in order to have the divider takes the full width of the Modal
   */
  root: {
    [normalTheme.breakpoints.down('md')]: {
      width: `calc(100% + ${defaultValues.dialog.sm.padding}*2px)`,
      marginLeft: `-${defaultValues.dialog.sm.padding}px`
    },
    [normalTheme.breakpoints.up('md')]: {
      width: `calc(100% + ${defaultValues.dialog.md.padding}*2px)`,
      marginLeft: `-${defaultValues.dialog.md.padding}px`
    }
  }
})(Divider)
