# List
Displays a List of items, with several metadata

## props
`dense`: boolean (`false` by default)

### Default usage
```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Menu from 'cozy-ui/transpiled/react/MuiCozyTheme/Menus';
import MenuItem from '@material-ui/core/MenuItem'
import Button from 'cozy-ui/transpiled/react/Button';

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
      <ListItemSecondaryAction>
        <Button
          label='Click for more !'
          theme="text"
          icon="dots"
          extension="narrow"
          iconOnly
          className="u-m-0"
        />
      </ListItemSecondaryAction>
    </ListItem>
  </List>
</MuiCozyTheme>
```

### dense
Reduce the space around a list item
```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction';
import Icon from 'cozy-ui/transpiled/react/Icon';

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
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import Icon from 'cozy-ui/transpiled/react/Icon';

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
### Navigation menus

When presenting a list of actions in a navigation menu, it can be useful to 
group actions per sections.

- `ListSubHeader` can be used to add a section header.
- `ListItemSecondaryAction` can be used to show an arrow.

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction';
import ListSubheader from 'cozy-ui/transpiled/react/MuiCozyTheme/ListSubheader';
import Icon from 'cozy-ui/transpiled/react/Icon';


<MuiCozyTheme>
  <List>
    <ListSubheader>General</ListSubheader>
    <ListItem>
      <ListItemIcon>
        <Icon icon="gear" width="24" height="24" />
      </ListItemIcon>
      <ListItemText primaryText="General settings"/>
      <ListItemSecondaryAction>
        <Icon icon="right" width="24" height="24" className='u-mr-1 u-coolGrey' />
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon icon="people" width="24" height="24" />
      </ListItemIcon>
      <ListItemText primaryText="User preferences" secondaryText="Notifications and theme"/>
      <ListItemSecondaryAction>
        <Icon icon="right" width="24" height="24" className='u-mr-1 u-coolGrey' />
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon icon="trash" className='u-error' width="24" height="24" />
      </ListItemIcon>
      <ListItemText primaryText="Delete account" primaryTextClassName="u-error" secondaryTextClassName="u-error" secondaryText="Permanently delete all your data"/>
    </ListItem>
    <ListSubheader>Accounts</ListSubheader>
    <ListItem>
      <ListItemIcon>
        <Icon icon="bank" width="24" height="24" />
      </ListItemIcon>
      <ListItemText primaryText="Bank accounts" />
      <ListItemSecondaryAction>
        <Icon icon="right" width="24" height="24" className='u-mr-1 u-coolGrey' />
      </ListItemSecondaryAction>
    </ListItem>
  </List>
</MuiCozyTheme>
```
