### Input's available types (text, password, email, url)

```
<form>
  <p><Input placeholder="This is a input[type=text]" /></p>
  <p><Input type="password" placeholder="This is a input[type=password]" /></p>
  <p><Input type="email" placeholder="This is a input[type=email]" /></p>
  <p><Input type="url" placeholder="This is a input[type=url]" /></p>
</form>
```

### Disabled Input

```
<form>
  <Input disabled value="I'm disabled" />
</form>
```

### Input when there's an error

```
<Input error placeholder="This is a input[type=text] with error" />
```

### Alternative input sizes

By default, the size is `large`.

```
<div>
  <p>
    <Input placeholder="I have a tiny size" size="tiny" />
  </p>
  <p>
    <Input placeholder="I have a medium size" size="medium" />
  </p>
</div>
```

### Full width inputs

```
<Input placeholder="I'm full width" fullwidth />
```

### inputRef ( set focus / blur / ... programmatically)

If you need to programmatically access the underlying `<input />` for example to give focus or move the caret, you can use the `inputRef` prop, that is passed to the `ref` property of the `<input />`.

```

class InputComponent extends React.Component {
  constructor() {
    super()
    this.component = null;
    this.setFocus = this.setFocus.bind(this)
  }
  setFocus() {
    this.component.focus()
  }
  render() {
    return (
      <div>
        <Button onClick={this.setFocus}>Set Focus</Button>
        <Input inputRef={c => this.component = c} />
      </div>
    )
  }
}
;<InputComponent />
```

### Props forwarding

`Input` forwards unknown props to the underlying `<input />` element.

```
<div>
  <Input placeholder='Type to see changes' value={state.value} onChange={ev => setState({value: ev.target.value})} />&nbsp;&nbsp;
  Value: { state.value }
</div>
```
