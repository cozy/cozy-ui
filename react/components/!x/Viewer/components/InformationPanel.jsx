import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'

import { withStyles } from '../../../styles'

export const infoWidth = '22rem'

const customStyles = () => ({
  drawer: {
    width: infoWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: infoWidth,
    backgroundColor: 'var(--defaultBackgroundColor)'
  }
})

const InformationPanel = ({ classes, children }) => {
  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
      anchor="right"
    >
      {children}
    </Drawer>
  )
}

InformationPanel.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element
}

export default withStyles(customStyles)(InformationPanel)
