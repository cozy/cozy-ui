If the initial data is empty, the button is shown. If it contains
only `null`, the button will not be shown, and the underlying component
will receive `null` as its value, which can be handy for example for
the ContactPicker to remove one click.

```jsx
import CollectionField from 'cozy-ui/transpiled/react/Labs/CollectionField'
import ContactPicker from 'cozy-ui/transpiled/react/ContactPicker'
import mockClient from 'cozy-ui/transpiled/react/ContactsListModal/mockClient'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import contacts from '../../ContactsList/_mockContacts.json'
import Variants from 'cozy-ui/docs/components/Variants'

initialState = { contacts: [contacts[0]] }

const initialVariants = [{
  inline: false,
  emptyData: false,
  nullData: false
}]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <DemoProvider client={mockClient}>
      <CollectionField
        values={variant.emptyData ? [] : variant.nullData ? [null] : state.contacts}
        component={ContactPicker}
        onChange={contacts => setState({ contacts })}
        onAddField={fieldInstance => fieldInstance.open()}
        label="Contacts"
        addButtonLabel="Add a contact"
        removeButtonLabel="Remove this contact"
        placeholder="Select a contact"
        variant={variant.inline ? "inline" : null}
      />
    </DemoProvider>
  )}
</Variants>
```
