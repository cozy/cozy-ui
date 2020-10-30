Pre-built modals ready to be directly used in applications, based on MUI Dialog.

* Dialog : default Cozy modal
* ConfirmDialog : used for confirmation popups
* IllustrationDialog : used for illustration as title
* FixedDialog : default one but with both title/actions fixed
* FixedActionsDialog : default one but with title fluid and actions fixed

### Props
* size : `<string>` Should be S, M (default), L
* opened : `<boolean>` (required) To open/close the modal
* onClose : `<function>` (required) Triggered function on modal close action
* title : `<node>` Title of the modal
* content : `<node>` Content of the modal
* actions : `<node>` Actions of the modal
* below : `<boolean>` Show actions in column

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

initialState = { modalOpened: isTesting(), modal: Dialog }

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

const initialVariants = [
  {
    sizeS: false,
    sizeM: true,
    sizeL: false 
  }
];

const dialogs = [
  Dialog,
  ConfirmDialog,
  IllustrationDialog,
  FixedDialog,
  FixedActionsDialog
];

<>
  <BreakpointsProvider>
    <MuiCozyTheme>
      <Variants initialVariants={initialVariants}>{
        variant => (
          <DialogComponent
            size={(variant.sizeS ? "S" : variant.sizeM ? "M" : variant.sizeL ? "L": undefined)}
            opened={state.modalOpened}
            onClose={handleClose}
            title={dialogTitles[DialogComponent.name]}
            content={dialogContents[DialogComponent.name]}
            actions={dialogActions[DialogComponent.name]}
            actionsLayout={variant.columnActionsLayout ? 'column' : 'row'}
          />
        )
      }</Variants>
    </MuiCozyTheme>
  </BreakpointsProvider>
  {dialogs.map(dialog => (
    <button onClick={() => setState({ modalOpened: !state.modalOpened, modal: dialog })}>
      Open {dialog.name}
    </button>
  ))}
</>
```

## Dialog

For specific purpose, you can still create your own modal with Dialog.

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
  DialogCloseButton
} from 'cozy-ui/transpiled/react/CozyDialogs';
import useBreakpoints, {
  BreakpointsProvider
} from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Button from 'cozy-ui/transpiled/react/Button'

const handleClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }

const ExampleDialog = ({ opened, onClose }) => {
  const { isMobile } = useBreakpoints()

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      TransitionComponent={DialogTransition}
      fullScreen={isMobile}
      classes={{ paper: 'sizeM' }}
    >
      <DialogCloseButton onClick={onClose} />
      <DialogTitle disableTypography className="u-ellipsis">
        {isMobile ? <DialogBackButton onClick={onClose} /> : null}
        Ada Lovelace
      </DialogTitle>
      <CardDivider />
      <DialogContent>
        <div className="dialogContentInner withFluidActions">
          Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815
          – 27 November 1852) was an English mathematician and writer, chiefly
          known for her work on Charles Babbage's proposed mechanical
          general-purpose computer, the Analytical Engine. She was the first to
          recognise that the machine had applications beyond pure calculation, and
          published the first algorithm intended to be carried out by such a
          machine. As a result, she is often regarded as the first to recognise
          the full potential of a "computing machine" and the first computer
          programmer.
          <DialogActions disableActionSpacing className="dialogActionsFluid">
            <Button
              theme="secondary"
              onClick={() => onClose()}
              label={'Close Modal'}
            />
            <Button
              theme="primary"
              label={'Touch Me'}
              onClick={() => alert('click')}
            />
          </DialogActions>
        </div>
      </DialogContent>
    </Dialog>
  )
}

;<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <BreakpointsProvider>
    <MuiCozyTheme>
      <ExampleDialog opened={state.modalOpened} onClose={handleClose} />
    </MuiCozyTheme>
  </BreakpointsProvider>
</>
```
