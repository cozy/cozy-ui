### Raw list

```jsx
import ContactsList from 'cozy-ui/transpiled/react/ContactsList'
import mockClient from 'cozy-ui/transpiled/react/ContactsListModal/mockClient'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import contacts from './_mockContacts.json'

;

<DemoProvider client={mockClient}>
  <div style={{ height: 500, overflowY: 'scroll' }}>
    <ContactsList contacts={contacts} />
  </div>
</DemoProvider>
```

### Clickable items

```jsx
import ContactsList from 'cozy-ui/transpiled/react/ContactsList'
import mockClient from 'cozy-ui/transpiled/react/ContactsListModal/mockClient'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import contacts from './_mockContacts.json'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'

initialState = { contact: null }

;

<DemoProvider client={mockClient}>
  <p>
    {state.contact ? (
        `Clicked on contact ${state.contact._id}`
      ) : (
        'No contact clicked'
    )}
  </p>
  <div style={{ height: 500, overflowY: 'scroll' }}>
    <ContactsList
      contacts={contacts}
      onItemClick={contact => setState({ contact })}
    />
  </div>
</DemoProvider>
```
