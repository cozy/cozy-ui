```jsx
import IntentOpener from 'cozy-ui/transpiled/react/deprecated/IntentOpener';
<IntentOpener
  onComplete={res => alert('intent has completed ! ' + JSON.stringify(res))}
  onDismiss={() => alert('intent has been dismissed !')}
  action='OPEN'
  doctype='io.cozy.files'
  // you would not pass create normally as it defaults to
  // cozy.client.intents.create
  create={utils.fakeIntentCreate}
  //extra props will be passed to the modal
  size={'xlarge'}
>
  <button>Launch Intent OPEN for doctype io.cozy.files</button>
</IntentOpener>
```
