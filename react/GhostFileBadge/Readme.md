Ghost badges are specifically used to indicate that a file in a Cozy is a ghost file — it is not truly in the Cozy (usually it is shared from another instance).

```jsx
import Badge from 'cozy-ui/transpiled/react/Badge'
import { Folder, Icon } from '@linagora/twake-icons'
import Avatar from 'cozy-ui/transpiled/react/Avatar'

;

<Badge
  badgeContent={
    <div
      className="u-h-auto u-miw-auto"
      style={{
        padding: "3px",
        backgroundColor: "white",
        color: "var(--coolGrey)",
        border: "1px solid var(--silver)",
        borderRadius: "6px"
      }}
    >
      <Icon icon={Folder} size="16" />
    </div>
  }
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <Avatar size="s">CD</Avatar>
</Badge>

```
