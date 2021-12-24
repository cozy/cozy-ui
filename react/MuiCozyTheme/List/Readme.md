# List

Displays a List of items, with several metadata

## props

`dense`: boolean (`false` by default)

### Default usage

Note the use of inset Divider to separate each ListItem.

```jsx
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List';
import ListSubheader from 'cozy-ui/transpiled/react/MuiCozyTheme/ListSubheader';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Menu from 'cozy-ui/transpiled/react/MuiCozyTheme/Menus';
import MenuItem from '@material-ui/core/MenuItem'
import Button from 'cozy-ui/transpiled/react/Button';
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider';
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FiletypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText';

import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";

<List>
  <ListSubheader>Section 1</ListSubheader>
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FileTypeFolderIcon} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text"/>
    <ListItemText secondary="metadata"/>
    <ListItemText secondary="metadata"/>
    <ListItemSecondaryAction>
      <Menu
        component={
          <Button
            label='Click for more !'
            theme="text"
            icon={DotsIcon}
            extension="narrow"
            iconOnly
            className="u-m-0 u-coolGrey"
          />
        }
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <hr />
        <MenuItem>Logout</MenuItem>
      </Menu>
    </ListItemSecondaryAction>
  </ListItem>
  <ListSubheader>Section 2</ListSubheader>
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FiletypeTextIcon} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
  </ListItem>
  <Divider component="li" variant="inset" />
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FiletypeTextIcon} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" />
    <ListItemSecondaryAction>
      <Button
        label='Click for more !'
        theme="text"
        icon={DotsIcon}
        extension="narrow"
        iconOnly
        className="u-m-0 u-coolGrey"
      />
    </ListItemSecondaryAction>
  </ListItem>
</List>
```

### dense

Reduces the space around a list item

```jsx
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider';
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FiletypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText';

<List dense={true}>
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FileTypeFolderIcon} width="24" height="24" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text"/>
  </ListItem>
  <Divider component="li" variant="inset" />
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FiletypeTextIcon} width="24" height="24" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
  </ListItem>
  <Divider component="li" variant="inset" />
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FiletypeTextIcon} width="24" height="24" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" />
  </ListItem>
</List>
```

### Highlighted item

Highlight a selected item from the list

```jsx
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider';
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FiletypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText';

<List>
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FileTypeFolderIcon} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text"/>
  </ListItem>
  <Divider variant="inset" />
  <ListItem selected={true}  button>
    <ListItemIcon>
      <Icon icon={FiletypeTextIcon} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
  </ListItem>
  <Divider variant="inset" />
  <ListItem  button>
    <ListItemIcon>
      <Icon icon={FiletypeTextIcon} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" />
  </ListItem>
</List>
```

### Navigation list

List components are used in the [NavigationList](#/NavigationList) component.

### Bordered list

If you do not need the inset behavior, you can use `divider` on the `ListItem`s.

```jsx
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider';
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FiletypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText';

<><Divider /><List>
    <ListItem divider button>
      <ListItemIcon>
        <Icon icon={FileTypeFolderIcon} width="32" height="32" />
      </ListItemIcon>
      <ListItemText primary="I'm a primary text"/>
    </ListItem>
    <ListItem divider button>
      <ListItemIcon>
        <Icon icon={FiletypeTextIcon} width="32" height="32" />
      </ListItemIcon>
      <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
    </ListItem>
    <ListItem divider button>
       <ListItemIcon>
        <Icon icon={FiletypeTextIcon} width="32" height="32" />
      </ListItemIcon>
      <ListItemText primary="I'm a primary text" />
    </ListItem>
  </List></>
```
