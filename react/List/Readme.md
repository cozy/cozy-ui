Displays a List of items, with several metadata

### Basic usage

```bash
import List from 'cozy-ui/transpiled/react/List'
import ListSubheader from 'cozy-ui/transpiled/react/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'

<List subheader={<ListSubheader>Subheader title</ListSubheader>}>
  <ListItem button>
    <ListItemIcon>
      <Icon icon={...} />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
  </ListItem>

  <Divider component="li" variant="inset" />

  <ListItem button>
    ...
  </ListItem>
</List>
```

### Demo

```jsx
import List from 'cozy-ui/transpiled/react/List'
import ListSubheader from 'cozy-ui/transpiled/react/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'
import ActionsMenu from 'cozy-ui/transpiled/react/ActionsMenu'
import ActionsMenuItem from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem'
import ActionsMenuWrapper from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuWrapper'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Menu from 'cozy-ui/transpiled/react/deprecated/Menus'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from 'cozy-ui/transpiled/react/Divider'
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FiletypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText'
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots"
import PenIcon from "cozy-ui/transpiled/react/Icons/Pen"
import TrashIcon from "cozy-ui/transpiled/react/Icons/Trash"
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
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
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import Variants from 'cozy-ui/docs/components/Variants'

initialState = { showMenu: false }

const anchorRef = React.useRef()
const hideMenu = () => setState({ showMenu: false })
const toggleMenu = () => setState(state => ({ showMenu: !state.showMenu }))

const initialVariants = [{ dense: false, disabledGutters: false, doubleGutters: false, small: false, large: false }]

;

<BreakpointsProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => {
      const gutters = variant.disabledGutters ? 'disabled' : variant.doubleGutters ? 'double' : 'default'
      const size = variant.small ? 'small' : variant.large ? 'large' : 'medium'

      const listItemProps = { gutters, size }

      return (
        <>
          <List dense={variant.dense} subheader={<ListSubheader>Section 1</ListSubheader>}>
            <ListItem {...listItemProps} button divider={variant.divider}>
              <ListItemIcon>
                <Icon icon={FileTypeFolderIcon} size={32} />
              </ListItemIcon>
              <ListItemText primary="I'm a primary text"/>
              <ListItemText secondary="Metadata"/>
              <ListItemText secondary="Metadata"/>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={FiletypeTextIcon} size={32} />
              </ListItemIcon>
              <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={FiletypeTextIcon} size={32} />
              </ListItemIcon>
              <ListItemText
                primary="I'm a primary text"
                secondary="I'm a secondary text"
                primaryTypographyProps={{ variant: 'caption' }}
                secondaryTypographyProps={{ color: 'initial', variant: variant.dense ? 'body2' : 'body1' }}
              />
            </ListItem>
          </List>

          <List dense={variant.dense} subheader={<ListSubheader>Section 2</ListSubheader>}>
            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={CommentIcon} />
              </ListItemIcon>
              <ListItemText primary="Support" />
              <ListItemSecondaryAction>
                <IconButton ref={anchorRef} onClick={toggleMenu}>
                  <Icon icon={DotsIcon} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            {state.showMenu && (
              <ActionsMenuWrapper
                anchorEl={anchorRef.current}
                open
                autoclose
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                onClose={hideMenu}
              >
                <ActionsMenuItem>
                  <ListItemIcon>
                    <Icon icon={FileIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Item 1" secondary="Descriptive text to elaborate on what item 3 does."/>
                </ActionsMenuItem>
                <ActionsMenuItem>
                  <ListItemIcon>
                    <Icon icon={FileIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Item 2" />
                </ActionsMenuItem>
              </ActionsMenuWrapper>
            )}
            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
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
          </List>

          <Divider />

          <List dense={variant.dense}>
            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={PeopleIcon} />
              </ListItemIcon>
              <ListItemText primary="Profil" />
              <ListItemIcon>
                <Icon icon={RightIcon} />
              </ListItemIcon>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={PeopleIcon} />
              </ListItemIcon>
              <ListItemText primary={content.ada.short} secondary={content.ada.short} />
              <ListItemIcon>
                <Radio />
              </ListItemIcon>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={HelpIcon} />
              </ListItemIcon>
              <ListItemText primary="Help" />
              <ListItemIcon>
                <Icon icon={LinkOutIcon} />
              </ListItemIcon>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={PieChartIcon} />
              </ListItemIcon>
              <ListItemText primary="Storage" />
              <Typography
                style={{ color: "var(--secondaryTextColor)" }}
                variant="body2"
              >
                82% used
              </Typography>
              <ListItemIcon>
                <Icon icon={RightIcon} />
              </ListItemIcon>
            </ListItem>
          </List>
        </>
      )
    }}
  </Variants>
</BreakpointsProvider>
```

### Highlighted item

Highlight a selected item from the list

```jsx
import List from 'cozy-ui/transpiled/react/List'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Divider from 'cozy-ui/transpiled/react/Divider'
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FiletypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText'

;

<List>
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FileTypeFolderIcon} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text"/>
  </ListItem>
  <Divider variant="inset" />
  <ListItem selected={true} button>
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
