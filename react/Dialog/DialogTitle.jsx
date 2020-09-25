import React from 'react'
import MUIDialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'
import AppTitle from '../AppTitle'
import styles from './styles.styl'

const DialogTitle = ({ children, classes }) => {
  return (
    <MUIDialogTitle disableTypography classes={classes}>
      {/*
        The h6 tag is used here since the modal title is always deeply nested in the DOM.
        This is what MuiDialogTitle originally uses for its inner Typography component.
      */}
      <AppTitle className={styles.DialogTitle} tag="h6" id="dialog-title">
        {children}
      </AppTitle>
    </MUIDialogTitle>
  )
}

export default withStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0
  }
})(DialogTitle)
