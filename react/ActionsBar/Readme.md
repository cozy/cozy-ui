Use same actions as `<ActionsMenu />`.

### Basic usage

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Buttons from 'cozy-ui/transpiled/react/Buttons'
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'
import RenameIcon from 'cozy-ui/transpiled/react/Icons/Rename'
import ShareIcon from 'cozy-ui/transpiled/react/Icons/Share'
import ActionsBar from 'cozy-ui/transpiled/react/ActionsBar'
import { makeActions, modify, emailTo, download, smsTo, call } from 'cozy-ui/transpiled/react/ActionsMenu/Actions'

const selectedItem = {
    _id: 1,
    type: 'file'
}

const doc = {
  _id: 'id01',
  _type: 'io.cozy.contacts',
  phone: [{ number: '0102030405' }],
  email: [{ address: 'johndoe@cozy.cc' }],
}

initialState = { selected: isTesting() ? [doc, doc] : [] }

const addSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.push(doc)
    return { selected: arr }
})

const removeSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.pop()
    return { selected: arr }
})

const actions = makeActions([ modify, call, download, smsTo, emailTo ])

;

<DemoProvider>
  <Buttons label="Add a selected document" className="u-mb-1-s u-mr-1" onClick={addSelected} />
  <Buttons label="Remove a selected document" onClick={removeSelected} />

  {state.selected.length > 0 && (
    <ActionsBar
      actions={actions}
      docs={state.selected}
      onClose={() => setState({selected: []})}
    />
  )}
</DemoProvider>
```

### With custom color

The `color` prop allows customizing the background color of the ActionsBar. It supports standard AppBar colors (`default`, `inherit`, `primary`, `secondary`, `transparent`) and theme palette colors (`error`, `warning`, `info`, `success`).

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Buttons from 'cozy-ui/transpiled/react/Buttons'
import ActionsBar from 'cozy-ui/transpiled/react/ActionsBar'
import { makeActions, modify, download } from 'cozy-ui/transpiled/react/ActionsMenu/Actions'

const doc = {
  _id: 'id01',
  _type: 'io.cozy.contacts',
  phone: [{ number: '0102030405' }],
  email: [{ address: 'johndoe@cozy.cc' }],
}

initialState = { selected: isTesting() ? [doc, doc] : [], color: 'inherit' }

const addSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.push(doc)
    return { selected: arr }
})

const removeSelected = () => setState(previousState => {
    const arr = previousState.selected
    arr.pop()
    return { selected: arr }
})

const actions = makeActions([ modify, download ])

const colors = ['inherit', 'primary', 'secondary', 'error', 'warning', 'info', 'success']

;

<DemoProvider>
  <div className="u-mb-1">
    <Buttons label="Add a selected document" className="u-mr-1" onClick={addSelected} />
    <Buttons label="Remove a selected document" onClick={removeSelected} />
  </div>
  <div className="u-mb-1">
    {colors.map(color => (
      <Buttons
        key={color}
        label={color}
        className="u-mr-half"
        variant={state.color === color ? 'primary' : 'secondary'}
        onClick={() => setState({ color })}
      />
    ))}
  </div>

  {state.selected.length > 0 && (
    <ActionsBar
      actions={actions}
      docs={state.selected}
      color={state.color}
      onClose={() => setState({selected: []})}
    />
  )}
</DemoProvider>
```
