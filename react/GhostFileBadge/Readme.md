Ghost badges are specifically used to indicate that a file in a Cozy is a ghost file — it is not truly in the Cozy (usually it is shared from another instance).

```jsx
import Badge from 'cozy-ui/transpiled/react/Badge'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Avatar from 'cozy-ui/transpiled/react/Avatar'

import FolderIcon from "cozy-ui/transpiled/react/Icons/Folder"

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
      <Icon icon={FolderIcon} size="16" />
    </div>
  }
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <Avatar size="s">CD</Avatar>
</Badge>
```
