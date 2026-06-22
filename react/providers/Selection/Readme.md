```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import SelectionProvider, { useSelection } from 'cozy-ui/transpiled/react/providers/Selection'
import Button from 'cozy-ui/transpiled/react/Buttons'
import { DeviceLaptop, Icon } from '@linagora/twake-icons'
import Typography from 'cozy-ui/transpiled/react/Typography'

const Component = () => {
  const { selectedItemsId, addSelectedItem, removeSelectedItem } = useSelection()

  return (
    <>
      <Typography>selectedItemsId : {JSON.stringify(selectedItemsId)}</Typography>
      <Button label="Add Item" onClick={() => addSelectedItem('01')} />
      <Button label="Remove Item" onClick={() => removeSelectedItem('01')} />
  </>
  )
}

;

<DemoProvider>
  <SelectionProvider>
    <Component />
  </SelectionProvider>
</DemoProvider>
```
