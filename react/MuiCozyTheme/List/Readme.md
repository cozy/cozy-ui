# List
Displays a List of items, with several metadata

## props
`dense`: boolean (`false` by default)

### Default usage
```
const MuiCozyTheme = require('..').default;
const List = require('.').default;
const ListItem = require('../ListItem').default;
const ListItemIcon = require('../ListItemIcon').default;
const ListItemText = require('../../ListItemText').default;
const ListItemSecondaryAction = require('../ListItemSecondaryAction').default;
const Icon = require('../../Icon').default;
const Menus = require('../Menus').default;
const MenuItem = require('@material-ui/core/MenuItem').default;
const Button = require('../../Button').default;

<MuiCozyTheme>
  <List>
    <ListItem>
      <ListItemIcon>
        <Icon icon="folder" width="32" height="32" />
      </ListItemIcon>
      <ListItemText primaryText="I'm a primary text"/>
      <ListItemText secondaryText="metadata"/>
      <ListItemText secondaryText="metadata"/>
      <ListItemSecondaryAction>
        <Menu
          component={
            <Button
              label='Click for more !'
              theme="text"
              icon="dots"
              extension="narrow"
              iconOnly
              className="u-m-0"
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
    <ListItem>
      <ListItemIcon>
        <Icon icon="file" width="32" height="32" />
      </ListItemIcon>
      <ListItemText primaryText="I'm a primary text" secondaryText="I'm a secondary text"/>
    </ListItem>
    <ListItem>
      <ListItemText primaryText="I'm a primary text" />
    </ListItem>
  </List>
</MuiCozyTheme>
```

### dense
Reduce the space around a list item
```
const MuiCozyTheme = require('..').default
const List = require('.').default
const ListItem = require('../ListItem').default;
const ListItemIcon = require('../ListItemIcon').default;
const ListItemText = require('../../ListItemText').default;
const Icon = require('../../Icon').default;

<MuiCozyTheme>
  <List dense={true}>
    <ListItem>
      <ListItemIcon>
        <Icon icon="folder" width="32" height="32" />
      </ListItemIcon>
      <ListItemText primaryText="I'm a primary text"/>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon icon="file" width="32" height="32" />
      </ListItemIcon>
      <ListItemText primaryText="I'm a primary text" secondaryText="I'm a secondary text"/>
    </ListItem>
    <ListItem>
      <ListItemText primaryText="I'm a primary text" />
    </ListItem>
  </List>
</MuiCozyTheme>
```

## Use cases
### List item selected
Highlight a selected item from the list
```
const MuiCozyTheme = require('..').default
const List = require('.').default
const ListItem = require('../ListItem').default;
const ListItemIcon = require('../ListItemIcon').default;
const ListItemText = require('../../ListItemText').default;
const Icon = require('../../Icon').default;

<MuiCozyTheme>
  <List>
    <ListItem>
      <ListItemIcon>
        <Icon icon="folder" width="32" height="32" />
      </ListItemIcon>
      <ListItemText primaryText="I'm a primary text"/>
    </ListItem>
    <ListItem selected={true}>
      <ListItemIcon>
        <Icon icon="file" width="32" height="32" />
      </ListItemIcon>
      <ListItemText primaryText="I'm a primary text" secondaryText="I'm a secondary text"/>
    </ListItem>
    <ListItem>
      <ListItemText primaryText="I'm a primary text" />
    </ListItem>
  </List>
</MuiCozyTheme>
```
### List with sub header
Adds a sub header as a list divider
```
const MuiCozyTheme = require('..').default
const List = require('.').default
const ListItem = require('../ListItem').default;
const ListItemIcon = require('../ListItemIcon').default;
const ListItemText = require('../../ListItemText').default;
const ListSubheader = require('../ListSubheader').default;
const Icon = require('../../Icon').default;

<MuiCozyTheme>
  <List>
    <ListItem>
      <ListItemIcon>
        <Icon icon="folder" width="32" height="32" />
      </ListItemIcon>
      <ListItemText primaryText="I'm a primary text"/>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon icon="file" width="32" height="32" />
      </ListItemIcon>
      <ListItemText primaryText="I'm a primary text" secondaryText="I'm a secondary text"/>
    </ListItem>
    <ListSubheader>I'm a subheader</ListSubheader>
    <ListItem>
      <ListItemText primaryText="I'm a primary text" />
    </ListItem>
  </List>
</MuiCozyTheme>
```
