#### Field component is a combination of Label & Input components

Like `Input` component, it can have the following properties:

* `fullwidth` (default: `false`)

##### Example

```
import Field from 'cozy-ui/transpiled/react/Field';
<form>
  <Field
    id="idField"
    label="I'm a label"
    type="textarea"
    placeholder="I'm a textarea"
    size="medium"
  />
</form>
```

##### Inline variant

```
import Field from 'cozy-ui/transpiled/react/Field';
<form>
  <Field
    id="idField"
    label="I'm a label"
    type="text"
    placeholder="Write something"
    size="medium"
    variant="inline"
  />
</form>
```

##### Controlled input

An input is controlled if `props.value` is passed, even if it is empty.

```
import Field from 'cozy-ui/transpiled/react/Field';

initialState = { value: '' }

const handleChange = ev => setState({ value: ev.target.value });

<p>
  <Field id='controlled-field' onChange={handleChange} value={state.value} />
</p>
```

* `inputRef`

This property is mapped to `<Input />` component `inputRef` property.
It gives access to the underlying `<input />` element, for example to give focus or move the caret.

##### Example

```
import Field from 'cozy-ui/transpiled/react/Field';
import Button from 'cozy-ui/transpiled/react/Button';
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

* `name`

Name of the form field, injected into `Input`, `TextArea` or `SelectBox` component.

##### Exemple

```
import Field from 'cozy-ui/transpiled/react/Field';
<form>
  <Field
    label="I got a name"
    name="foo"
  />
</form>
```

#### Field when there's an error

```
import Field from 'cozy-ui/transpiled/react/Field';
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
import Field from 'cozy-ui/transpiled/react/Field';
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
    value={null}
  />
  <Field
    label="I'am a SelectBox with a value"
    type="select"
    options={options}
    value={{ label: 'Choice 2', value: '2'}}
  />
</form>
```

#### Field with ContactPicker

```jsx
import Field from 'cozy-ui/transpiled/react/Field';
import DemoProvider from '../ContactsListModal/DemoProvider';
initialState = { selectedContact: null };

<DemoProvider>
  <form>
    <Field
      label="Contact"
      type="contact"
      placeholder="Select a contact"
      value={state.selectedContact}
      onChange={selectedContact => setState({ selectedContact })}
    />
  </form>
</DemoProvider>
```

#### Password field with show/hide button

```
import Field from 'cozy-ui/transpiled/react/Field';
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
import Field from 'cozy-ui/transpiled/react/Field';
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
import Field from 'cozy-ui/transpiled/react/Field';
<form>
  <Field
    label="I'm a label"
    side="(optional)"
  />
</form>
```

#### Side element with fullwidth element

```
import Field from 'cozy-ui/transpiled/react/Field';
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
import Field from 'cozy-ui/transpiled/react/Field';
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
import Field from 'cozy-ui/transpiled/react/Field';
import MuiButton from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons';

<form>
  <br/>
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
      return (
        /* Need to cancel the paddingTop of the button */
        <div style={{ marginTop: '-0.5rem'}}>
          <MuiButton size='small' color='secondary'>
            {visible ? 'Hide' : 'Show' }
          </MuiButton>
        </div>
      )
    }}
  />
</form>
```

#### Controlled Field

```
import Field from 'cozy-ui/transpiled/react/Field';
<form>
  <Field
    side="(optional)"
    fullwidth={true}
    value={state.value} onChange={ev => setState({value: ev.target.value})}
  />
  Value: { state.value }
</form>
```
