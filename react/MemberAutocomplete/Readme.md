Field to pick the members to invite: suggestions while typing, picked members shown as chips, and optionally the role to give them and a send button.

The field only gets display data, as `MemberRow`: the app turns its own contacts, groups or users into members (`id`, `name`, `subtitle`, `email`, `avatarUrl`, `initials`, `color`, `isGroup`, `data`).

* Local suggestions from `getSuggestions` show at once. Remote ones from `fetchSuggestions` come first, once `minQueryLength` characters are typed and `debounceMs` has passed.
* `getMembersFromText` turns the text into members on Enter, Space, paste, and on blur for an email-like text. Its members are also suggested when nothing else matches. A text giving no member stays typed.
* Two members with the same `id` or the same `email`, whatever its case, are the same person: a typed email gives the suggested or picked contact with this email, and is never added twice.
* The role menu shows in the field when both `roles` and `role` are given.
* Out of focus, the field collapses to its first three members and a `+N` counter.
* The label of the send button can be replaced in the app's locales with the `MemberAutocomplete.send` key.

### Demo

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Variants from 'cozy-ui/docs/components/Variants'
import MemberAutocomplete from 'cozy-ui/transpiled/react/MemberAutocomplete'

const contacts = [
  { id: 'alice', name: 'Alice Wonderland', subtitle: 'alice@cozy.cc', email: 'alice@cozy.cc', initials: 'AW' },
  { id: 'bob', name: 'Bob Sponge', subtitle: 'bob@cozy.cc', email: 'bob@cozy.cc', initials: 'BS' },
  { id: 'carol', name: 'Carol Singer', subtitle: 'carol@cozy.cc', email: 'carol@cozy.cc', initials: 'CS' },
  { id: 'family', name: 'Family', subtitle: '3 members', isGroup: true, color: '#FF7F1B' }
]

const roles = [
  { value: 'readWrite', label: 'Can edit' },
  { value: 'readOnly', label: 'Can view' }
]

const getSuggestions = text =>
  contacts.filter(contact =>
    [contact.name, contact.email || ""].some(field => field.toLowerCase().includes(text.toLowerCase()))
  )

const getMembersFromText = text =>
  (text.match(/[^\s,;]+@[^\s,;]+\.[^\s,;]+/g) || []).map(email => ({ id: email, name: email, subtitle: '-', email, initials: email[0].toUpperCase() }))

const initialVariants = [{ title: true, roles: true, submit: true, loading: false, disabled: false }]

initialState = { members: [], role: 'readWrite' }

;

<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <MemberAutocomplete
        value={state.members}
        getSuggestions={getSuggestions}
        getMembersFromText={getMembersFromText}
        roles={variant.roles ? roles : undefined}
        role={state.role}
        title={variant.title ? 'Add people' : undefined}
        placeholder="Type a name or email address"
        loading={variant.loading}
        disabled={variant.disabled}
        onChange={members => setState({ members })}
        onRoleChange={role => setState({ role })}
        onSubmit={variant.submit ? () => setState({ members: [] }) : undefined}
      />
    )}
  </Variants>
</DemoProvider>
```

### With picked members

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import MemberAutocomplete from 'cozy-ui/transpiled/react/MemberAutocomplete'

const members = [
  { id: 'alice', name: 'Alice Wonderland', subtitle: 'alice@cozy.cc', email: 'alice@cozy.cc', initials: 'AW' },
  { id: 'bob', name: 'Bob Sponge', subtitle: 'bob@cozy.cc', email: 'bob@cozy.cc', initials: 'BS' },
  { id: 'family', name: 'Family', subtitle: '3 members', isGroup: true, color: '#FF7F1B' }
]

;

<DemoProvider>
  <MemberAutocomplete
    value={members}
    title="Add people"
    onChange={() => {}}
    onSubmit={() => {}}
  />
</DemoProvider>
```
