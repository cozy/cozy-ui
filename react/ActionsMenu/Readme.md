Use an ActionsMenu to show a list of actions. ActionsMenu automatically switch display between desktop and mobile. The action list can be created entirely with lower level components, but it is recommanded to use a high level component and provide it with a previously created action list.

You can pass a reference to a custom DOM element through the `ref` prop to attach the menu to that element. This is useful is you want to be able to have `autoClose` true and be able to close the menu by clicking on the same component that opens it.

A header `ActionsMenuMobileHeader` can be used to provide context on the menu actions. Since on desktop, we display a popper and not a `BottomSheet`, context for the user is not lost, so the header would be redundant. This is why it is not rendered unless we are on mobile.

### With an automatic creation of actions

Use `makeActions` method and create (or use the predefined actions) to build the actions to pass to `ActionsMenu` high level component. The method `makeActions` takes `actions` array as first argument, and `options` as second argument. `options` are then passed to the `actions` component as `props`.

```bash
const action1 = ({ option1, option2 }) => ({
  name: action1,
  Component: props => <SomeComponent {...props} />
})

const actions = makeActions([action1, action2], { option1, option2 })
```

#### How to create actions

An action is a simple function that returns an object with specific keys:

* **name** : `<string>` – Action's name
* **action** : `<func>` – Method triggered when clicking the action
* **disabled** : `<bool>` – Used to add `disable` effect (the action is still displayed)
* **Component** : `<func>` – The returned component that manages the display

```bash
const expl = makeActionOptions => ({
  name: 'expl',
  action: () => {},
  disabled: false,
  Component: props => {
    return <SomeComponent {...props} />
  }
})
```

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import ActionsMenu from 'cozy-ui/transpiled/react/ActionsMenu'
import ActionsMenuItem from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem'
import ActionsMenuMobileHeader from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuMobileHeader'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileTypeText from 'cozy-ui/transpiled/react/Icons/FileTypeText'
import FileIcon from 'cozy-ui/transpiled/react/Icons/File'

import { makeActions, modify, emailTo, viewInContacts, divider, smsTo, call } from 'cozy-ui/transpiled/react/ActionsMenu/Actions'

initialState = { showMenu: isTesting() }

const anchorRef = React.useRef(null)

const showMenu = () => setState({ showMenu: true })
const hideMenu = () => setState({ showMenu: false })
const toggleMenu = () => setState(state => ({ showMenu: !state.showMenu }))

const doc = {
  _id: 'id01',
  _type: 'io.cozy.contacts',
  phone: [{ number: '0102030405' }],
  email: [{ address: 'johndoe@cozy.cc' }],
}

const customAction = () => ({
  name: 'customAction',
  action: () => alert('click'),
  Component: React.forwardRef((props, ref) => {
    return (
      <ActionsMenuItem {...props} ref={ref}>
        <ListItemIcon>
          <Icon icon={FileIcon} />
        </ListItemIcon>
        <ListItemText primary="This is a custom action, with a very long text to show how it is displayed" />
      </ActionsMenuItem>
    )
  })
})

const actions = makeActions([ modify, viewInContacts, divider, call, smsTo, emailTo, divider, customAction ])

;

<DemoProvider>
  <DropdownButton
    ref={anchorRef}
    aria-controls="simple-menu"
    aria-haspopup="true"
    onClick={toggleMenu}
  >
    Show action menu
  </DropdownButton>
  <ActionsMenu
    ref={anchorRef}
    open={state.showMenu}
    doc={doc}
    actions={actions}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    autoClose
    onClose={hideMenu}
  >
    <ActionsMenuMobileHeader>
      <ListItemIcon>
        <Icon icon={FileTypeText} size={32} />
      </ListItemIcon>
      <ListItemText primary="Title" primaryTypographyProps={{ variant: 'h6' }} />
    </ActionsMenuMobileHeader>
  </ActionsMenu>
</DemoProvider>
```

### With a manual creation of the actions

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import ActionsMenuWrapper from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuWrapper'
import ActionsMenuItem from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem'
import ActionsMenuMobileHeader from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuMobileHeader'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import Icon from 'cozy-ui/transpiled/react/Icon'
import CopyIcon from 'cozy-ui/transpiled/react/Icons/Copy'
import PenIcon from 'cozy-ui/transpiled/react/Icons/Pen'
import TelephoneIcon from 'cozy-ui/transpiled/react/Icons/Telephone'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import AttachmentIcon from 'cozy-ui/transpiled/react/Icons/Attachment'
import ContrastIcon from 'cozy-ui/transpiled/react/Icons/Contrast'
import AttentionIcon from 'cozy-ui/transpiled/react/Icons/Attention'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Typography from 'cozy-ui/transpiled/react/Typography'
import FileTypeText from 'cozy-ui/transpiled/react/Icons/FileTypeText'

initialState = { showMenu: isTesting() }

const anchorRef = React.useRef(null)

const showMenu = () => setState({ showMenu: true })
const hideMenu = () => setState({ showMenu: false })
const toggleMenu = () => setState(state => ({ showMenu: !state.showMenu }))

;

<DemoProvider>
  <DropdownButton
    ref={anchorRef}
    aria-controls="simple-menu"
    aria-haspopup="true"
    onClick={toggleMenu}
  >
    Show action menu
  </DropdownButton>
  {state.showMenu && (
    <ActionsMenuWrapper
      open={state.showMenu}
      anchorEl={anchorRef.current}
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
      autoClose
      onClose={hideMenu}
    >
      <ActionsMenuMobileHeader>
        <ListItemIcon>
          <Icon icon={FileTypeText} size={32} />
        </ListItemIcon>
        <ListItemText primary="Title" primaryTypographyProps={{ variant: 'h6' }} />
      </ActionsMenuMobileHeader>
      <ActionsMenuItem onClick={() => alert('click')}>
        <ListItemIcon>
          <Icon icon={PenIcon} />
        </ListItemIcon>
        <ListItemText primary="Modify" />
        <ListItemIcon>
          <Typography color='error'>
            <Icon icon={AttentionIcon} />
          </Typography>
        </ListItemIcon>
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={PeopleIcon} />
        </ListItemIcon>
        <ListItemText primary="People" />
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={AttachmentIcon} />
        </ListItemIcon>
        <ListItemText primary="Attachment" />
      </ActionsMenuItem>

      <Divider className="u-mv-half" />

      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={TelephoneIcon} />
        </ListItemIcon>
        <ListItemText primary="Call" />
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={ContrastIcon} />
        </ListItemIcon>
        <ListItemText primary="Contrast" />
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={CopyIcon} />
        </ListItemIcon>
        <ListItemText primary="Copy" />
      </ActionsMenuItem>
    </ActionsMenuWrapper>
  )}
</DemoProvider>
```
