A select box for more advanced use cases, based on [`react-select` v2](https://deploy-preview-2289--react-select.netlify.com/home).

### Simple use case

You can use this exactly like you would use `react-select`. See the [official documentation](https://deploy-preview-2289--react-select.netlify.com/home) for more examples.

```
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

<SelectBox options={options} />
```

### Custom control component

You can use the `reactSelectControl` HOC to turn an existing, custom component into the control button for the `Select`:

```
const reactSelectControl = require('../SelectBox').reactSelectControl;
const MyControl = (<button>toggle options</button>);
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
