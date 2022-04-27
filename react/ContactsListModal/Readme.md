## ContactsListModal

A filterable list of contacts shown in a modal.

:warning: The app must have `POST` permission on `io.cozy.contacts` doctype to use `ContactsListModal`.

:warning: Since this component does a request to fetch all contacts, it should be wrapped in a CozyProvider.

Also, to take advantage of realtime updates of the contacts, the CozyClient passed to the provider should have a realtime plugin initialized. The component will work without realtime initialized, but the list will not always be up-to-date.

```jsx static
import CozyClient, { CozyProvider } from 'cozy-client'
import { RealtimePlugin } from 'cozy-realtime'

const client = new CozyClient(/* ... */)
client.registerPlugin(RealtimePlugin)

<CozyProvider client={client}>
  {/* ... */}
</CozyProvider>
```

```jsx
import ContactsListModal from 'cozy-ui/transpiled/react/ContactsListModal';
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints';
import DemoProvider from './DemoProvider';

initialState = { opened: isTesting() };

<DemoProvider>
  <BreakpointsProvider>
    <button type="button" onClick={() => setState({ opened: true })}>
      Open contacts list
    </button>
    {state.opened && (
      <ContactsListModal
        placeholder="Search a contact"
        dismissAction={() => setState({ opened: false })}
        onItemClick={contact => alert(`Clicked on ${contact._id}`)}
        addContactLabel="Add a contact"
        emptyMessage="No contact"
      />
    )}
  </BreakpointsProvider>
</DemoProvider>
```
