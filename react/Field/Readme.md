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

##### Password field without show/hide button

```
<form>
  <Field
    id="idFieldPassword"
    label="I'm a password label"
    type="password"
    fieldProps={{showVisibilityButton: true}}
  />
</form>
```

##### Password field without show/hide button

```
<form>
  <Field
    label="I'm a label"
    side="(optional)"
  />
</form>
```
