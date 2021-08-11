### Simple usecase

The IntentIframe is the basic and minimal component to open an intent.
See [the documentation](https://docs.cozy.io/en/cozy-stack/intents/) for more information about intents.

Here a simple example :

```jsx
import IntentIframe from 'cozy-ui/transpiled/react/IntentIframe'
import utils from '../../docs/utils'

;

<IntentIframe
  action="PICK"
  create={utils.fakeIntentCreate}
  data={{folder: '840af7e7be6c41bed3c5b76d03f66328'}}
  type="io.cozy.files"
  onCancel={() => alert('intent cancelled')}
  onError={(error) => alert('intent has failed with error: ' + error.message)}
  onTerminate={doc => alert('intent has completed ! ' + JSON.stringify(doc))}
/>
```

### Within an application side controled Dialog

Sometimes you have to render an Intent inside a modal, and handle the modal opening state on the application side. You can then use IntentIframe wrapped in a Dialog for that use case, instead of using IntentDialogOpener component (that is useful to start a new intent modal from a click on a button).

This method replaces deprecated `IntentModal` component.

```jsx
import { withStyles } from '@material-ui/core/styles'
import { DialogCloseButton } from 'cozy-ui/transpiled/react/CozyDialogs'
import Dialog from 'cozy-ui/transpiled/react/Dialog'
import IntentIframe from 'cozy-ui/transpiled/react/IntentIframe'
import useBreakpoints, { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

initialState = { modalOpened: false}

const customStyles = () => ({
  paper: {
    height: '100%'
  }
})

const StyledDialog = withStyles(customStyles)(Dialog)
const onClose = () => setState({ modalOpened: false })

const IntentDialog = () => {
  const { isMobile } = useBreakpoints()
  return (
    <StyledDialog
      open={state.modalOpened}
      onClose={onClose}
      fullScreen={isMobile}
      fullWidth
      maxWidth="md"
    >
      <DialogCloseButton onClick={onClose} />
      <IntentIframe
        onCancel={onClose}
        onTerminate={res => {
            setState({ modalOpened: false })
            alert('intent has completed ! ' + JSON.stringify(res))
          }
        }
        action='OPEN'
        type='io.cozy.files'
        // you would not pass create normally as it defaults to
        // cozy.client.intents.create
        create={utils.fakeIntentCreate}
      />
    </StyledDialog>
  )
}

;

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle an IntentDialog OPEN io.cozy.files
  </button>
  <IntentDialog />
</BreakpointsProvider>
```