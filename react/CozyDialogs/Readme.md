Pre-built modals ready to be directly used in applications, based on MUI Dialog.

* Dialog : default Cozy modal
* ConfirmDialog : used for confirmation popups
* IllustrationDialog : used for illustration as title
* FixedDialog : default one but with both title/actions fixed
* FixedActionsDialog : default one but with title fluid and actions fixed

Will automatically:

* Be aria-labelled via the title
* Switch to fullscreen on mobile unless the size is small

### Props

* size : `<string>` Can be "s", "m" (default) or "l"
* opened : `<boolean>` (required) To open/close the modal
* onClose : `<function>` (required) Triggered function on modal close action
* title : `<node>` Title of the modal
* content : `<node>` Content of the modal
* actions : `<node>` Actions of the modal
* actionsLayout : `<string>` Can be "row" or "column"

Additionally, all the CozyDialogs support [MUI Dialog's props](https://v3.material-ui.com/api/dialog/). 

```jsx
import Variants from 'docs/components/Variants'

import {
  Dialog,
  ConfirmDialog,
  IllustrationDialog,
  FixedDialog,
  FixedActionsDialog
} from  'cozy-ui/transpiled/react/CozyDialogs'
import ActionMenu, { ActionMenuItem, ActionMenuRadio } from 'cozy-ui/transpiled/react/ActionMenu';
import { Text, Caption } from 'cozy-ui/transpiled/react/Text';

import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Button from 'cozy-ui/transpiled/react/Button'
import Icon from 'cozy-ui/transpiled/react/Icon'

const handleClose = () => setState({ modalOpened: !state.modalOpened })

initialState = {
  modalOpened: false,
  modal: Dialog,
  size: 'medium',
  actionsLayout: 'row',
  content: 'default'
}

const DialogComponent = state.modal

const ExampleActionMenu = ({ onClose }) => {
  return (
    <ActionMenu
        anchorElRef={this.ref}
        autoclose={true}
        onClose={onClose}>
        <ActionMenuItem left={<Icon icon='file' />} right={<Icon icon='warning' />}>Item 1</ActionMenuItem>
        <ActionMenuItem left={<ActionMenuRadio />}>Item 2</ActionMenuItem>
        <ActionMenuItem left={<Icon icon='file' />}>
          <Text>
            Item 3
          </Text>
          <Caption>
            Descriptive text to elaborate on what item 3 does.
          </Caption>
        </ActionMenuItem>
    </ActionMenu>
  )
}

const handleOpenActionMenu = () => setState({ showActionMenu: true })
const handleCloseActionMenu = () => setState({ showActionMenu: false })

const ExampleDialogActions = () => {
  return (
    <>
      <Button
        theme="secondary"
        onClick={handleClose}
        label={'Close Modal'}
      />
      <Button
        theme="primary"
        label='Do something'
        onClick={() => alert('click')}
      />
    </>
  )
}

const ConfirmDialogActions = () => {
  return (
    <>
      <Button
        theme="secondary"
        onClick={handleClose}
        label={'Close Modal'}
      />
      <Button
        theme="danger"
        label='Do something destructive'
        onClick={() => alert('click')}
      />
    </>
  )
}

const dialogTitles = {
  ConfirmDialog: "Are you sure ?",
  IllustrationDialog: <Icon icon="cozy" size="140" />,
  FixedDialog: 'Fixed Dialog',
  FixedActionsDialog: 'Fixed Actions Dialog',
  Dialog: 'Dialog'
}

const dialogContents = {
  ConfirmDialog: "Content of a confirm dialog, precising what the actions will do, and asking the user if she is sure.",
  IllustrationDialog: "An IllustrationDialog contains short content." + content.ada.short,
  FixedDialog: "A FixedDialog can contain very long content. Actions are at the bottom of the content are not visible to the user if she has not scrolled to the bottom. " + content.ada.long,
  FixedActionsDialog: "A FixedActionsDialog can contain very long content. Actions are visible even without scrolling. " + content.ada.long,
  Dialog: <>
    <p>
      {"A normal Dialog should contain short content. " + content.ada.short}
    </p>
    <p>
      <Button theme="secondary" size="small" onClick={handleOpenActionMenu} label="Open action menu" />
    </p>
  { state.showActionMenu ? <ExampleActionMenu onClose={handleCloseActionMenu} /> : null }
  </>
}

const dialogActions = {
  ConfirmDialog: <ConfirmDialogActions />,
  IllustrationDialog: <ExampleDialogActions />,
  FixedDialog: <ExampleDialogActions />,
  FixedActionsDialog: <ExampleDialogActions />,
  Dialog: <ExampleDialogActions />
}


const dialogs = [
  Dialog,
  ConfirmDialog,
  IllustrationDialog,
  FixedDialog,
  FixedActionsDialog
];

const StateRadio = ({ name, ...props }) => {
  return <input
    type='radio'
    name={name}
    checked={state[name] == props.value}
    onChange={() => setState({ [name]: props.value })}
    {...props}
  />
}

const toggleDialog = dialog => {
  setState({
    modalOpened: !state.modalOpened,
    modal: dialog
  })
}

<>
  <BreakpointsProvider>
    <MuiCozyTheme>
      <p>Content:
        <StateRadio value='default' name='content' /> default{' '}
        <StateRadio value='short' name='content' /> short{' '}
        <StateRadio value='long' name='content' /> long 
      </p>
      <p>Size:
        <StateRadio value='small' name='size' /> small {' '}
        <StateRadio value='medium' name='size' /> medium {' '}
        <StateRadio value='large' name='size' /> large 
      </p>
      <p>Actions layout:
        <StateRadio value='row' name='actionsLayout' /> row{' '}
        <StateRadio value='column' name='actionsLayout' /> column 
      </p>
      <DialogComponent
        size={DialogComponent !== ConfirmDialog ? state.size : undefined}
        open={state.modalOpened}
        onClose={handleClose}
        title={dialogTitles[DialogComponent.name]}
        content={state.content == 'default'
          ? dialogContents[DialogComponent.name]
          : state.content == 'long'
            ? content.ada.long 
            : content.ada.short}
        actions={dialogActions[DialogComponent.name]}
        actionsLayout={state.actionsLayout}
      />
    </MuiCozyTheme>
  </BreakpointsProvider>
  {dialogs.map(dialog => (
    <button data-test-id={`open-btn-${dialog.name}`} onClick={() => toggleDialog(dialog)}>
      Open {dialog.name}
    </button>
  ))}
</>
```
