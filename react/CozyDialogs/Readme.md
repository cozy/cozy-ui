Pre-built modals ready to be directly used in applications, based on MUI Dialog.

* Dialog : default Cozy modal
* ConfirmDialog : used for confirmation popups
* IllustrationDialog : used for illustration as title
* FixedDialog : default one but with both title/actions fixed
* FixedActionsDialog : default one but with title fluid and actions fixed

### Props

* size : `<string>` Can be "s", "m" (default) or "l"
* opened : `<boolean>` (required) To open/close the modal
* onClose : `<function>` (required) Triggered function on modal close action
* title : `<node>` Title of the modal
* content : `<node>` Content of the modal
* actions : `<node>` Actions of the modal
* actionsLayout : `<string>` Can be "row" or "column"

```jsx
import Variants from 'docs/components/Variants'

import {
  Dialog,
  ConfirmDialog,
  IllustrationDialog,
  FixedDialog,
  FixedActionsDialog
} from  'cozy-ui/transpiled/react/CozyDialogs'

import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Button from 'cozy-ui/transpiled/react/Button'
import Icon from 'cozy-ui/transpiled/react/Icon'

const handleClose = () => setState({ modalOpened: !state.modalOpened })

initialState = {
  modalOpened: isTesting(),
  modal: Dialog,
  size: 'm',
  actionsLayout: 'row',
  content: 'default'
}

const DialogComponent = state.modal

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
  Dialog: "A normal Dialog should contain short content. " + content.ada.short
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

<>
  <BreakpointsProvider>
    <MuiCozyTheme>
      <p>Content:
        default: <StateRadio value='default' name='content' />{' '}
        short: <StateRadio value='short' name='content' />{' '}
        long: <StateRadio value='long' name='content' />
      </p>
      <p>Size:
        s: <StateRadio value='s' name='size' />{' '}
        m: <StateRadio value='m' name='size' />{' '}
        l: <StateRadio value='l' name='size' />
      </p>
      <p>Actions layout:
        row: <StateRadio value='row' name='actionsLayout' />{' '}
        column: <StateRadio value='column' name='actionsLayout' />
      </p>
      <DialogComponent
        size={state.size}
        opened={state.modalOpened}
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
    <button onClick={() => setState({ modalOpened: !state.modalOpened, modal: dialog })}>
      Open {dialog.name}
    </button>
  ))}
</>
```
