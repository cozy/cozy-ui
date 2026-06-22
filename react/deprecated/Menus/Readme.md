```jsx
import MenuItem from '@material-ui/core/MenuItem'
import Menu from 'cozy-ui/transpiled/react/deprecated/Menus'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import { Dots } from '@linagora/twake-icons'

;

<Menu
  component={
    <Button
      label='Click for more !'
      theme="secondary"
      icon={Dots}
      extension="narrow"
      iconOnly
    />
  }
>
  <MenuItem>Profile</MenuItem>
  <MenuItem>My account</MenuItem>
  <hr />
  <MenuItem>Logout</MenuItem>
</Menu>
```
