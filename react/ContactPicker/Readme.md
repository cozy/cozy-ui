```jsx
import ContactPicker from 'cozy-ui/transpiled/react/ContactPicker';
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import DemoProvider from '../ContactsListModal/DemoProvider';
initialState = { selectedContact: null };

<DemoProvider>
  <MuiCozyTheme>
    <ContactPicker
      placeholder="Select a contact"
      onChange={selectedContact => setState({ selectedContact })}
      value={state.selectedContact}
      listPlaceholder="Search a contact"
      listEmptyMessage="No contact"
      addContactLabel="Add a contact"
    />
  </MuiCozyTheme>
</DemoProvider>
```
