
Display the app title of an app with icon, brand name and app name. Support Twake theme only.

You can pass a child that will be used as default value is app is not supported.

### Default

```jsx
import AppTitle from 'cozy-ui/transpiled/react/AppTitle';

const slugs = ["chat", "contacts", "drive", "mail", "notes", "pass", "store", "photos", "home"];

<div class="u-flex u-flex-column">
  {
    slugs.map(slug => <AppTitle slug={slug} />)
  }
  <AppTitle slug="coachco2" />
  <AppTitle slug="coachco2">CoachCO2</AppTitle>
  <AppTitle>Drive</AppTitle>
</div>

```
