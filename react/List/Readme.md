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
import ActionsMenuItem from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem'
import ActionsMenuWrapper from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuWrapper'
import { Comment, Dots, File, FileTypeFolder, FileTypeText, Help, Icon, LinkOut, MagicTrick, People, PieChart, Right } from '@linagora/twake-icons'
import Divider from 'cozy-ui/transpiled/react/Divider'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Radio from 'cozy-ui/transpiled/react/Radios'
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
                <Icon icon={FileTypeFolder} size={32} />
              </ListItemIcon>
              <ListItemText primary="I'm a primary text"/>
              <ListItemText secondary="Metadata"/>
              <ListItemText secondary="Metadata"/>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={FileTypeText} size={32} />
              </ListItemIcon>
              <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={FileTypeText} size={32} />
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
                <Icon icon={Comment} />
              </ListItemIcon>
              <ListItemText primary="Support" />
              <ListItemSecondaryAction>
                <IconButton ref={anchorRef} onClick={toggleMenu}>
                  <Icon icon={Dots} />
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
                    <Icon icon={File} />
                  </ListItemIcon>
                  <ListItemText primary="Item 1" secondary="Descriptive text to elaborate on what item 3 does."/>
                </ActionsMenuItem>
                <ActionsMenuItem>
                  <ListItemIcon>
                    <Icon icon={File} />
                  </ListItemIcon>
                  <ListItemText primary="Item 2" />
                </ActionsMenuItem>
              </ActionsMenuWrapper>
            )}
            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={MagicTrick} />
              </ListItemIcon>
              <ListItemText primary="Double actions" />
              <ListItemSecondaryAction>
                <IconButton>
                  <Icon icon={Right} />
                </IconButton>
                <IconButton>
                  <Icon icon={Dots} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <Divider />

          <List dense={variant.dense}>
            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={People} />
              </ListItemIcon>
              <ListItemText primary="Profil" />
              <ListItemIcon>
                <Icon icon={Right} />
              </ListItemIcon>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={People} />
              </ListItemIcon>
              <ListItemText primary={content.ada.short} secondary={content.ada.short} />
              <ListItemIcon>
                <Radio />
              </ListItemIcon>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={Help} />
              </ListItemIcon>
              <ListItemText primary="Help" />
              <ListItemIcon>
                <Icon icon={LinkOut} />
              </ListItemIcon>
            </ListItem>

            <Divider component="li" variant="inset" />

            <ListItem {...listItemProps} button>
              <ListItemIcon>
                <Icon icon={PieChart} />
              </ListItemIcon>
              <ListItemText primary="Storage" />
              <Typography
                style={{ color: "var(--secondaryTextColor)" }}
                variant="body2"
              >
                82% used
              </Typography>
              <ListItemIcon>
                <Icon icon={Right} />
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
import { FileTypeFolder, FileTypeText, Icon } from '@linagora/twake-icons'
import Divider from 'cozy-ui/transpiled/react/Divider'

;

<List>
  <ListItem button>
    <ListItemIcon>
      <Icon icon={FileTypeFolder} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text"/>
  </ListItem>
  <Divider variant="inset" />
  <ListItem selected={true} button>
    <ListItemIcon>
      <Icon icon={FileTypeText} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
  </ListItem>
  <Divider variant="inset" />
  <ListItem  button>
    <ListItemIcon>
      <Icon icon={FileTypeText} width="32" height="32" />
    </ListItemIcon>
    <ListItemText primary="I'm a primary text" />
  </ListItem>
</List>

```
