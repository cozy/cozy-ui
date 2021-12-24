Ghost badges are specifically used to indicate that a file in a Cozy is a ghost file — it is not truly in the Cozy (usually it is shared from another instance).

```jsx
import GhostFileBadge from 'cozy-ui/transpiled/react/GhostFileBadge';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Avatar from 'cozy-ui/transpiled/react/Avatar';

import FolderIcon from "cozy-ui/transpiled/react/Icons/Folder";

<p>
  <GhostFileBadge badgeContent={<Icon icon={FolderIcon} size="16" />}>
    <Avatar text="CD" size="small" />
  </GhostFileBadge>
</p>
```
