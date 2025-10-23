Component used to show an app status, can be used in
a list of apps for example in the Store.

```jsx
import AppTile from 'cozy-ui/transpiled/react/AppTile'
import mockApps from '../AppSections/_mockApps'
import { I18n } from 'cozy-ui/transpiled/react/providers/I18n'
import Grid from 'cozy-ui/transpiled/react/Grid'

const locale = {}
const app = mockApps[0]

;

<I18n dictRequire={lang => locale} lang="en">
  <Grid container>
    <AppTile app={app} />
    <AppTile app={{...app, maintenance: true}} />
    <AppTile app={{...app, maintenance: true}} displaySpecificMaintenanceStyle={true} />
    <AppTile app={{...app, availableVersion: true}} />
    <AppTile app={{...app, availableVersion: true}} showStatus={['maintenance']} />
  </Grid>
</I18n>
```
