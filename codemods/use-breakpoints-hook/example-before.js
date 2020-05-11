import React from 'react'
import compose from 'lodash/flowRight'
import { withBreakpoints } from 'cozy-ui/transpiled/react'

const MobileComponent = () => <>Mobile</>
const DesktopComponent = () => <>Desktop</>

const Component = ({ breakpoints: { isMobile, isDesktop } }) => {
  return isMobile ? (
    <MobileComponent />
  ) : isDesktop ? (
    <DesktopComponent />
  ) : null
}

export default compose(
  withBreakpoints(),
  otherHoc
)(Component)
