```jsx
import MenuItem from '@material-ui/core/MenuItem'
import Menu from 'cozy-ui/transpiled/react/deprecated/Menus'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots"

;

<Menu
  component={
    <Button
      label='Click for more !'
      theme="secondary"
      icon={DotsIcon}
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
