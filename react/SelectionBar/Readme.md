### Usage

```jsx
import SelectionBar from 'cozy-ui/transpiled/react/SelectionBar';
import I18n from 'cozy-ui/transpiled/react/I18n';
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints';
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'
import RenameIcon from 'cozy-ui/transpiled/react/Icons/Rename'
import ShareIcon from 'cozy-ui/transpiled/react/Icons/Share'

const selectedItem = {
    _id: 1,
    type: 'file'
};

initialState = { selected: isTesting() ? [selectedItem, selectedItem] : [] };


const addSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.push(selectedItem)
    return {selected: arr}
});

const removeSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.pop()
    return {selected: arr}
});

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
};

<I18n dictRequire={dictRequire} lang='en'>
  <BreakpointsProvider>

    {state.selected.length > 0 &&
    <div style={{backgroundColor: 'var(--slateGrey)'}}>
        <SelectionBar
        actions={actions}
        selected={state.selected}
        hideSelectionBar={() => setState({selected: []})}
        maxAction={2}
        />
    </div>
    }
    <button onClick={addSelected}>Add a selected document</button>
    <button onClick={removeSelected}>Remove a selected document</button>
  </BreakpointsProvider>
</I18n>

```
