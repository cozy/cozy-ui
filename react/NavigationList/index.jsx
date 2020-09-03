import React from 'react'
import cx from 'classnames'
import List from '../MuiCozyTheme/List'
import Stack from '../Stack'
import Card from '../Card'
import { NewSubTitle } from '../Text'
import useBreakpoints from '../hooks/useBreakpoints'
import ListSubheader from '../MuiCozyTheme/ListSubheader'
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
    <NewSubTitle className="u-coolGrey u-mb-1">{children}</NewSubTitle>
  )
}
