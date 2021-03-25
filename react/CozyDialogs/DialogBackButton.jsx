import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import IconButton from '../IconButton'
import Icon from '../Icon'

import PreviousIcon from '../Icons/Previous'

const customStyles = () => ({
  root: {
    margin: '-1.1rem 0.25rem -0.9rem -0.5rem'
  }
})

const DialogBackButton = ({ classes, onClick }) => {
  return (
    <IconButton className={classes.root} onClick={onClick}>
      <Icon icon={PreviousIcon} />
    </IconButton>
  )
}

DialogBackButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default withStyles(customStyles)(DialogBackButton)
