```
import mockApps from './_mockApps';
import Sections from 'cozy-ui/transpiled/react/AppSections';
import { I18n } from '../I18n';
import { BreakpointsProvider } from '../hooks/useBreakpoints';

const locale = {};
const handleAppClick = app => {
    alert(JSON.stringify(app, null, 2))
};

<BreakpointsProvider>
  <I18n dictRequire={lang => locale} lang="en">
      <Sections apps={mockApps} onAppClick={handleAppClick} />
  </I18n >
</BreakpointsProvider>
```
