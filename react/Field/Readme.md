#### Field component is a combination of Label & Input components

Like `Input` component, it can have the following properties:

* `fullwidth` (default: `false`)

##### Example

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

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

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

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

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

initialState = { value: '' }

const handleChange = ev => setState({ value: ev.target.value })

;

<Field id='controlled-field' onChange={handleChange} value={state.value} />
```

* `inputRef`

This property is mapped to `<Input />` component `inputRef` property.
It gives access to the underlying `<input />` element, for example to give focus or move the caret.

##### Example

```jsx
import Field from 'cozy-ui/transpiled/react/Field'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'

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

;

<FieldWithFocus />
```

* `name`

Name of the form field, injected into `Input`, `TextArea` or `SelectBox` component.

##### Exemple

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

<form>
  <Field
    label="I got a name"
    name="foo"
  />
</form>
```

#### Field when there's an error

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

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

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

const options = [
{
  label: 'Choice 1',
  value: '1'
}, {
  label: 'Choice 2',
  value: '2'
}]

;

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
import Field from 'cozy-ui/transpiled/react/Field'
import mockClient from 'cozy-ui/transpiled/react/ContactsListModal/mockClient'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'

initialState = { selectedContact: null }

;

<BreakpointsProvider>
  <DemoProvider client={mockClient}>
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
</BreakpointsProvider>
```

#### Password field with show/hide button

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

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

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

<form>
  <Field
    id="idFieldPassword"
    label="I'm a password label"
    type="password"
  />
</form>
```

#### Side element

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

<form>
  <Field
    label="I'm a label"
    side="(optional)"
  />
</form>
```

#### Side element with fullwidth element

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

<form>
  <Field
    label="I'm a label"
    side="(optional)"
    fullwidth={true}
  />
</form>
```

#### Customized label and input

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

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

```jsx
import Field from 'cozy-ui/transpiled/react/Field'
import MuiButton from 'cozy-ui/transpiled/react/Button'

;

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

```jsx
import Field from 'cozy-ui/transpiled/react/Field'

;

<form>
  <Field
    side="(optional)"
    fullwidth={true}
    value={state.value}
    onChange={ev => setState({value: ev.target.value})}
  />
  Value: { state.value }
</form>
```

#### Mobile specific props

On mobile devices, following props may be useful to control on-screen keyboard's behavior

Note that `autoCapitalize` property is not handled by all mobile browsers and it also depends on the on-screen keyboard installed by the user and its configuration (i.e. [Android SwiftKey configuration](https://support.swiftkey.com/hc/en-us/articles/201468481-How-do-I-turn-off-Auto-Capitalize-))

```jsx
import Field from 'cozy-ui/transpiled/react/Field';
import Variants from 'cozy-ui/docs/components/Variants';

const initialVariants = [
  { autoCapitalize: false, autoComplete: false }
];

<Variants initialVariants={initialVariants}>{
  variant => (
    <form>
      <Field
        autoCapitalize={variant.autoCapitalize ? 'on' : 'none'}
        autoComplete={variant.autoComplete ? 'on' : 'off'}
      />
    </form>
  )
}</Variants>
```
