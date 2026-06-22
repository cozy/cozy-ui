Re-export of @material-ui. See [the official API](https://v4.mui.com/api/menu/).

```jsx
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import Menu from 'cozy-ui/transpiled/react/Menu'
import MenuItem from 'cozy-ui/transpiled/react/MenuItem'
import List from 'cozy-ui/transpiled/react/List'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import { Attachment, Attention, Contrast, Copy, Dots, Icon, Pen, People, Telephone } from '@linagora/twake-icons'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Divider from 'cozy-ui/transpiled/react/Divider'
import Typography from 'cozy-ui/transpiled/react/Typography'

initialState = { showMenu: isTesting() }

const ref = React.useRef(null)

const toggleMenu = () => setState(state => ({ showMenu: !state.showMenu }))
const hideMenu = () => setState({ showMenu: false })

;

<>
  <DropdownButton
    ref={ref}
    aria-controls="simple-menu"
    aria-haspopup="true"
    onClick={toggleMenu}
  >
    Show menu
  </DropdownButton>
  <Menu
    open={state.showMenu}
    anchorEl={ref.current}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left'
    }}
    keepMounted
    onClose={hideMenu}
  >
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={Pen} />
      </ListItemIcon>
      <ListItemText primary="Modify" />
      <ListItemIcon>
        <Typography color='error'>
          <Icon icon={Attention} />
        </Typography>
      </ListItemIcon>
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={People} />
      </ListItemIcon>
      <ListItemText primary="People" />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={Attachment} />
      </ListItemIcon>
      <ListItemText primary="Attachment" />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={People} />
      </ListItemIcon>
      <ListItemText
        primary="Item with a very long title to show how it should be displayed"
        primaryTypographyProps={{ ellipsis: false }}
      />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemText primary="Item without icon" />
    </MenuItem>

    <Divider className="u-mv-half" />

    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={Telephone} />
      </ListItemIcon>
      <ListItemText primary="Call" />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={Contrast} />
      </ListItemIcon>
      <ListItemText primary="Contrast" />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={Copy} />
      </ListItemIcon>
      <ListItemText primary="Copy" />
    </MenuItem>
  </Menu>
</>
