⚠️ Must be used within `AlertProvider`.

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import AlertProvider from 'cozy-ui/transpiled/react/providers/Alert'
import EditBadge from 'cozy-ui/transpiled/react/EditBadge'

;

<DemoProvider>
  <AlertProvider>
    <EditBadge
      src={timestamp => ""}
      onUpload={file => {}}
      onDelete={() => {}}
    />
  </AlertProvider>
</DemoProvider>
```
