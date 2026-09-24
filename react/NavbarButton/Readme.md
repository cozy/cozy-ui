Main action button of a sidebar, like "Create" or "Upload". The `icon` and `text` props are required.

```jsx
import NavbarButton from 'cozy-ui/transpiled/react/NavbarButton'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { Icon, Plus, Upload } from '@linagora/twake-icons'

const variants = ['primary', 'secondary']

;

<div style={{ width: '236px', padding: '1rem', backgroundColor: 'var(--defaultBackgroundColor)' }}>
  <Stack spacing="m">
    {variants.map(variant =>
      <Stack spacing="s" key={variant}>
        <div>{variant}</div>
        <NavbarButton variant={variant} icon={<Icon icon={Plus} />} text="Create" fullWidth />
        <NavbarButton variant={variant} icon={<Icon icon={Upload} />} text="Upload" fullWidth />
        <NavbarButton variant={variant} icon={<Icon icon={Plus} />} text="Create" fullWidth disabled />
      </Stack>
    )}
  </Stack>
</div>
```
