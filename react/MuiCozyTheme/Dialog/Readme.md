Dialogs from Material-UI are an alternative to Modals. For the full documentation, refer to the [Material-UI website](https://v3.material-ui.com/demos/dialogs/).

**Dialog support is still a work in progress.**

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogCloseButton from 'cozy-ui/transpiled/react/MuiCozyTheme/Dialog/DialogCloseButton';
import Divider from '@material-ui/core/Divider';
import Button from 'cozy-ui/transpiled/react/Button';
import AppTitle from 'cozy-ui/transpiled/react/AppTitle';

initialState = { modalOpened: isTesting()};
const hideModal = () => setState({ modalOpened: false });

<MuiCozyTheme>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <Dialog
    open={state.modalOpened}
    onClose={() => setState({ modalOpened: false })}
  >
    <DialogCloseButton onClick={() => setState({ modalOpened: !state.modalOpened })} />
    <DialogTitle disableTypography><AppTitle>Lorem Ipsum</AppTitle></DialogTitle>
    <DialogContent>
      <DialogContentText>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
        nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button theme="secondary" onClick={() => setState({ modalOpened: false })} label="Cancel" />
      <Button theme="primary" label="Ok" />
    </DialogActions>
  </Dialog>
</MuiCozyTheme>
```

## Common use cases for Cozy-UI

Here are some situations where `Modal` and `Dialog` are different, and how to use various Matetial-UI options.

- Dialogs have a flexible width, combine the `fullWidth` and `maxWidth` props to adjust the size as you want
- Use [`withMobileDialog`](https://v3.material-ui.com/demos/dialogs/#responsive-full-screen) to make Dialogs full screen on mobile
- Dialogs have no close button, but Cozy-UI exposes `cozy-ui/transpiled/react/MuiCozyTheme/Dialog/DialogCloseButton` that can be included as a child of `<Dialog />`.
- Use `<Dialog scroll="body" />` to make the whole Dialog scrollable, instead of only the `DialogContent`.
- Use [Divider components](https://v3.material-ui.com/api/divider/) when you need to materialize the separation between `DialogTitle`, `DialogContent` and `DialogActions`.
