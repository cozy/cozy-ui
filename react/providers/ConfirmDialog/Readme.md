```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import ConfirmDialogProvider, { useConfirmDialog } from 'cozy-ui/transpiled/react/providers/ConfirmDialog'
import Button from 'cozy-ui/transpiled/react/Buttons'

const Component = () => {
  const { showConfirmDialog } = useConfirmDialog()

  return (
    <Button
      label="Show ConfirmDialog"
      onClick={() =>
        showConfirmDialog({
          title: "Title of the ConfirmDialog",
          content: "Content of the ConfirmDialog",
          actions: <Button label="Ok" />
        })
      }
    />
  )
}

;

<DemoProvider>
  <ConfirmDialogProvider>
    <Component />
  </ConfirmDialogProvider>
</DemoProvider>
```
