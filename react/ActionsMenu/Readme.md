Use an ActionsMenu to show a list of actions. ActionsMenu automatically switch display between desktop and mobile. The action list can be created entirely with lower level components, but it is recommanded to use a high level component and provide it with a previously created action list.

You can pass a reference to a custom DOM element through the `ref` prop to attach the menu to that element. This is useful is you want to be able to have `autoClose` true and be able to close the menu by clicking on the same component that opens it.

A header `ActionsMenuMobileHeader` can be used to provide context on the menu actions. Since on desktop, we display a popper and not a `BottomSheet`, context for the user is not lost, so the header would be redundant. This is why it is not rendered unless we are on mobile.

### How to create and use actions

An action is a simple function that returns an object with specific keys:

* **name** : `<string>` – Action's name
* **icon** : `<string>|<object>|<func>` – Action's icon
* **label** : `<string>` – Action's label
* **disabled** : `<func>` – Used to add `disable` effect (the action is still displayed)
* **displayCondition** : `<func>` – Whether the action is displayed. Must return a boolean
* **action** : `<func>` – Method triggered when clicking the action
* **Component** : `<func>` – The returned component that manages the display

```bash
const actionExpl = options => ({
  name: 'expl',
  action: () => {},
  disabled: false,
  Component: props => {
    return <SomeComponent {...props} />
  }
})
```

The method `makeActions` takes `actions` array as first argument, and `options` as second argument. `options` are then passed to the `actions` component as `props`.

```bash
const action1 = ({ option1, option2, option5 }) => ({
  name: action1,
  action: (doc, { option3, option4 }) => {}
  Component: ({ onClick, ...props }) => <SomeComponent {...props} onClick={() => onClick({ option3 })}} />
})

const actions = makeActions([action1, action2], { option1, option2 })
```

Then you can use `ActionsItems` to render the actions, and pass options (as simple props) and component (in `component` prop) to be used for rendering.

```bash
<ActionsItems actions={actions} docs={[file]} component={ActionComponent} option5="" />
```

### ActionsMenu with an automatic creation of actions

Use `makeActions` method and create (or use the predefined actions) to build the actions to pass to `ActionsMenu`. You can pass options to actions with `componentsProps.actionsItems.actionOptions` prop.

```bash
<ActionsMenu actions={actions} componentsProps={{ actionsItems: { actionOptions: { option4 }} }} />
```

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import ActionsMenu from 'cozy-ui/transpiled/react/ActionsMenu'
import ActionsMenuItem from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem'
import ActionsMenuMobileHeader from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuMobileHeader'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import { File, FileTypeText, Icon } from '@linagora/twake-icons'

import { makeActions, modify, emailTo, print, viewInContacts, viewInDrive, divider, smsTo, call } from 'cozy-ui/transpiled/react/ActionsMenu/Actions'

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
          <Icon icon={File} />
        </ListItemIcon>
        <ListItemText
          primary="This is a custom action, with a very long text to show how it is displayed"
          secondary="This is a custom action, with a very long text to show how it is displayed"
        />
      </ActionsMenuItem>
    )
  })
})

  const mockClient = { getStackClient: () => ({ uri: `https://` }), getInstanceOptions: () => ({ subdomain: '' }) }

const actions = makeActions([ modify, viewInContacts, viewInDrive, divider, call, smsTo, emailTo, print, divider, customAction ], { client: mockClient, generateWebLink: () => {}, fetchBlobFileById: () => {}, isFile: () => {} })

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
    docs={[doc]}
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

### ActionsMenu with a manual creation of the actions

We don't use `makeActions` here, all actions are created "by hand". This is not the recommanded choice.

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import ActionsMenuWrapper from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuWrapper'
import ActionsMenuItem from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem'
import ActionsMenuMobileHeader from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuMobileHeader'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import { Attachment, Attention, Contrast, Copy, FileTypeText, Icon, Pen, People, Telephone } from '@linagora/twake-icons'
import Divider from 'cozy-ui/transpiled/react/Divider'
import Typography from 'cozy-ui/transpiled/react/Typography'

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
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
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
      <ActionsMenuItem autoFocus={true} onClick={() => alert('click')}>
        <ListItemIcon>
          <Icon icon={Pen} />
        </ListItemIcon>
        <ListItemText primary="Modify" />
        <ListItemIcon>
          <Typography color='error'>
            <Icon icon={Attention} />
          </Typography>
        </ListItemIcon>
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={People} />
        </ListItemIcon>
        <ListItemText primary="People" />
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={Attachment} />
        </ListItemIcon>
        <ListItemText primary="Attachment" />
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemText primary="Item without icon" />
      </ActionsMenuItem>

      <Divider className="u-mv-half" />

      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={Telephone} />
        </ListItemIcon>
        <ListItemText primary="Call" />
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={Contrast} />
        </ListItemIcon>
        <ListItemText primary="Contrast" />
      </ActionsMenuItem>
      <ActionsMenuItem>
        <ListItemIcon>
          <Icon icon={Copy} />
        </ListItemIcon>
        <ListItemText primary="Copy" />
      </ActionsMenuItem>
    </ActionsMenuWrapper>
  )}
</DemoProvider>
```
