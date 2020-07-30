## Experimental Dialog

### With default Actions (mobile and desktop)

```jsx
import ExperimentalDialog, {
  ExperimentalDialogTitle,
  ExperimentalDialogActions
} from './index'
import MuiCozyTheme from '../../MuiCozyTheme/'

import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Divider from '@material-ui/core/Divider'
import DialogCloseButton from '../../MuiCozyTheme/Dialog/DialogCloseButton'
import Button from '../../Button'

const onClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }
;<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <MuiCozyTheme>
    <ExperimentalDialog open={state.modalOpened} onClose={() => onClose()}>
      <DialogCloseButton onClick={() => onClose()} />
      <ExperimentalDialogTitle>Ada Lovelace</ExperimentalDialogTitle>
      <Divider />
      <DialogContent>
        Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815
        – 27 November 1852) was an English mathematician and writer, chiefly
        known for her work on Charles Babbage's proposed mechanical
        general-purpose computer, the Analytical Engine. She was the first to
        recognise that the machine had applications beyond pure calculation, and
        published the first algorithm intended to be carried out by such a
        machine. As a result, she is often regarded as the first to recognise
        the full potential of a "computing machine" and the first computer
        programmer.
      </DialogContent>
      <ExperimentalDialogActions>
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
      </ExperimentalDialogActions>
    </ExperimentalDialog>
  </MuiCozyTheme>
</>
```

### With "below" Actions (mobile)

```jsx
import ExperimentalDialog, {
  ExperimentalDialogTitle,
  ExperimentalDialogActions
} from './index'
import MuiCozyTheme from '../../MuiCozyTheme/'

import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogCloseButton from '../../MuiCozyTheme/Dialog/DialogCloseButton'
import Button from '../../Button'
const onClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }
;<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <MuiCozyTheme>
    <ExperimentalDialog open={state.modalOpened} onClose={() => onClose()}>
      <DialogCloseButton onClick={() => onClose()} />
      <ExperimentalDialogTitle>Ada Lovelace</ExperimentalDialogTitle>
      <DialogContent>
        Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815
        – 27 November 1852) was an English mathematician and writer, chiefly
        known for her work on Charles Babbage's proposed mechanical
        general-purpose computer, the Analytical Engine. She was the first to
        recognise that the machine had applications beyond pure calculation, and
        published the first algorithm intended to be carried out by such a
        machine. As a result, she is often regarded as the first to recognise
        the full potential of a "computing machine" and the first computer
        programmer.
      </DialogContent>
      <ExperimentalDialogActions layout="row">
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
      </ExperimentalDialogActions>
    </ExperimentalDialog>
  </MuiCozyTheme>
</>
```

- ExperimentalDialogs have no close button, but Cozy-UI exposes `cozy-ui/transpiled/react/MuiCozyTheme/Dialog/DialogCloseButton` that can be included as a child of `<ExperimentalDialog />`.
- Use `<ExperimentalDialog scroll="body" />` to make the whole Dialog scrollable, instead of only the `DialogContent`.
- Use [Divider components](https://v3.material-ui.com/api/divider/) when you need to materialize the separation between `ExperimentalDialogTitle`, `DialogContent` and `ExperimentalDialogActions`.
