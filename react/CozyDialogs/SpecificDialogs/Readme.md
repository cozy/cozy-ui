### AllowLocationDialog dialog

```jsx
import { useState } from 'react'

import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import { AllowLocationDialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import Buttons from 'cozy-ui/transpiled/react/Buttons'

const [open, setOpen] = useState(isTesting())

;

<DemoProvider>
  { open && (
    <AllowLocationDialog
      onClose={() => { setOpen(false)}}
    />
  )}
  <Buttons onClick={() => { setOpen(true) }} label="Open AllowLocationDialog" />
</DemoProvider>
```

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

### ShortcutDialog dialog

⚠️ Must be used within AlertProvider.

```jsx
import { useState } from 'react'

import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import { ShortcutDialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import Buttons from 'cozy-ui/transpiled/react/Buttons'

const [open, setOpen] = useState(isTesting())

;

<DemoProvider>
  { open && (
    <ShortcutDialog
      onClose={() => { setOpen(false)}}
      onSave={(...args) => { console.log('onSave called with args', args) }}
    />
  )}
  <Buttons onClick={() => { setOpen(true) }} label="Open ShortcutDialog" />
</DemoProvider>
```
