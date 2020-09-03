A navigation list is used to present choices of navigation to the user.
It will be rendered slightly differently on desktop or mobile, with
desktop sections rendered into cards while on mobile, it will rendered
simply as a list with subheaders.

```
import NavigationListExample from './example';
import { BreakpointsProvider } from '../hooks/useBreakpoints';
import MuiCozyTheme from '../MuiCozyTheme';

<MuiCozyTheme>
  <BreakpointsProvider>
    <NavigationListExample />
  </BreakpointsProvider>
</MuiCozyTheme>
```
