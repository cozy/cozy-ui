```jsx
import { useState } from 'react'
import mockApps from './_mockApps';
import { I18n } from '../I18n';
import { BreakpointsProvider } from '../hooks/useBreakpoints';
import Sections from 'cozy-ui/transpiled/react/AppSections';
import Variants from 'cozy-ui/docs/components/Variants';

const locale = {};

const WrapperSections = () => {
  const handleAppClick = app => {
    alert(JSON.stringify(app, null, 2))
  }

  const initialVariants = [
    { displaySpecificMaintenanceStyle: false},
    { displaySpecificMaintenanceStyle: true },
  ]

  return (
    <Variants initialVariants={initialVariants}>
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

<BreakpointsProvider>
  <I18n dictRequire={lang => locale} lang="en">
     <WrapperSections />
  </I18n>
</BreakpointsProvider>
```
