Displays a member of a sharing: avatar, name, subtitle, and on the right its role and a button to remove them. `MemberList` renders one row per member.

### Props of a member

* **id**: unique key of the member
* **name**: displayed name, replaced by "You" when `isCurrentUser`
* **subtitle**: email, status… (any node)
* **avatarUrl** and **initials**: picture of the member, initials when there is no picture or it fails to load
* **isGroup** and **color**: shows a group avatar
* **isOwner**: shows the "Owner" label and no action
* **role** and **roles**: current role, and the roles of this member when they differ from the `roles` of the row
* **canChangeRole**: shows the role in a menu, as text otherwise
* **canRemove**, **removeIcon** and **removeLabel**: remove button, its icon and its accessible label
* **action**: `{ label, onClick }` button shown in place of the role and the remove button
* **isPending**: shows a spinner instead of the actions
* **onClick**: makes the row clickable
* **data**: anything the app needs back in its callbacks, not read by the row

### Demo

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import List from 'cozy-ui/transpiled/react/List'
import MemberRow from 'cozy-ui/transpiled/react/MemberRow'
import { Unlink } from '@linagora/twake-icons'

const roles = [
  { value: 'viewer', label: 'Viewer' },
  { value: 'editor', label: 'Editor' }
]

const rows = [
  ['Owner', { id: 'alice', name: 'Alice', subtitle: 'alice@cozy.cc', initials: 'A', isOwner: true, isCurrentUser: true }],
  ['Role and remove button', { id: 'bob', name: 'Bob', subtitle: 'bob@cozy.cc', initials: 'B', role: 'editor', canChangeRole: true, canRemove: true }],
  ['Role as text', { id: 'carol', name: 'Carol', subtitle: 'carol@cozy.cc', initials: 'C', role: 'viewer' }],
  ['Action', { id: 'dave', name: 'Dave', subtitle: 'dave@cozy.cc', initials: 'D', action: { label: 'Verify', onClick: () => {} } }],
  ['Pending', { id: 'eve', name: 'Eve', subtitle: 'eve@cozy.cc', initials: 'E', role: 'editor', canChangeRole: true, canRemove: true, isPending: true }],
  ['Clickable group with its only role', { id: 'family', name: 'Family', subtitle: '2 members', isGroup: true, role: 'editor', roles: [{ value: 'editor', label: 'Editor' }], canChangeRole: true, canRemove: true, onClick: () => {} }],
  ['Clickable group, other remove icon', { id: 'team', name: 'Team', subtitle: '3 members', isGroup: true, color: '#FF7F1B', role: 'editor', canRemove: true, removeIcon: Unlink, removeLabel: 'Unlink Team', onClick: () => {} }]
]

;

<DemoProvider>
  <List>
    {rows.map(([label, member]) => (
      <MemberRow
        key={member.id}
        member={{ ...member, name: `${member.name} (${label})` }}
        roles={roles}
        onRoleChange={() => {}}
        onRemove={() => {}}
      />
    ))}
  </List>
</DemoProvider>
```
