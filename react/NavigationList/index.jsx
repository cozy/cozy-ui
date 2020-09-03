import React from 'react'
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Card from 'cozy-ui/transpiled/react/Card'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

const NavigationList = ({ children, style }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <List style={style}>{children}</List>
  ) : (
    <DesktopSectionWrapper style={style}>{children}</DesktopSectionWrapper>
  )
}

export default NavigationList

const DesktopSection = ({ children }) => (
  <Card className="u-p-0 u-ov-hidden">{children}</Card>
)

const DesktopSectionWrapper = ({ children }) => (
  <Stack spacing="s">{children}</Stack>
)

export const NavigationListSection = ({ children }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <>{children}</>
  ) : (
    <DesktopSection>{children}</DesktopSection>
  )
}
