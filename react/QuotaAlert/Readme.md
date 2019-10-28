# Display a Modal with a link to the manager to buy space

```
import {QuotaAlert} from 'cozy-ui/transpiled/react/QuotaAlert';
import CozyClientProvider from './demo/CozyClientProvider';

<div>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>

  {state.modalOpened && <CozyClientProvider><QuotaAlert t={(e) => e} onClose={() => setState({ modalOpened: false}) } /></CozyClientProvider> }
</div>
```
