### Simplest usage

```js
import Toggle from './index';
<Toggle id="simple-toggle" />
```

### With a default value

- Toggle is **on** by default:

```js
import Toggle from './index';
<Toggle id="toggle" checked />
```

- Toggle is **off** by default:

```js
import Toggle from './index';
<Toggle id="toggle" checked={false} />
```

#### Disabled
```js
import Toggle from './index';
<Toggle id="toggle" disabled={false} />
```

### More complex example

```jsx
import Toggle from './index';
<div>
  <label
    htmlFor='0'
    style={{
      marginRight: '15px',
      color: state.checked ? 'green' : 'gray'
    }}
  >{`Toggle is controlled and ${state.checked
    ? 'on'
    : 'off'}`}</label>
  <Toggle
    id='0'
    checked={state.checked}
    onToggle={() => setState({ checked: !state.checked })}
  />
</div>
```
