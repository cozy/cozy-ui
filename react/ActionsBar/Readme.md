Use same actions as `<ActionsMenu />`

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Buttons from 'cozy-ui/transpiled/react/Buttons'
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'
import RenameIcon from 'cozy-ui/transpiled/react/Icons/Rename'
import ShareIcon from 'cozy-ui/transpiled/react/Icons/Share'
import ActionsBar from 'cozy-ui/transpiled/react/ActionsBar'
import { makeActions, modify, emailTo, print, viewInContacts, smsTo, call } from 'cozy-ui/transpiled/react/ActionsMenu/Actions'

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

const actions = makeActions([ modify, viewInContacts, call, smsTo, emailTo ])

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
