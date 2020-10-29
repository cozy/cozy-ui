## CozyDialogs

Pre-built modal ready to be directly used in applications, based on MUI Dialog.

* CozyDialog : default Cozy modal
* CozyConfirmDialog : used for confirmation popup
* CozyIllustrationDialog : used for illustration as title
* CozyFixedDialog : default one but with both title/actions fixed
* CozyActionsFixedDialog : default one but with title fluid and actions fixed

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

import CozyDialog from 'cozy-ui/transpiled/react/Dialog/CozyDialogs/CozyDialog'
import CozyConfirmDialog from 'cozy-ui/transpiled/react/Dialog/CozyDialogs/CozyConfirmDialog'
import CozyIllustrationDialog from 'cozy-ui/transpiled/react/Dialog/CozyDialogs/CozyIllustrationDialog'
import CozyFixedDialog from 'cozy-ui/transpiled/react/Dialog/CozyDialogs/CozyFixedDialog'
import CozyActionsFixedDialog from 'cozy-ui/transpiled/react/Dialog/CozyDialogs/CozyActionsFixedDialog'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Button from 'cozy-ui/transpiled/react/Button'
import Icon from 'cozy-ui/transpiled/react/Icon'

const handleClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting(), modal: CozyDialog }

const CozyDialogs = state.modal

const dialogTitle = {
  short: "Ada Lovelace",
  long: "Ada Lovelace Ada Lovelace Ada Lovelace Ada Lovelace Ada Lovelace",
  illustration: <Icon icon="cozy" size="140" />
}

const dialogContent = {
  short: new Array(10).fill('Augusta Ada King-Noel was an English mathematician and writer.').join('\n'),
  long: new Array(100).fill('Augusta Ada King-Noel was an English mathematician and writer.').join('\n')
}

const DialogActions = () => {
  return (
    <>
      <Button
        theme="secondary"
        onClick={handleClose}
        label={'Close Modal'}
      />
      <Button
        theme="primary"
        label={'Touch Me'}
        onClick={() => alert('click')}
      />
    </>
  )
}

const initialVariants = [
  { shortTitle: true, shortContent: true, actionsBelow: false, illustrationTitle: false, sizeS: false, sizeM: true, sizeL: false }
];
const dialogs = [CozyDialog, CozyConfirmDialog, CozyIllustrationDialog, CozyFixedDialog, CozyActionsFixedDialog];

<>
  <BreakpointsProvider>
    <MuiCozyTheme>
      <Variants initialVariants={initialVariants}>{
        variant => (
          <CozyDialogs
            size={(variant.sizeS ? "S" : variant.sizeM ? "M" : variant.sizeL ? "L": undefined)}
            opened={state.modalOpened}
            onClose={handleClose}
            title={variant.illustrationTitle ? dialogTitle.illustration : variant.shortTitle ? dialogTitle.short : dialogTitle.long}
            content={variant.shortContent ? dialogContent.short : dialogContent.long}
            actions={<DialogActions />}
            below={variant.actionsBelow}
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
  DialogContent,
  DialogBackButton,
  DialogCloseButton,
  DialogTransition
} from 'cozy-ui/transpiled/react/Dialog';
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
