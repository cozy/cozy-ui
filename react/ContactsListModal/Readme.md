## ContactsListModal

A filterable list of contacts shown in a modal.

⚠️ The app must have `POST` permission on `io.cozy.contacts` doctype to use `ContactsListModal`.

⚠️ Since this component does a request to fetch all contacts, it should be wrapped in a CozyProvider.

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
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import ContactsListModal from 'cozy-ui/transpiled/react/ContactsListModal'
import mockClient from 'cozy-ui/transpiled/react/ContactsListModal/mockClient'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import { I18nContext } from 'cozy-ui/transpiled/react/providers/I18n'

initialState = { opened: isTesting() }

;

<DemoProvider client={mockClient}>
  <button type="button" onClick={() => setState({ opened: true })}>
    Open contacts list
  </button>
  {state.opened && (
    <ContactsListModal
      dismissAction={() => setState({ opened: false })}
      onItemClick={contact => alert(`Clicked on ${contact._id}`)}
    />
  )}
</DemoProvider>
```
