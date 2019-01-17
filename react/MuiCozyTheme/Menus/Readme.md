```
const MuiCozyTheme = require('..').default
const Menu = require('.').default
const MenuItem = require('@material-ui/core/MenuItem').default
const Button = require('../../Button').default;

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
