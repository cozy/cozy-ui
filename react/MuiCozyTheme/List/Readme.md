# List
Displays a List of items, with several metadata

## props
`dense`: boolean (`false` by default)

### Default usage
```
import MuiCozyTheme from '..';
import List from '.';
import ListItem from '../ListItem';
import ListItemIcon from '../ListItemIcon';
import ListItemText from '../../ListItemText';
import ListItemSecondaryAction from '../ListItemSecondaryAction';
import Icon from '../../Icon';
import Menu from '../Menus';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '../../Button';

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
import MuiCozyTheme from '..';
import List from '.';
import ListItem from '../ListItem';
import ListItemIcon from '../ListItemIcon';
import ListItemText from '../../ListItemText';
import ListItemSecondaryAction from '../ListItemSecondaryAction';
import Icon from '../../Icon';

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
import MuiCozyTheme from '..';
import List from '.';
import ListItem from '../ListItem';
import ListItemIcon from '../ListItemIcon';
import ListItemText from '../../ListItemText';
import Icon from '../../Icon';

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
import MuiCozyTheme from '..';
import List from '.';
import ListItem from '../ListItem';
import ListItemIcon from '../ListItemIcon';
import ListItemText from '../../ListItemText';
import ListSubheader from '../ListSubheader';
import Icon from '../../Icon';

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
