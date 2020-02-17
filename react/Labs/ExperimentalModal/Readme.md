## Experimental Modal

### With default Actions (mobile and desktop)
```jsx
import ExperimentalModal, {ExperimentalModalTitle, ExperimentalModalActions} from './index';
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

 <ExperimentalModal open={state.modalOpened}>
    <DialogCloseButton onClick={() =>dismissAction()} />
    <ExperimentalModalTitle>Ada Lovelace</ExperimentalModalTitle>
    <DialogContent>
      Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.
    </DialogContent>
    <ExperimentalModalActions>
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
    </ExperimentalModalActions>
  </ExperimentalModal>
  </MuiCozyTheme>

  </>
```


### With "below" Actions (mobile)
```jsx
import ExperimentalModal, {ExperimentalModalTitle, ExperimentalModalActions} from './index';
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
 <ExperimentalModal open={state.modalOpened}>
    <DialogCloseButton onClick={() =>dismissAction()} />
    <ExperimentalModalTitle>Ada Lovelace</ExperimentalModalTitle>
    <DialogContent>
      Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.
    </DialogContent>
    <ExperimentalModalActions layout="row">
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
    </ExperimentalModalActions>
  </ExperimentalModal>
  </MuiCozyTheme>
</>
```