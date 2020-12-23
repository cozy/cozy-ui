```jsx
import ContactPicker from 'cozy-ui/transpiled/react/ContactPicker';
import DemoProvider from '../ContactsListModal/DemoProvider';
initialState = { selectedContact: null };

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
```
