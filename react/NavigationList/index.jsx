import cx from 'classnames'
import React from 'react'

import styles from './styles.styl'
import Box from '../Box'
import List from '../List'
import ListSubheader from '../ListSubheader'
import Stack from '../Stack'
import Typography from '../Typography'
import useBreakpoints from '../providers/Breakpoints'

const NavigationList = ({ children, style, className }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <List className={className} style={style}>
      {children}
    </List>
  ) : (
    <Stack
      spacing="s"
      className={cx(styles.DesktopSectionWrapper, className)}
      style={style}
    >
      {children}
    </Stack>
  )
}

export default NavigationList

const DesktopSection = ({ children }) => (
  <Box
    display="block"
    className="u-ov-hidden u-mb-1-half"
    border={1}
    borderColor="var(--dividerColor)"
    borderRadius={8}
  >
    {children}
  </Box>
)

export const NavigationListSection = ({ children }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <>{children}</>
  ) : (
    <DesktopSection>{children}</DesktopSection>
  )
}

export const NavigationListHeader = ({ children }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <ListSubheader>{children}</ListSubheader>
  ) : (
    <Typography variant="subtitle1" color="textSecondary" className="u-mb-1">
      {children}
    </Typography>
  )
}
