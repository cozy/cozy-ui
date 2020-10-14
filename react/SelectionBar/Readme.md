SelectionBar 

### Usage

```jsx
import SelectionBar from 'cozy-ui/transpiled/react/SelectionBar';
import I18n from 'cozy-ui/transpiled/react/I18n';
initialState = { selected: [] };
const selectedItem = {
    _id: 1,
    type: 'file'
}
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
    icon: 'trash'
  },
  rename: {
    action: selections => alert(JSON.stringify(selections)),
    displayCondition: selections => selections.length > 1
  }
};
<I18n dictRequire={dictRequire} lang='en'>
    {state.selected.length > 0 &&
    <div style={{backgroundColor: 'var(--slateGrey)'}}>
        <SelectionBar
        actions={actions}
        selected={state.selected}
        hideSelectionBar={() => setState({selected: []})}
        />
    </div>
    }
    <button onClick={addSelected}>Add a selected document</button>
    <button onClick={removeSelected}>Remove a selected document</button>
</I18n>

```
