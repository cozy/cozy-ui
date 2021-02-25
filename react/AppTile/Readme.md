Component used to show an app status, can be used in
a list of apps for example in the Store.

```
import AppTile from '.'
import mockApps from '../AppSections/_mockApps'
import { I18n } from '../I18n'

const locale = {}

const app = mockApps[0];

<I18n dictRequire={lang => locale} lang="en">
  <div className='u-flex'>
    <AppTile app={app} />
    <AppTile app={{...app, maintenance: true}} />
    <AppTile app={{...app, availableVersion: true}} />
    <AppTile app={{...app, availableVersion: true}} showStatus={['maintenance']} />
  </div>
</I18n>
```
