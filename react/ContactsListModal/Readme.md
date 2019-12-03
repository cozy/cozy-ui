## ContactsListModal

A filterable list of contacts shown in a modal. This component should be wrapped in a CozyProvider since it does a request to fetch all contacts.

```jsx
import ContactsListModal from 'cozy-ui/transpiled/react/ContactsListModal';
import DemoProvider from './DemoProvider';

initialState = { opened: isTesting() };

<DemoProvider>
  <button type="button" onClick={() => setState({ opened: true })}>
    Open contacts list
  </button>
  {state.opened && (
    <ContactsListModal
      placeholder="Search a contact"
      dismissAction={() => setState({ opened: false })}
      onItemClick={contact => alert(`Clicked on ${contact._id}`)}
      addContactLabel="Add a contact"
    />
  )}
</DemoProvider>
```
