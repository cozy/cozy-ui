A component suitable to be used when an Icon should be used as a button.
Provides hover, active styles + accessible size (48px).

```jsx
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'

import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'
import LeftIcon from 'cozy-ui/transpiled/react/Icons/Left'
import RestoreIcon from 'cozy-ui/transpiled/react/Icons/Restore'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'
import CrossIcon from 'cozy-ui/transpiled/react/Icons/Cross'

;

<>
  <IconButton>
    <Icon icon={TrashIcon} />
  </IconButton>
  <IconButton disabled>
    <Icon icon={TrashIcon} />
  </IconButton>
  <IconButton color="primary">
    <Icon icon={RestoreIcon} />
  </IconButton>
  <IconButton color="secondary">
    <Icon icon={CrossIcon} />
  </IconButton>
</>
```
