import React from 'react'
import cx from 'classnames'
import List from '../List'
import Stack from '../Stack'
import Card from '../Card'
import Typography from '../Typography'
import useBreakpoints from '../providers/Breakpoints'
import ListSubheader from '../ListSubheader'
import styles from './styles.styl'

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
  <Card className="u-p-0 u-ov-hidden u-mb-1-half">{children}</Card>
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
