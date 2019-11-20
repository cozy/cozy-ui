### ExperimentalModal

There are 2 variations of this modal that can be used.

The first one has a fixed header and footer that are separated from the body of the modal by a border.

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

In the second variation, the modal has no dedicated header or footer, everything is part of the main body content. But it is possible to fix some content at the bottom of the footer in case the main content is too short (only on mobile).

```
import ExperimentalModal from 'cozy-ui/transpiled/react/Labs/ExperimentalModal';
import Button from 'cozy-ui/transpiled/react/Button';

initialState = { modalOpened: isTesting()};
const hideModal = () => setState({ modalOpened: false });

<div>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <ExperimentalModal
    dismissAction={hideModal}
    description={content.ada.short}
    descriptionFooter={<Button label="submit" />}
    />
    }
</div>
```
