## Dialog

* Dialogs have no close button, but Cozy-UI exposes `DialogCloseButton` that can be included as a child of `<Dialog />`.
* Use `<Dialog scroll="body" />` to make the whole Dialog scrollable, instead of only the `DialogContent`.
* Use [Divider components](https://v3.material-ui.com/api/divider/) when you need to materialize the separation between `DialogTitle`, `DialogContent` and `DialogActions`.

### With default Actions (mobile and desktop)

```jsx
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogCloseButton,
  DialogBackButton
} from 'cozy-ui/transpiled/react/Dialog';
import useBreakpoints, {
  BreakpointsProvider
} from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Button from 'cozy-ui/transpiled/react/Button'

const handleClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }

const ExampleDialog = ({ opened, onClose }) => {
  const { isMobile } = useBreakpoints()
  return (
    <Dialog open={opened} onClose={onClose}>
      <DialogCloseButton onClick={onClose} />
      <DialogTitle>
        {isMobile ? <DialogBackButton onClick={onClose} /> :  null } Ada Lovelace
      </DialogTitle>
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

### With "below" Actions (mobile)

```jsx
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogCloseButton,
} from 'cozy-ui/transpiled/react/Dialog';

import {
  BreakpointsProvider
} from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import Button from 'cozy-ui/transpiled/react/Button'
const onClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }
;<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <BreakpointsProvider>
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
  </BreakpointsProvider>
</>
```



### With long content

```jsx
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogCloseButton,
} from 'cozy-ui/transpiled/react/Dialog';

import {
  BreakpointsProvider
} from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme/'
import Button from 'cozy-ui/transpiled/react/Button'
const onClose = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting() }
;<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <BreakpointsProvider>
    <MuiCozyTheme>
      <Dialog open={state.modalOpened} onClose={() => onClose()}>
        <DialogCloseButton onClick={() => onClose()} />
        <DialogTitle>Ada Lovelace</DialogTitle>
        <DialogContent>
          {content.ada.long}
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
  </BreakpointsProvider>
</>
```
