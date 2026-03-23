## Dialog

If no ready made [CozyDialogs](#/CozyDialogs) corresponds to what you need, you can use
Dialog directly. The useCozyDialog takes [CozyDialog props]([CozyDialogs](#/CozyDialogs))
and returns props to spread on the components used in your custom Dialog. Those props
will make sure that even your custom Dialogs will behave as CozyDialogs.

```jsx
import Dialog, { DialogTitle, DialogActions } from 'cozy-ui/transpiled/react/Dialog'
import { DialogBackButton, DialogCloseButton, useCozyDialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

import Divider from 'cozy-ui/transpiled/react/Divider'
import Button from 'cozy-ui/transpiled/react/Buttons'
import List from 'cozy-ui/transpiled/react/List'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FileTypeText from 'cozy-ui/transpiled/react/Icons/FileTypeText'

import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots"

const handleClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }

const ExampleDialog = ({ open, onClose }) => {
  const { isMobile } = useBreakpoints()
  const { dialogProps, dialogTitleProps, listItemProps, dividerProps, dialogActionsProps } = useCozyDialog({
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
      <Divider />
      <List className='u-mv-half'>
        <ListItem {...listItemProps} button>
          <ListItemIcon>
            <Icon icon={FileTypeFolderIcon} width="32" height="32" />
          </ListItemIcon>
          <ListItemText primary="I'm a primary text"/>
        </ListItem>
        <Divider {...dividerProps} variant='inset' />
        <ListItem {...listItemProps} button>
          <ListItemIcon>
            <Icon icon={FileTypeText} width="32" height="32" />
          </ListItemIcon>
          <ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
        </ListItem>
        <Divider {...dividerProps} variant='inset' />
        <ListItem {...listItemProps} button>
          <ListItemIcon>
            <Icon icon={FileTypeText} width="32" height="32" />
          </ListItemIcon>
          <ListItemText primary="I'm a primary text" />
        </ListItem>
      </List>
      <Divider {...dividerProps} />
      <DialogActions {...dialogActionsProps}>
        <Button
          variant="secondary"
          onClick={() => onClose()}
          label={'Close Modal'}
        />
        <Button
          label='Click Me'
          onClick={() => console.info('Click!')}
        />
      </DialogActions>
    </Dialog>
  )
}

;

<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <DemoProvider>
    <ExampleDialog open={state.modalOpened} onClose={handleClose} />
  </DemoProvider>
</>
```
