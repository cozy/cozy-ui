import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'
import MuiListSubheader from '@material-ui/core/ListSubheader'

import { makeStyles } from '../styles'

const useStyles = makeStyles({
  gutters: {
    paddingLeft: ({ guttersValue }) => guttersValue,
    paddingRight: ({ guttersValue }) => guttersValue
  }
})

// Return gutters size
const useGutters = ({ gutters }) => {
  return gutters === 'double' ? 32 : 16
}

const ListSubheader = forwardRef((props, ref) => {
  const guttersValue = useGutters(props)
  const styles = useStyles({ guttersValue })

  return (
    <MuiListSubheader
      {...props}
      ref={ref}
      classes={merge(props.classes, styles)}
      disableGutters={props.disableGutters || props.gutters === 'disabled'}
    />
  )
})

ListSubheader.displayName = 'ListSubheader'

ListSubheader.defaultProps = {
  gutters: 'default'
}

ListSubheader.propTypes = {
  gutters: PropTypes.oneOf(['disabled', 'double', 'default'])
}

export default ListSubheader
