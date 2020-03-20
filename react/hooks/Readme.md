#### useBrowserOffline

Returns `true` if the browser is offline. It happens when it detects that there 
is no network connection or when the user explictly requests to work offline.
It does not garantee that the browser will successfully send requests to the 
server.

```jsx
import { useBrowserOffline } from 'cozy-ui/react';
const isOffline = useBrowserOffline();
<p>
  {isOffline ? 'Offline: we cannot reach the server' : 'Online: we probably can reach the server'}
</p>
```
