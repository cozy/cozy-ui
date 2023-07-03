### InstallFlagshipApp dialog

You can customize links and image with `playStoreUrl`, `appStoreUrl` and `QRCode` props.

```jsx
import { useState } from 'react';

import DemoProvider from 'cozy-ui/docs/components/DemoProvider';
import { InstallFlagshipAppDialog } from 'cozy-ui/transpiled/react/CozyDialogs';
import Buttons from 'cozy-ui/transpiled/react/Buttons';

const [open, setOpen] = useState(isTesting());


<DemoProvider>
  { open && (
    <InstallFlagshipAppDialog
      onClose={() => { setOpen(false)}}
    />
  )}
  <Buttons onClick={() => { setOpen(true) }} label="Open InstallFlagshipAppDialog" />
</DemoProvider>
```
