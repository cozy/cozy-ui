```
import Menu from 'cozy-ui/transpiled/react/MuiCozyTheme/Menus';
import MenuItem from '@material-ui/core/MenuItem';
import Button from 'cozy-ui/transpiled/react/Button';

<Menu
  component={
    <Button
      label='Click for more !'
      theme="secondary"
      icon="dots"
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
