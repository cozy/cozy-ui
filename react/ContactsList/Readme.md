### Raw list

```jsx
import ContactsList from 'cozy-ui/transpiled/react/ContactsList'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'
import contacts from './_mockContacts.json'

;

<BreakpointsProvider>
  <div style={{ height: 500, overflowY: 'scroll' }}>
    <ContactsList contacts={contacts} />
  </div>
</BreakpointsProvider>
```

### Clickable items

```jsx
import ContactsList from 'cozy-ui/transpiled/react/ContactsList'
import contacts from './_mockContacts.json'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

initialState = { contact: null }

;

<BreakpointsProvider>
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
</BreakpointsProvider>
```
