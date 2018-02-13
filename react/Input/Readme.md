### Input's available types (text, password, email, url)

```
<form>
  <p><Input placeholder="This is a input[type=text]" /></p>
  <p><Input type="password" placeholder="This is a input[type=password]" /></p>
  <p><Input type="email" placeholder="This is a input[type=email]" /></p>
  <p><Input type="url" placeholder="This is a input[type=url]" /></p>
</form>
```

### Input when there's an error

```
<Input error placeholder="This is a input[type=text] with error" />
```

### Props forwarding

`Input` forwards unknown props to the underlying `<input />` element.

```
<div>
  <Input placeholder='Type to see changes' value={state.value} onChange={ev => setState({value: ev.target.value})} />&nbsp;&nbsp;
  Value: { state.value }
</div>
```
