#### Field component is a combination of Label & Input components

Like `Input` component, it can have the following properties:

- `fullwidth` (default: `false`)

##### Example

```
<form>
  <Field
    id="idField"
    label="I'm a label"
    type="textarea"
    placeholder="I'm a textarea"
    onChange={() => {}}
    size="medium"
  />
</form>
```

- `inputRef`

This property is mapped to `<Input />` component `inputRef` property.
It gives access to the underlying `<input />` element, for example to give focus or move the caret.

##### Example

```
class FieldWithFocus extends React.Component {
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
          <Field
            inputRef={c => this.component = c}
            label="I can have focus"
            placeholder="Focus please" />
        <Button label="Focus!" onClick={this.setFocus}>Set Focus</Button>
      </div>
    )
  }
}
;<FieldWithFocus />
```

- `name`

Name of the form field, injected into `Input`, `TextArea` or `SelectBox` component.

##### Exemple

```
<form>
  <Field
    label="I got a name"
    name="foo"
  />
</form>
```

#### Field when there's an error

```
<form>
  <Field
    id="idFieldError"
    label="I'm an error label"
    placeholder="I'm an error input[type=text]"
    error
    onChange={() => {}}
  />
</form>
```

#### Field with SelectBox

```
const options = [
{
  label: 'Choice 1',
  value: '1'
}, {
  label: 'Choice 2',
  value: '2'
}];

<form>
  <Field
    label="I'am a SelectBox"
    type="select"
    options={options}
    placeholder="Select ..."
  />
  <Field
    label="I'am a SelectBox with a value"
    type="select"
    options={options}
    value={{ label: 'Choice 2', value: '2'}}
  />
</form>
```

#### Password field with show/hide button

```
<form>
  <Field
    id="idFieldPassword"
    label="I'm a password label"
    type="password"
    secondaryLabels={{
      hideLabel: "Hide",
      showLabel: "Show"
    }}
  />
</form>
```

#### Password field without show/hide button

```
<form>
  <Field
    id="idFieldPassword"
    label="I'm a password label"
    type="password"
  />
</form>
```

#### Side element

```
<form>
  <Field
    label="I'm a label"
    side="(optional)"
  />
</form>
```

#### Side element with fullwidth element

```
<form>
  <Field
    label="I'm a label"
    side="(optional)"
    fullwidth={true}
  />
</form>
```

#### Customized label and input

```
<form>
  <Field
    label="I'm a label"
    labelProps={{
      style: { color: 'teal' }
    }}
    fieldProps={{
      style: { borderColor: 'teal' }
    }}
  />
</form>
```

#### Password with custom secondaryComponent

```
<form>
  <Field
    label="I'm a label"
    labelProps={{
      style: { color: 'teal' }
    }}
    fieldProps={{
      style: { borderColor: 'teal' }
    }}
    type="password"
    secondaryComponent={({visible}) => {
      return visible ? <div className={'u-bg-dodgerBlue'}>Hide</div> : <div className={'u-bg-silver'}>Show</div>
    }}
  />
</form>
```
