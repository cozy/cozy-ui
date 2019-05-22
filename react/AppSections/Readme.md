```
const mockApps = require('./_mockApps').default;
const Sections = require('./Sections').default;
const { I18n } = require('../I18n')
const locale = {};
const handleAppClick = app => {
    alert(JSON.stringify(app, null, 2))
};

<I18n dictRequire={lang => locale}>
    <Sections apps={mockApps} onAppClick={handleAppClick} />
</I18n >
```
