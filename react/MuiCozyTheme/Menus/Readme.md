```jsx
import Menu from 'cozy-ui/transpiled/react/MuiCozyTheme/Menus';
import MenuItem from '@mui/material/MenuItem';
import Button from 'cozy-ui/transpiled/react/Button';

import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";

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
