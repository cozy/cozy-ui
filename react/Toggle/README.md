### Simplest usage

```js
<Toggle id="simple-toggle" />
```

### With a default value

- Toggle is **on** by default:

```js
<Toggle id="toggle" checked />
```

- Toggle is **off** by default:
  
```js
<Toggle id="toggle" checked={false} />
```

### More complex example

```jsx
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
