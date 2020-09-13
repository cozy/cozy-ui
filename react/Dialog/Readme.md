## Dialog

### With default Actions (mobile and desktop)

```jsx
import Dialog from 'cozy-ui/transpiled/react/Dialog'
import DialogTitle from 'cozy-ui/transpiled/react/Dialog/DialogTitle'
import DialogActions from 'cozy-ui/transpiled/react/Dialog/DialogActions'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import DialogContent from 'cozy-ui/transpiled/react/Dialog/DialogContent'
import DialogContentText from 'cozy-ui/transpiled/react/Dialog/DialogContentText'
import DialogCloseButton from 'cozy-ui/transpiled/react/Dialog/DialogCloseButton'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Button from 'cozy-ui/transpiled/react/Button'

const onClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }
;<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <MuiCozyTheme>
    <Dialog open={state.modalOpened} onClose={() => onClose()}>
      <DialogCloseButton onClick={() => onClose()} />
      <DialogTitle>Ada Lovelace</DialogTitle>
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
      <DialogActions>
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
    </Dialog>
  </MuiCozyTheme>
</>
```

### With "below" Actions (mobile)

```jsx
import Dialog from 'cozy-ui/transpiled/react/Dialog'
import DialogTitle from 'cozy-ui/transpiled/react/Dialog/DialogTitle'
import DialogActions from 'cozy-ui/transpiled/react/Dialog/DialogActions'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import DialogContent from 'cozy-ui/transpiled/react/Dialog/DialogContent'
import DialogContentText from 'cozy-ui/transpiled/react/Dialog/DialogContentText'
import DialogCloseButton from 'cozy-ui/transpiled/react/Dialog/DialogCloseButton'
import Button from 'cozy-ui/transpiled/react/Button'
const onClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }
;<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <MuiCozyTheme>
    <Dialog open={state.modalOpened} onClose={() => onClose()}>
      <DialogCloseButton onClick={() => onClose()} />
      <DialogTitle>Ada Lovelace</DialogTitle>
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
      <DialogActions layout="row">
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
    </Dialog>
  </MuiCozyTheme>
</>
```

* Dialogs have no close button, but Cozy-UI exposes `cozy-ui/transpiled/react/MuiCozyTheme/Dialog/DialogCloseButton` that can be included as a child of `<Dialog />`.
* Use `<Dialog scroll="body" />` to make the whole Dialog scrollable, instead of only the `DialogContent`.
* Use [Divider components](https://v3.material-ui.com/api/divider/) when you need to materialize the separation between `DialogTitle`, `DialogContent` and `DialogActions`.
