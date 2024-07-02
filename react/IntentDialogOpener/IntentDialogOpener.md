```jsx
import IntentDialogOpener from 'cozy-ui/transpiled/react/IntentDialogOpener'
import Button from 'cozy-ui/transpiled/react/Buttons'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

;

<DemoProvider>
  <IntentDialogOpener
    action='OPEN'
    doctype='io.cozy.files'
    // you would not pass create normally as it defaults to
    // cozy.client.intents.create
    create={utils.fakeIntentCreate}
    classes={{ paper: 'u-h-100' }} // extra props will be passed to the dialog
    fullWidth // extra props will be passed to the dialog
    maxWidth="md" // extra props will be passed to the dialog
    iframeProps={{ spinnerProps: { middle: true } }}
    onComplete={res => alert('intent has completed ! ' + JSON.stringify(res))}
    onDismiss={() => alert('intent has been dismissed !')}
  >
    <Button label="Launch Intent OPEN for doctype io.cozy.files" />
  </IntentDialogOpener>
</DemoProvider>
```
