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

#### Disabled
```js
<Toggle id="toggle" disabled={false} />
```

### Variants

#### Normal

```jsx
<div>
  <div>
    <Toggle id="toggle" /> Normal not checked
  </div>
  <div>
    <Toggle id="toggle" checked /> Normal checked
  </div>
  <div>
    <Toggle id="toggle" disabled /> Normal disabled
  </div>
</div>
```

#### Subtle

```jsx
<div>
  <div>
    <Toggle id="toggle" variant="subtle" /> Sublte not checked
  </div>
  <div>
    <Toggle id="toggle" variant="subtle" checked /> Subtle checked
  </div>
  <div>
    <Toggle id="toggle" variant="subtle" disabled /> Subtle disabled
  </div>
</div>
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
