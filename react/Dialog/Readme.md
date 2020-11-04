## Dialog

If no ready made [CozyDialogs](#/CozyDialogs) corresponds to what you need, you can use
Dialog directly. The useCozyDialog hook returns props to spread on the components
used in your custom Dialog.

```jsx
import cx from 'classnames'

import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog';
import {
  DialogTransition,
  DialogBackButton,
  DialogCloseButton,
  useCozyDialog
} from 'cozy-ui/transpiled/react/CozyDialogs';
import useBreakpoints, {
  BreakpointsProvider
} from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Button from 'cozy-ui/transpiled/react/Button'
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List';
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem';
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon';
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction';
import Icon from 'cozy-ui/transpiled/react/Icon';
import Menu from 'cozy-ui/transpiled/react/MuiCozyTheme/Menus';
import MenuItem from '@material-ui/core/MenuItem'

const handleClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }

const ExampleDialog = ({ open, onClose }) => {
  const { isMobile } = useBreakpoints()
  const { dialogProps, dialogTitleProps, listItemProps } = useCozyDialog({
    size: 'medium',
    classes: {
      paper: 'my-class'
    },
    open,
    onClose,
    disableEnforceFocus: true
  })

  return (
    <Dialog
      {...dialogProps}
    >
      <style type='text/css'>{`
        .my-class {
          <!-- https://uigradients.com/#Margo -->
          background: linear-gradient(to right, #ffefba, #ffffff);
        }
      `}</style>
      <DialogCloseButton onClick={onClose} />
      <DialogTitle {...dialogTitleProps}>
        {isMobile ? <DialogBackButton onClick={onClose} /> : null}
        Ada Lovelace
      </DialogTitle>
      <List>
        <ListItem {...listItemProps}>
          <ListItemIcon>
            <Icon icon="folder" width="32" height="32" />
          </ListItemIcon>
          <ListItemText primary="I'm a primary text"/>
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
        <ListItem {...listItemProps}>
          <ListItemIcon>
            <Icon icon="file" width="32" height="32" />
          </ListItemIcon>
          <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
        </ListItem>
        <ListItem {...listItemProps}>
          <ListItemText primary="I'm a primary text" />
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
      <DialogActions>
        <Button
          theme="secondary"
          onClick={() => onClose()}
          label={'Close Modal'}
        />
        <Button
          theme="primary"
          label='Click Me'
          onClick={() => alert('click')}
        />
      </DialogActions>
    </Dialog>
  )
}

;<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <BreakpointsProvider>
    <MuiCozyTheme>
      <ExampleDialog open={state.modalOpened} onClose={handleClose} />
    </MuiCozyTheme>
  </BreakpointsProvider>
</>
```
