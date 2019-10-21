```
import mockApps from './_mockApps';
import Sections from './Sections';
import { I18n } from '../I18n';
const locale = {};
const handleAppClick = app => {
    alert(JSON.stringify(app, null, 2))
};

<I18n dictRequire={lang => locale} lang="en">
    <Sections apps={mockApps} onAppClick={handleAppClick} />
</I18n >
```
