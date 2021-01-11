import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'

export const infoWidth = '22rem'

const styles = () => ({
  drawer: {
    width: infoWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: infoWidth
  }
})

const InformationPanel = ({ classes }) => {
  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
      anchor="right"
    />
  )
}

export default withStyles(styles)(InformationPanel)
