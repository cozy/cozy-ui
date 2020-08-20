### Raw list

```jsx
import ContactsList from 'cozy-ui/transpiled/react/ContactsList';
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import contacts from './data.json';

<div style={{ height: 500, overflowY: 'scroll' }}>
  <MuiCozyTheme>
    <ContactsList contacts={contacts} />
  </MuiCozyTheme>
</div>
```

### Clickable items

```jsx
import ContactsList from 'cozy-ui/transpiled/react/ContactsList';
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import contacts from './data.json';
initialState = { contact: null };


<MuiCozyTheme>
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
</MuiCozyTheme>
```
