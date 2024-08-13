```jsx
import { useState } from 'react'
import mockApps from './_mockApps'
import { I18n } from 'cozy-ui/transpiled/react/providers/I18n'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Sections from 'cozy-ui/transpiled/react/AppSections'
import Variants from 'cozy-ui/docs/components/Variants'
import CozyClient, { CozyProvider } from "cozy-client";

const locale = {}
const client = new CozyClient()
const WrapperSections = () => {
  const handleAppClick = app => {
    alert(JSON.stringify(app, null, 2))
  }

  const initialVariants = [{ displaySpecificMaintenanceStyle: false}]

  return (
    <Variants initialVariants={initialVariants} screenshotAllVariants>
      {
      variant =>
        <Sections
            apps={mockApps}
            onAppClick={handleAppClick} displaySpecificMaintenanceStyle={variant.displaySpecificMaintenanceStyle}
        />
      }
    </Variants>
  )
}

;

<BreakpointsProvider>
  <CozyProvider client={client}>
    <I18n dictRequire={lang => locale} lang="en">
      <WrapperSections />
    </I18n>
  </CozyProvider>
</BreakpointsProvider>
```
