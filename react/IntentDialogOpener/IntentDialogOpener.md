```jsx
import { withStyles } from 'cozy-ui/transpiled/react/styles'
import IntentDialogOpener from 'cozy-ui/transpiled/react/IntentDialogOpener'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

const customStyles = () => ({
  paper: {
    height: '100%'
  }
})

const StyledIntentDialogOpener = withStyles(customStyles)(IntentDialogOpener)

;

<DemoProvider>
  <StyledIntentDialogOpener
    onComplete={res => alert('intent has completed ! ' + JSON.stringify(res))}
    onDismiss={() => alert('intent has been dismissed !')}
    action='OPEN'
    doctype='io.cozy.files'
    // you would not pass create normally as it defaults to
    // cozy.client.intents.create
    create={utils.fakeIntentCreate}
    //extra props will be passed to the dialog
    fullWidth
    maxWidth="md"
  >
    <button>Launch Intent OPEN for doctype io.cozy.files</button>
  </StyledIntentDialogOpener>
</DemoProvider>
```
