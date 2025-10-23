⚠️ The app must have `POST` permission on `io.cozy.contacts` doctype to use `ContactPicker`.

⚠️ Since this component use `ContactsListModal`, it does a request to fetch all contacts, it should be wrapped in a CozyProvider.

Also, to take advantage of realtime updates of the contacts, the CozyClient passed to the provider should have a realtime plugin initialized. The component will work without realtime initialized, but the list will not always be up-to-date.

```jsx
import mockClient from 'cozy-ui/transpiled/react/ContactsListModal/mockClient'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import ContactPicker from 'cozy-ui/transpiled/react/ContactPicker'

initialState = { selectedContact: null }

;

<DemoProvider client={mockClient}>
  <ContactPicker
    placeholder="Select a contact"
    onChange={selectedContact => setState({ selectedContact })}
    value={state.selectedContact}
    listPlaceholder="Search a contact"
    listEmptyMessage="No contact"
    addContactLabel="Add a contact"
  />
</DemoProvider>
```
