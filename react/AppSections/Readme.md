```jsx
import { useState } from 'react'
import mockApps from './_mockApps'
import { I18n } from 'cozy-ui/transpiled/react/providers/I18n'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Sections from 'cozy-ui/transpiled/react/AppSections'
import Variants from 'cozy-ui/docs/components/Variants'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

;

const WrapperSections = () => {
  const handleAppClick = app => {
    alert(JSON.stringify(app, null, 2))
  }

  const initialVariants = [{ displaySpecificMaintenanceStyle: false}]

  return (
    <Variants initialVariants={initialVariants} screenshotAllVariants>
      {variant =>
        <Sections
          apps={mockApps}
          onAppClick={handleAppClick} displaySpecificMaintenanceStyle={variant.displaySpecificMaintenanceStyle}
        />}
    </Variants>
  )
}

;

<DemoProvider>
  <WrapperSections />
</DemoProvider>
```
