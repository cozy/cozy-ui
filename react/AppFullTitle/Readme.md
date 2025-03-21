
Display the full title of an app with icon, brand name and app name. Support Twake theme only.

It fallbacks on AppTitle with AppTitle API if app is not supported.

### Default

```jsx
import AppFullTitle from 'cozy-ui/transpiled/react/AppFullTitle';

const slugs = ["chat", "drive", "mail", "notes", "pass", "store", "home"];

<>
  {
    slugs.map(slug => <AppFullTitle slug={slug} />)
  }
  <AppFullTitle slug="coachco2" />
  <AppFullTitle slug="coachco2">CoachCO2</AppFullTitle>
</>

```
