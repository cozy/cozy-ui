This component takes the same props as the `Input` component.
`Input` props are spread to the underlying `Input`.

### Original

```jsx
import PasswordInput from 'cozy-ui/transpiled/react/Labs/PasswordInput';
const initialState = { password: '' };

<PasswordInput
  value={state.password}
  onChange={e => setState({ password: e.target.value })}
  placeholder="Enter your password"
/>
```

### With strength

```jsx
import PasswordInput from 'cozy-ui/transpiled/react/Labs/PasswordInput';
const initialState = { password: '' };

<PasswordInput
  value={state.password}
  onChange={e => setState({ password: e.target.value })}
  placeholder="Enter your password"
  showStrength
/>
```

### Errored

```jsx
import PasswordInput from 'cozy-ui/transpiled/react/Labs/PasswordInput';
const initialState = { password: '' };

<PasswordInput
  value={state.password}
  onChange={e => setState({ password: e.target.value })}
  placeholder="Enter your password"
  showStrength
  error
/>
```
