:warning: The app must have `POST` permission on `io.cozy.contacts` doctype to use `ContactPicker`.

:warning: Since this component use `ContactsListModal`, it does a request to fetch all contacts, it should be wrapped in a CozyProvider.

Also, to take advantage of realtime updates of the contacts, the CozyClient passed to the provider should have a realtime plugin initialized. The component will work without realtime initialized, but the list will not always be up-to-date.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'
import ContactPicker from 'cozy-ui/transpiled/react/ContactPicker'
import DemoProvider from 'cozy-ui/transpiled/react/ContactsListModal/DemoProvider'

initialState = { selectedContact: null }

;

<BreakpointsProvider>
  <DemoProvider>
    <ContactPicker
      placeholder="Select a contact"
      onChange={selectedContact => setState({ selectedContact })}
      value={state.selectedContact}
      listPlaceholder="Search a contact"
      listEmptyMessage="No contact"
      addContactLabel="Add a contact"
    />
  </DemoProvider>
</BreakpointsProvider>
```
