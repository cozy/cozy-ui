# List

Displays a List of items, with several metadata

## props

`dense`: boolean (`false` by default)

### Default usage

Note the use of inset Divider to separate each ListItem.

```jsx
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List'
import ListSubheader from 'cozy-ui/transpiled/react/MuiCozyTheme/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction'
import ActionMenu, { ActionMenuItem, ActionMenuRadio, ActionMenuHeader } from 'cozy-ui/transpiled/react/ActionMenu'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Menu from 'cozy-ui/transpiled/react/MuiCozyTheme/Menus'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FiletypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText'
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots"
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'
import FileIcon from 'cozy-ui/transpiled/react/Icons/File'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import Typography from 'cozy-ui/transpiled/react/Typography'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'
import HelpIcon from 'cozy-ui/transpiled/react/Icons/Help'
import LinkOutIcon from 'cozy-ui/transpiled/react/Icons/LinkOut'
import PieChartIcon from 'cozy-ui/transpiled/react/Icons/PieChart'
import CommentIcon from 'cozy-ui/transpiled/react/Icons/Comment'
import MagicTrickIcon from 'cozy-ui/transpiled/react/Icons/MagicTrick'
import Radio from 'cozy-ui/transpiled/react/Radios'

initialState = { showMenu: false }

const anchorRef = React.useRef()
const hideMenu = () => setState({ showMenu: false })
const toggleMenu = () => {setState(state => ({ showMenu: !state.showMenu }))}

;

<BreakpointsProvider>
  <List>
    <ListSubheader>Section 1</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Icon icon={FileTypeFolderIcon} size={32} />
      </ListItemIcon>
      <ListItemText primary="I'm a primary text"/>
      <ListItemText secondary="Metadata"/>
      <ListItemText secondary="Metadata"/>
    </ListItem>

    <Divider component="li" variant="inset" />

    <ListItem button>
      <ListItemIcon>
        <Icon icon={FiletypeTextIcon} size={32} />
      </ListItemIcon>
      <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
    </ListItem>

    <Divider component="li" variant="inset" />

    <ListItem button>
      <ListItemIcon>
        <Icon icon={FiletypeTextIcon} size={32} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography variant="caption">I'm a primary text</Typography>
        }
        secondary={
          <Typography variant="body1">I'm a secondary text</Typography>
        }
      />
    </ListItem>

    <ListSubheader style={{ textIndent: '1rem' }}>Mobile alignment even on desktop</ListSubheader>
    <ListItem style={{ paddingLeft: '1rem' }} button>
      <ListItemIcon>
        <Icon icon={FileTypeFolderIcon} size={32} />
      </ListItemIcon>
      <ListItemText primary="I'm a primary text"/>
    </ListItem>

    <Divider component="li" variant="inset" />

    <ListItem style={{ paddingLeft: '1rem' }} button>
      <ListItemIcon>
        <Icon icon={FileTypeFolderIcon} size={32} />
      </ListItemIcon>
      <ListItemText primary="I'm a primary text"/>
    </ListItem>

    <ListSubheader>Section 2</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Icon icon={CommentIcon} />
      </ListItemIcon>
      <ListItemText primary="Support" />
      {state.showMenu && (
        <ActionMenu
          anchorElRef={anchorRef}
          autoclose
          onClose={hideMenu}
        >
          <ActionMenuItem left={<Icon icon={FileIcon} />}>
            <Typography variant="body1" gutterBottom>
              Item 1
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Descriptive text to elaborate on what item 3 does.
            </Typography>
          </ActionMenuItem>
          <ActionMenuItem left={<Icon icon={FileIcon} />}>
            <Typography variant="body1" gutterBottom>
              Item 2
            </Typography>
          </ActionMenuItem>
        </ActionMenu>
      )}
      <ListItemSecondaryAction>
        <IconButton ref={anchorRef} onClick={toggleMenu}>
          <Icon icon={DotsIcon} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>

    <Divider component="li" variant="inset" />

    <ListItem button>
      <ListItemIcon>
        <Icon icon={MagicTrickIcon} />
      </ListItemIcon>
      <ListItemText primary="Double actions" />
      <ListItemSecondaryAction>
        <IconButton>
          <Icon icon={RightIcon} />
        </IconButton>
        <IconButton>
          <Icon icon={DotsIcon} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>

    <Divider component="li" />

    <ListItem button>
      <ListItemIcon>
        <Icon icon={PeopleIcon} />
      </ListItemIcon>
      <ListItemText primary="Profil" />
      <Icon icon={RightIcon} />
    </ListItem>

    <Divider component="li" variant="inset" />

    <ListItem button>
      <ListItemIcon>
        <Icon icon={PeopleIcon} />
      </ListItemIcon>
      <ListItemText primary={content.ada.short} secondary={content.ada.short} />
      <Radio edge="end" />
    </ListItem>

    <Divider component="li" variant="inset" />

    <ListItem button>
      <ListItemIcon>
        <Icon icon={HelpIcon} />
      </ListItemIcon>
      <ListItemText primary="Help" />
      <Icon icon={LinkOutIcon} />
    </ListItem>

    <Divider component="li" variant="inset" />

    <ListItem button>
      <ListItemIcon>
        <Icon icon={PieChartIcon} />
      </ListItemIcon>
      <ListItemText primary="Storage" />
      <Typography
        style={{ color: "var(--secondaryTextColor)" }}
        className="u-mr-half"
        variant="body2"
      >
        82% used
      </Typography>
      <Icon icon={RightIcon} />
    </ListItem>
  </List>
</BreakpointsProvider>
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
