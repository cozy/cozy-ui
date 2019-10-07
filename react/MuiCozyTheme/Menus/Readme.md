```
import MuiCozyTheme from '..';
import Menu from '.';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../Button';

<MuiCozyTheme>
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
</MuiCozyTheme>
```
