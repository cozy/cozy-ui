`<Badge />` component wraps the element you want to apply a badge to. It is based on the [Badge component from Material-UI](https://v3.material-ui.com/api/badge/).

### Basic Badges

The default version of badges is used to indicate an amount of new things that the user should see. This could be a number of new messages in an inbox or the number of new files in a folder.

The `dot` variant can be used to indicate that the item _itself_ is new. A `dot` badge on a folder for example indicates that the folder is new, not that it contains new elements.

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Badge from 'cozy-ui/transpiled/react/Badge';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Variants from 'cozy-ui/docs/components/Variants';

const initialVariants = [
  { error: false, dot: false, large: false, small: false },
  { error: true, dot: true, large: false, small: false },
  { error: false, dot: false, large: false, small: false },
];


<MuiCozyTheme>
  <Variants initialVariants={initialVariants}>{
    variant => (
      <p>
        <Badge badgeContent={4} color={variant.error ? 'error' : variant.secondaryColor ? 'secondary' : 'primary'} variant={variant.dot ? 'dot' : 'standard'} size={variant.large ? 'large' : variant.small ? 'small' : 'medium'} anchorOrigin={{vertical: variant.bottom ? 'bottom' : 'top', 'horizontal': variant.left ? 'left' : 'right'}}>
          <Icon icon="circle-filled" size={variant.large ? '32' : variant.small ? '16' : '24'} color="var(--slateGrey)" />
        </Badge>
      </p>
    )
  }</Variants>
</MuiCozyTheme>
```

### Qualifier badge

The qualifier badge is used to provider extra information about the item it's annotating.

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Badge from 'cozy-ui/transpiled/react/Badge';
import Icon from 'cozy-ui/transpiled/react/Icon';

<MuiCozyTheme>
  <p>
    <Badge badgeContent={<Icon icon="link" size="10" />} color="primary" variant="qualifier">
      <Icon icon="circle-filled" size="32" color="var(--slateGrey)" />
    </Badge>
  </p>
</MuiCozyTheme>
```

### Ghost badge

Ghost badges are specifically used to indicate that a file in a Cozy is a ghost file — it is not truly in the Cozy (usually it is shared from another instance).

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Badge from 'cozy-ui/transpiled/react/Badge';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Avatar from 'cozy-ui/transpiled/react/Avatar';

<MuiCozyTheme>
  <p>
    <Badge badgeContent={<Icon icon="folder" size="16" />} color="primary" variant="ghost">
      <Avatar text="CD" size="small" />
    </Badge>
  </p>
</MuiCozyTheme>
```

### Double badges

Badges can be combined — in this example, we have a ghost file that is new.

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Badge from 'cozy-ui/transpiled/react/Badge';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Avatar from 'cozy-ui/transpiled/react/Avatar';

<MuiCozyTheme>
  <p>
    <Badge
      badgeContent={
        <Badge color="error" variant="dot" size="small">
          <Icon icon="folder" size="16" />
        </Badge>
      }
      color="primary"
      variant="ghost">
        <Avatar text="CD" size="small" />
    </Badge>
  </p>
</MuiCozyTheme>
```
