The IntentIframe is the basic and minimal component to open an intent.
See [the documentation]() for more information about intents.

Example:

```
import IntentIframe from 'cozy-ui/transpiled/react/IntentIframe';
import utils from '../../docs/utils';
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
