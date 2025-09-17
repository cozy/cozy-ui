```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import SelectionProvider, { useSelection } from 'cozy-ui/transpiled/react/providers/Selection'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Typography from 'cozy-ui/transpiled/react/Typography'
import DeviceLaptopIcon from 'cozy-ui/transpiled/react/Icons/DeviceLaptop'

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
