The IntentOpener component is useful to start an new intent modal from a click on a button. But sometimes you want/have to handle the modal opening state on the application side so you need to just render an Intent inside a modal. The IntentModal component is clearly for that use case. This is also the same modal code used by the IntentOpener component.

```
import IntentModal from 'cozy-ui/transpiled/react/deprecated/IntentModal';
initialState = { modalOpened: false};

<div>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle an IntentModal OPEN io.cozy.files
  </button>
  {state.modalOpened &&
    <IntentModal
      dismissAction={() => setState({ modalOpened: false })}
      onComplete={res => {
          setState({ modalOpened: false })
          alert('intent has completed ! ' + JSON.stringify(res))
        }
      }
      action='OPEN'
      doctype='io.cozy.files'
      // you would not pass create normally as it defaults to
      // cozy.client.intents.create
      create={utils.fakeIntentCreate}
    /> }
</div>
```
