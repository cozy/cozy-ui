import React from 'react'
import { useBreakpoints } from 'cozy-ui/transpiled/react'

const MobileComponent = () => <>Mobile</>
const DesktopComponent = () => <>Desktop</>

const Component = () => {
  const { isMobile, isDesktop } = useBreakpoints()
  return isMobile ? (
    <MobileComponent />
  ) : isDesktop ? (
    <DesktopComponent />
  ) : null
}

export default otherHoc(Component)
