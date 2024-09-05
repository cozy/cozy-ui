import Tab from '@material-ui/core/Tab'
import MuiTabs from '@material-ui/core/Tabs'
import React from 'react'

import useBreakpoints from '../providers/Breakpoints'

const Tabs = props => {
  const { isMobile } = useBreakpoints()
  return <MuiTabs variant={isMobile ? 'fullWidth' : undefined} {...props} />
}

Tabs.defaultProps = {
  textColor: 'primary',
  TabIndicatorProps: { color: 'primary' }
}

export { Tabs, Tab }
