Lists the members of a sharing with `MemberRow`, the owner first.

The list only gets display data: the app turns its own members (sharing recipients, address book users, space members…) into the shape described in `MemberRow` and handles `onRoleChange` and `onRemove`. New members fade in.

### Demo

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Buttons from 'cozy-ui/transpiled/react/Buttons'
import MemberList from 'cozy-ui/transpiled/react/MemberList'

const roles = [
  { value: 'viewer', label: 'Viewer' },
  { value: 'editor', label: 'Editor' }
]

initialState = {
  members: [
    { id: 'alice', name: 'Alice', subtitle: 'alice@cozy.cc', initials: 'A', isOwner: true, isCurrentUser: true },
    { id: 'bob', name: 'Bob', subtitle: 'bob@cozy.cc', initials: 'B', role: 'editor', canChangeRole: true, canRemove: true },
    { id: 'carol', name: 'Carol', subtitle: 'Invitation sent', initials: 'C', role: 'viewer', canChangeRole: true, canRemove: true }
  ]
}

const changeRole = (member, role) =>
  setState(({ members }) => ({
    members: members.map(m => (m.id === member.id ? { ...m, role } : m))
  }))

const remove = member =>
  setState(({ members }) => ({ members: members.filter(m => m.id !== member.id) }))

const add = () =>
  setState(({ members }) => ({
    members: [
      ...members,
      { id: `dave-${members.length}`, name: 'Dave', subtitle: 'dave@cozy.cc', initials: 'D', role: 'viewer', canChangeRole: true, canRemove: true }
    ]
  }))

;

<DemoProvider>
  <Buttons variant="secondary" label="Add a member" onClick={add} />
  <MemberList
    members={state.members}
    roles={roles}
    onRoleChange={changeRole}
    onRemove={remove}
  />
</DemoProvider>
```

### Empty state

A placeholder is shown when there is no member but the owner, unless `showEmptyState` is `false`. An app replaces its texts by defining the `MemberList.empty.title` and `MemberList.empty.subtitle` keys in its own locales.

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import MemberList from 'cozy-ui/transpiled/react/MemberList'

;

<DemoProvider>
  <MemberList
    members={[{ id: 'alice', name: 'Alice', subtitle: 'alice@cozy.cc', initials: 'A', isOwner: true, isCurrentUser: true }]}
    roles={[]}
    onRoleChange={() => {}}
    onRemove={() => {}}
  />
</DemoProvider>
```
