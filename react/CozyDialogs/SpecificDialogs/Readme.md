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

### Authentification dialog

Dialog used to authenticate a user in the cozy system. The authentication logic is implemented in the applications.

```jsx
import { AuthentificationDialog } from  'cozy-ui/transpiled/react/CozyDialogs'
import Button from  'cozy-ui/transpiled/react/Buttons'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Variants from 'cozy-ui/docs/components/Variants'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import Radio from 'cozy-ui/transpiled/react/Radios'
import FormControl from 'cozy-ui/transpiled/react/FormControl'
import FormLabel from 'cozy-ui/transpiled/react/FormLabel'

initialState = { showModal: false };

const initialVariants = [{
  closable: true,
  loading: false,
  oidc: false
}]

const initialErrors = [{
  default: true,
  invalid_password: false,
  server_error: false
}]

const onClose = () => setState({ showModal: false })

const onAuthentification = () => {
  alert('authentification')
  setState({ showModal: false })
};

<Variants initialVariants={initialVariants}>
  {variant => (
    <Variants initialVariants={initialErrors} radio>
      {error => (
        <DemoProvider>
          <Button label="Open modal" onClick={() => setState({ showModal: true })}/>
          {state.showModal && (
            <AuthentificationDialog
              onSubmit={onAuthentification}
              onClose={variant.closable && onClose}
              error={error.invalid_password ? 'invalid_password' : error.server_error ? 'server_error' : undefined }
              isLoading={variant.loading}
              isOIDC={variant.oidc}
            />
          )}
        </DemoProvider>
      )}
    </Variants>
  )}
</Variants>
```
