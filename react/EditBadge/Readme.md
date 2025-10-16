⚠️ Must be used within `AlertProvider`.

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import AlertProvider from 'cozy-ui/transpiled/react/providers/Alert'
import EditBadge from 'cozy-ui/transpiled/react/EditBadge'
import Avatar from 'cozy-ui/transpiled/react/Avatar'

;

<DemoProvider>
  <AlertProvider>
    <EditBadge
      src={timestamp => ""}
      onUpload={file => {}}
      onDelete={() => {}}
    >
      <Avatar size={94} alt="Avatar" />
    </EditBadge>
  </AlertProvider>
</DemoProvider>
```
