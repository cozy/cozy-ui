## Dialog

If no ready made [CozyDialogs](#/CozyDialogs) corresponds to what you need, you can use
Dialog directly.

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
