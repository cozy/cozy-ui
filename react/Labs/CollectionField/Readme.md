```jsx
import CollectionField from 'cozy-ui/transpiled/react/Labs/CollectionField';
import ContactPicker from 'cozy-ui/transpiled/react/ContactPicker';
import DemoProvider from '../../ContactsListModal/DemoProvider';
import contacts from '../../ContactsList/data.json';
initialState = { contacts: [contacts[0]] };

<DemoProvider>
  <CollectionField
    values={state.contacts}
    component={ContactPicker}
    onChange={contacts => setState({ contacts })}
    label="Contacts"
    addButtonLabel="Add a contact"
    removeButtonLabel="Remove this contact"
    placeholder="Select a contact"
  />
</DemoProvider>
```
