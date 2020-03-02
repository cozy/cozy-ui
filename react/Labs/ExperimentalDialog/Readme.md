## Experimental Dialog

### With default Actions (mobile and desktop)
```jsx
import ExperimentalDialog, {ExperimentalDialogTitle, ExperimentalDialogActions} from './index';
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import DialogCloseButton from '../../MuiCozyTheme/Dialog/DialogCloseButton';
import Button from '../../Button';

const dismissAction = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting()};
<>
<button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
<MuiCozyTheme>

 <ExperimentalDialog open={state.modalOpened}>
    <DialogCloseButton onClick={() =>dismissAction()} />
    <ExperimentalDialogTitle>Ada Lovelace</ExperimentalDialogTitle>
    <Divider />
    <DialogContent>
      Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.
    </DialogContent>
    <ExperimentalDialogActions>
        <Button
            theme="secondary"
            onClick={() => dismissAction()}
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
import ExperimentalDialog, {ExperimentalDialogTitle, ExperimentalDialogActions} from './index';
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogCloseButton from '../../MuiCozyTheme/Dialog/DialogCloseButton';
import Button from '../../Button';
const dismissAction = () => setState({ modalOpened: !state.modalOpened })

initialState = { modalOpened: isTesting()};
<>
<button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
<MuiCozyTheme>
 <ExperimentalDialog open={state.modalOpened}>
    <DialogCloseButton onClick={() =>dismissAction()} />
    <ExperimentalDialogTitle>Ada Lovelace</ExperimentalDialogTitle>
    <DialogContent>
      Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.
    </DialogContent>
    <ExperimentalDialogActions layout="row">
        <Button
            theme="secondary"
            onClick={() => dismissAction()}
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