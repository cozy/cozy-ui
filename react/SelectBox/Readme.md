A select box for more advanced use cases, based on [`react-select` v2](https://react-select.com).

### Simple use case

You can use this exactly like you would use `react-select`. See the [official documentation](https://react-select.com) for more examples.

```
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'long', label: 'Salt and vinegar crisps with vegamite and brussel sprouts, double chai latte sauce' },
];

/**
 * Setting a background color let us ensure that the selectbox has a background.
 */
<div style={{ background:'whitesmoke', padding: '.5em' }}>
  <SelectBox options={options} />
</div>
```

For example if you want to force the menu to be open:

```
const options = [
  { value: 'chocolate', label: 'Chocolate' }
];

<SelectBox options={options} menuIsOpen />
```

### Props

#### `container`

Defines an element used as container for the SelectBox, especially when the
option list is shown.

This example should not cause an overflow on the SelectBoxWrapper component.

```
const options = [
  { value: 'banana', label: 'Banana' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

initialState = { height: '12rem'}

const changeHeight = () => setState({
  height: state.height == '12rem' ? '18rem' : '12rem'
});

class SelectBoxWrapper extends React.Component {
  constructor(props, context){
    super(props, context)
    this.container = React.createRef()
  }

  render(){
    return (<div ref={this.container} style={{
      height: state.height,
      padding: '.5rem',
      overflow: 'auto'}}>
      Container height: {state.height}.  <button onClick={changeHeight}>Change container height</button>
      <SelectBox
        container={this.container}
        options={options}
      />
    </div>)
  }
}

<SelectBoxWrapper />
```

#### `disabled`

Disable the SelectBox

```
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'long', label: 'Salt and vinegar crisps with vegamite and brussel sprouts, double chai latte sauce' },
];

<SelectBox options={options} disabled />
```

#### `fullwidth`

Set the select to spread to 100% of the available width (default: `false`).

```

const options = [
{ value: 'chocolate', label: 'Chocolate' },
{ value: 'strawberry', label: 'Strawberry', isDisabled: true },
{ value: 'vanilla', label: 'Vanilla' },
{ value: 'long', label: 'Salt and vinegar crisps with vegamite and brussel sprouts, double chai latte sauce' },
];

<SelectBox options={options} fullwidth />
```

#### `inputRef`

This property gives access to the underlying `<input />` element contained into a `ReactSelect` component, for example to give focus or move the caret.

```
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'long', label: 'Salt and vinegar crisps with vegamite and brussel sprouts, double chai latte sauce' },
];

let inputElement;

<div>
  <SelectBox inputRef={element => {inputElement = element}} options={options} disabled />
  <button onClick={() => alert(inputElement)}>Show inputElement value</button>
</div>
```

#### `size`

Set the text size between `tiny`, `medium` and `large` (default: `large`).

```
const tinyOptions = [
  { value: '1', label: 'I am a tiny SelectBox' },
  { value: '2', label: 'I am not a medium SelectBox' },
  { value: '3', label: 'I am not a large SelectBox' }
];

const mediumOptions = [
  { value: '1', label: 'I am not a tiny SelectBox' },
  { value: '2', label: 'I am a medium SelectBox' },
  { value: '3', label: 'I am not a large SelectBox' }
];

const largeOptions = [
  { value: '1', label: 'I am not a tiny SelectBox' },
  { value: '2', label: 'I am not a medium SelectBox' },
  { value: '3', label: 'I am a large SelectBox' }
];

<div>
  <div class="u-mb-1"><SelectBox options={tinyOptions} size="tiny" value={tinyOptions.find(o => o.value === '1')} /></div>
  <div class="u-mb-1"><SelectBox options={mediumOptions} size="medium" value={mediumOptions.find(o => o.value === '2')} /></div>
  <div class="u-mb-1"><SelectBox options={largeOptions} size="large" value={largeOptions.find(o => o.value === '3')} /></div>
</div>
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

### Options with actions

You can display additional actions inside an Option with the ActionsOption component.

```
const ActionsOption = require('../SelectBox').ActionsOption;
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'long', label: 'Salt and vinegar crisps with vegamite and brussel sprouts, double chai latte sauce' }
];

const CustomOption = (props) => (<ActionsOption {...props} actions={[
    { icon: 'delete', onClick: () => alert('deleting') },
    { icon: 'rename', onClick: ({ data }) => alert(data.value) }
  ]} />);

<SelectBox options={options} components={{
  Option: CustomOption
}} />
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

Add a prefix className:

```
const options = [
  { value: 'chocolate', label: 'Chocolate' }
];

<SelectBox options={options} menuIsOpen classNamePrefix='needsclick cz' />
```
