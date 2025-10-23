### Usage

Actions should be formatted as follows:

```bash
const actions = {
  trash: {
    name: 'trash',
    icon: TrashIcon,
    disabled: selections => {},
    displayCondition: selections => {},
    action: selections => {},
  },
  rename: {
    name: 'rename',
    icon: RenameIcon,
    disabled: selections => {},
    displayCondition: selections => {},
    action: selections => {},
  }
}
```

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import SelectionBar from 'cozy-ui/transpiled/react/SelectionBar'
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'
import RenameIcon from 'cozy-ui/transpiled/react/Icons/Rename'
import ShareIcon from 'cozy-ui/transpiled/react/Icons/Share'

const selectedItem = {
    _id: 1,
    type: 'file'
}

initialState = { selected: isTesting() ? [selectedItem, selectedItem] : [] }


const addSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.push(selectedItem)
    return {selected: arr}
})

const removeSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.pop()
    return {selected: arr}
})

const dictRequire = x => ({})

const actions = {
  trash: {
    action: selections => alert(JSON.stringify(selections)),
    icon: TrashIcon
  },
  rename: {
    action: selections => alert(JSON.stringify(selections)),
    displayCondition: selections => selections.length > 1,
    icon: RenameIcon
  },
  share: {
    action: selections => alert(JSON.stringify(selections)),
    displayCondition: selections => selections.length > 1,
    icon: ShareIcon
  }
}

;

<DemoProvider>
  {state.selected.length > 0 && (
    <div style={{backgroundColor: 'var(--slateGrey)'}}>
      <SelectionBar
        actions={actions}
        selected={state.selected}
        hideSelectionBar={() => setState({selected: []})}
        maxAction={2}
      />
    </div>
  )}
  <button onClick={addSelected}>Add a selected document</button>
  <button onClick={removeSelected}>Remove a selected document</button>
</DemoProvider>
```
