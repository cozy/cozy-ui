import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'

import PreviousIcon from 'cozy-ui/transpiled/react/Icons/Previous'

const customStyles = () => ({
  root: {
    margin: '-1rem 0.25rem -1rem -0.5rem'
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
