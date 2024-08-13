Re-export of @material-ui. See [the official API](https://v4.mui.com/api/menu/).

```jsx
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import Menu from 'cozy-ui/transpiled/react/Menu'
import MenuItem from 'cozy-ui/transpiled/react/MenuItem'
import List from 'cozy-ui/transpiled/react/List'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import CopyIcon from 'cozy-ui/transpiled/react/Icons/Copy'
import PenIcon from 'cozy-ui/transpiled/react/Icons/Pen'
import TelephoneIcon from 'cozy-ui/transpiled/react/Icons/Telephone'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import DotsIcon from 'cozy-ui/transpiled/react/Icons/Dots'
import AttachmentIcon from 'cozy-ui/transpiled/react/Icons/Attachment'
import ContrastIcon from 'cozy-ui/transpiled/react/Icons/Contrast'
import AttentionIcon from 'cozy-ui/transpiled/react/Icons/Attention'
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
        <Icon icon={PenIcon} />
      </ListItemIcon>
      <ListItemText primary="Modify" />
      <ListItemIcon>
        <Typography color='error'>
          <Icon icon={AttentionIcon} />
        </Typography>
      </ListItemIcon>
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={PeopleIcon} />
      </ListItemIcon>
      <ListItemText primary="People" />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={AttachmentIcon} />
      </ListItemIcon>
      <ListItemText primary="Attachment" />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={PeopleIcon} />
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
        <Icon icon={TelephoneIcon} />
      </ListItemIcon>
      <ListItemText primary="Call" />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={ContrastIcon} />
      </ListItemIcon>
      <ListItemText primary="Contrast" />
    </MenuItem>
    <MenuItem onClick={hideMenu}>
      <ListItemIcon>
        <Icon icon={CopyIcon} />
      </ListItemIcon>
      <ListItemText primary="Copy" />
    </MenuItem>
  </Menu>
</>
```
