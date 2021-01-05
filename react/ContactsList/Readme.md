### Raw list

```jsx
import ContactsList from 'cozy-ui/transpiled/react/ContactsList';
import contacts from './data.json';

<div style={{ height: 500, overflowY: 'scroll' }}>
  <ContactsList contacts={contacts} />
</div>
```

### Clickable items

```jsx
import ContactsList from 'cozy-ui/transpiled/react/ContactsList';
import contacts from './data.json';
initialState = { contact: null };


<><p>
  {state.contact ? (
      `Clicked on contact ${state.contact._id}`
    ) : (
      'No contact clicked'
  )}
  </p><div style={{ height: 500, overflowY: 'scroll' }}>
    <ContactsList
      contacts={contacts}
      onItemClick={contact => setState({ contact })}
    />
  </div></>
```
