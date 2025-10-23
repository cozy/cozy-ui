```jsx
import Overlay from 'cozy-ui/transpiled/react/deprecated/Overlay';
initialState={ overlayShown: false}
const showOverlay = () => setState({overlayShown: true})
const hideOverlay = () => setState({overlayShown: false});

<div>
  <button onClick={showOverlay}>Show overlay</button>
  { state.overlayShown && <Overlay>
    <div style={{background: 'purple', margin: '1rem auto', width: 200}}>Hello world !</div>
    <button onClick={hideOverlay}>Hide overlay</button>
  </Overlay> }
</div>
```

It can react to the escape key.

```jsx
import Overlay from 'cozy-ui/transpiled/react/deprecated/Overlay';
initialState={ overlayShown: false}
const showOverlay = () => setState({overlayShown: true})
const hideOverlay = () => setState({overlayShown: false});

<div>
  <button onClick={showOverlay}>Show overlay</button>
  { state.overlayShown && <Overlay onEscape={hideOverlay}>
    <div style={{background: 'purple', margin: '1rem auto', width: 200}}>Hello world !</div>
  </Overlay> }
</div>
```
