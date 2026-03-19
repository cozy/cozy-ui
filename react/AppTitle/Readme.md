Display the app title of an app with app icon, brand icon and app text icon.

### Default

```jsx
import AppTitle from 'cozy-ui/transpiled/react/AppTitle';
import DriveIcon from 'cozy-ui/transpiled/react/Icons/Drive';

// This should be an a nice icon with "Drive" written with Twake font and gradient
const DriveTextMock = () => <div>Drive</div>;

<div className="u-flex u-flex-column">
  <AppTitle appIcon={DriveIcon} appTextIcon={DriveTextMock} />
</div>
```
