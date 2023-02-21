A simple Popup which provides handlers for a few events.

### Simple use case

```jsx
import Popup from 'cozy-ui/transpiled/react/Popup';
<div>
  <button onClick={() => setState({ showPopup: true })}>
    Show popup
  </button>
  <p>Popup is {state.showPopup ? "open" : "closed"}</p>
  { state.showPopup &&
    <Popup
      initialUrl="http://example.org"
      tile="Example Popup"
      width="800"
      height="500"
      onClose={() => setState({showPopup: false})}
    />
  }
</div>
```
