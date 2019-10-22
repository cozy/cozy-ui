### ExperimentalModal

This modal brings a new UI only on Mobile for now. It changes the
size of the Header and its margins and add border-bottom.
It also changes our ModalFooter to something fixed in the bottom
and add a border-top.

Not tested on "long content".

```
import ExperimentalModal from 'cozy-ui/transpiled/react/Labs/ExperimentalModal';

initialState = { modalOpened: isTesting()};
const hideModal = () => setState({ modalOpened: false });

<div>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <ExperimentalModal
    title='Ada Lovelace'
    description={content.ada.short}
    dismissAction={hideModal}
    primaryText='Close modal'
    primaryType='danger'
    primaryAction={hideModal}
    secondaryText='Touch me'
    secondaryAction={hideModal}
    />
    }
</div>
```
