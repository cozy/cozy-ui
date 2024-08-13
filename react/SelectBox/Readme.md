A select box for more advanced use cases, based on [`react-select` v2](https://react-select.com).

### Simple use case

You can use this exactly like you would use `react-select`. See the [official documentation](https://react-select.com) for more examples.

```jsx
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
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

```jsx
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
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

```jsx
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
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

```jsx
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
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

```jsx
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
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

```jsx
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
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

```jsx
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
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
  <div className="u-mb-1"><SelectBox options={tinyOptions} size="tiny" value={tinyOptions.find(o => o.value === '1')} /></div>
  <div className="u-mb-1"><SelectBox options={mediumOptions} size="medium" value={mediumOptions.find(o => o.value === '2')} /></div>
  <div className="u-mb-1"><SelectBox options={largeOptions} size="large" value={largeOptions.find(o => o.value === '3')} /></div>
</div>
```

### Custom control component

You can use the `reactSelectControl` HOC to turn an existing, custom component into the control button for the `Select`:

```jsx
import SelectBox, { reactSelectControl } from 'cozy-ui/transpiled/react/SelectBox';
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

```jsx
import SelectBox, { CheckboxOption } from 'cozy-ui/transpiled/react/SelectBox';
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

```jsx
import SelectBox, { ActionsOption } from 'cozy-ui/transpiled/react/SelectBox';
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash';
import RenameIcon from 'cozy-ui/transpiled/react/Icons/Rename';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'long', label: 'Salt and vinegar crisps with vegamite and brussel sprouts, double chai latte sauce' }
];

const CustomOption = (props) => (<ActionsOption {...props} actions={[
    { icon: TrashIcon, onClick: () => alert('deleting') },
    { icon: RenameIcon, onClick: ({ data }) => alert(data.value) }
  ]} />);

<SelectBox options={options} components={{
  Option: CustomOption
}} />
```

### Fixed options

```jsx
import { SelectBoxWithFixedOptions } from 'cozy-ui/transpiled/react/SelectBox';
const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(x => ({ value:x, label: x }));

options[0].fixed = true
options[options.length - 1].fixed = true;

<SelectBoxWithFixedOptions
  menuIsOpen={isTesting() ? true : undefined}
  options={options} />
```

### Customize ReactSelect components

Do not directly install another version of react-select, cozy-ui exports the components
from `react-select` for you to further customize the components.

Here a custom class is applied to the `ValueContainer`.

```jsx
import SelectBox, { components } from 'cozy-ui/transpiled/react/SelectBox';

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

```jsx
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
const options = [
  { value: 'chocolate', label: 'Chocolate' }
];

<SelectBox options={options} menuIsOpen classNamePrefix='needsclick cz' />
```

### Fixed SelectBox

When you use a SelectBox within a Modal / Dialog, you can want to have
a custom CSS position for your SelectBox's options. `fixed` position makes
the options to be displayed on top of all the layers.

```jsx
import { useState, useEffect } from 'react'
import { Dialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import Typography from 'cozy-ui/transpiled/react/Typography'

import SelectBox from 'cozy-ui/transpiled/react/SelectBox'
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'long', label: 'Salt and vinegar crisps with vegamite and brussel sprouts, double chai latte sauce' },
]

const handleClose = () => setState({ modalOpened: false })

initialState = { modalOpened: isTesting()  }

const ExampleDialog = ({ open, onClose }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  // Unfortunately we have to do this trick: if we set the state
  // initially to true, the menu is not shown
  useEffect(() => {
    setTimeout(() => {
      setMenuIsOpen(true)
    }, 0)
  }, [])

  // Since we open the selectbox immediately, we need to disable the
  // transition. Otherwise the position for the selectbox is computed
  // wrongly. See the `transitionDuration` prop.
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title='Ada Lovelace'
      transitionDuration={0}
      content={
        <Typography variant="body1" component="div">
          Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815
          – 27 November 1852) was an English mathematician and writer, chiefly
          known for her work on Charles Babbage's proposed mechanical
          general-purpose computer, the Analytical Engine. She was the first to
          recognise that the machine had applications beyond pure calculation, and
          published the first algorithm intended to be carried out by such a
          machine. As a result, she is often regarded as the first to recognise
          the full potential of a "computing machine" and the first computer
          programmer.<br/>
          <SelectBox options={options}
            menuIsOpen={menuIsOpen}
            onMenuOpen={() => setMenuIsOpen(true) }
            onMenuClose={() => setMenuIsOpen(false) }
            menuPosition='fixed'
          />
        </Typography>
      }
      actions={
        <>
          <Button
            theme="secondary"
            onClick={() => onClose()}
            label={'Close Modal'}
          />
          <Button
            theme="primary"
            label={'Touch Me'}
            onClick={() => alert('click')}
          />
        </>
      }
    />
  )
}

;

<>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  <DemoProvider>
    { state.modalOpened
      ? <ExampleDialog open={true} onClose={handleClose} />
      : null }
  </DemoProvider>
</>
```
