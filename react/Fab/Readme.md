See [Material UI documentation](https://material-ui.com/components/floating-action-button/) to learn more about Floating Action Button (Fab).

```jsx
import Fab from 'cozy-ui/transpiled/react/Fab'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import RenameIcon from 'cozy-ui/transpiled/react/Icons/Rename'

;
<>
  <Fab color="primary" aria-label="add">
    <Icon icon={PlusIcon} />
  </Fab>
  <Fab color="secondary" aria-label="edit">
    <Icon icon={RenameIcon} />
  </Fab>
</>
```
