```jsx
import ToggleButton from 'cozy-ui/transpiled/react/ToggleButton'
import ToggleButtonGroup from 'cozy-ui/transpiled/react/ToggleButtonGroup'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'


initialState = { alignment: 'left' }

const handleAlignment = (ev, value) => setState({ alignment: value })

;

<ToggleButtonGroup
  value={state.alignment}
  exclusive
  onChange={handleAlignment}
  aria-label="text alignment"
>
  <ToggleButton value="left" aria-label="left aligned">
    <Icon icon={PeopleIcon} />
  </ToggleButton>
  <ToggleButton value="right" aria-label="right aligned">
    <Icon icon={TrashIcon} />
  </ToggleButton>
</ToggleButtonGroup>
```
