A select box for more advanced use cases, based on [`react-select` v2](https://deploy-preview-2289--react-select.netlify.com/home).

### Simple use case

You can use this exactly like you would use `react-select`. See the [official documentation](https://deploy-preview-2289--react-select.netlify.com/home) for more examples.

```
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla' }
];

<SelectBox options={options} />
```

### Custom control component

You can use the `reactSelectControl` HOC to turn an existing, custom component into the control button for the `Select`:

```
const reactSelectControl = require('../SelectBox').reactSelectControl;
const MyControl = <button>toggle options</button>;
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<SelectBox 
  options={options}
  components={{
    Control: reactSelectControl(MyControl)
  }}
/>
```

### Options with checkboxes

There is a `CheckboxOption` component that can be used as an `Option`, and renders like this:

```
const CheckboxOption = require('../SelectBox').CheckboxOption;
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<SelectBox 
  options={options}
  isMulti
  components={{
    Option: CheckboxOption
  }}
/>
```

### Fixed options

```
const { SelectBoxWithFixedOptions } = require('.')
const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(x => ({ value:x, label: x }));

options[0].fixed = true
options[options.length - 1].fixed = true;

<SelectBoxWithFixedOptions 
  menuIsOpen={isTesting ? true : undefined}
  options={options} />
```

### Customize ReactSelect components

Do not directly install another version of react-select, cozy-ui exports the components
from `react-select` for you to further customize the components.

Here a custom class is applied to the `ValueContainer`.

```
const { default: SelectBox, components } = require('.')

const ValueContainer = props => {
  return (
    <components.ValueContainer {...props} className='needsclick' />
  );
};

<SelectBox
  components={{ ValueContainer }}
  options={[
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3}]}

/>
```
