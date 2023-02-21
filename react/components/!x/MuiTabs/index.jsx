import React from 'react'
import MuiTabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useBreakpoints from '../../hooks/useBreakpoints'

const Tabs = props => {
  const { isMobile } = useBreakpoints()
  return <MuiTabs variant={isMobile ? 'fullWidth' : undefined} {...props} />
}

export { Tabs, Tab }
