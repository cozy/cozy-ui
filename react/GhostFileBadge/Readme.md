Ghost badges are specifically used to indicate that a file in a Cozy is a ghost file — it is not truly in the Cozy (usually it is shared from another instance).

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import GhostFileBadge from 'cozy-ui/transpiled/react/GhostFileBadge';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Avatar from 'cozy-ui/transpiled/react/Avatar';

<MuiCozyTheme>
  <p>
    <GhostFileBadge badgeContent={<Icon icon="folder" size="16" />}>
      <Avatar text="CD" size="small" />
    </GhostFileBadge>
  </p>
</MuiCozyTheme>
```
