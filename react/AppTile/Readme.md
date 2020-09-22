Component used to show an app status, can be used in
a list of apps for example in the Store.

```
import AppTile from '.'
import mockApps from '../AppSections/_mockApps'
import { I18n } from '../I18n'

const locale = {}

const app = mockApps[0];

<I18n dictRequire={lang => locale} lang="en">
  <AppTile app={app} />
</I18n>
```
