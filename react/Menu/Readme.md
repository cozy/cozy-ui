A menu to display choices to the user.

Pass data to the `MenuItem`s and use `onSelect` to handle user selecting
an item in the `Menu`.

`MenuItem`s can also have their own `onSelect`, in this case, the global
`onSelect` will not be called. `MenuItem`s `onSelect` is not called if
the item is `disabled`.

```
import Menu, { MenuItem } from 'cozy-ui/transpiled/react/Menu';
import Button from 'cozy-ui/transpiled/react/Button';
import Icon from 'cozy-ui/transpiled/react/Icon';
const showItem = itemData => alert(JSON.stringify(itemData));
const showWarning = itemData => alert(itemData + ' is disabled');

<Menu initialOpen={isTesting()} id='menu' label='Click me !' onSelect={ showItem } onSelectDisabled={ showWarning }>
  <MenuItem data='hello'>Hello !</MenuItem>
  <MenuItem disabled data='bonjour'>Bonjour !</MenuItem>
  <hr />
  <MenuItem icon={<Icon icon='paperplane'/>} onSelect={x => alert('You clicked hola')} data='hola'>
    <div>¡Hola!</div>
    <div>¿Qué tal?</div>
  </MenuItem>
</Menu>
```

Use the `position` attribute to put the menu to the right.

```
import Menu, { MenuItem } from 'cozy-ui/transpiled/react/Menu';
import Icon from 'cozy-ui/transpiled/react/Icon';

<Menu initialOpen={isTesting()} position='right' label='Click me !' onSelect={ itemData => alert(JSON.stringify(itemData)) }>
  <MenuItem data='hello'>Hello !</MenuItem>
  <MenuItem disabled data='bonjour'>Bonjour !</MenuItem>
  <MenuItem data='hola'>¡Hola!</MenuItem>
</Menu>
```

Use the `component` attribute if you want to use a custom component for the
opener.

```
import Menu, { MenuItem } from 'cozy-ui/transpiled/react/Menu';
import Button from 'cozy-ui/transpiled/react/Button';

<Menu initialOpen={isTesting()} component={<Button label="Greetings with custom component"/>} onSelect={ itemData => alert(JSON.stringify(itemData)) }>
  <MenuItem data='hello'>Hello !</MenuItem>
  <MenuItem disabled data='bonjour'>Bonjour !</MenuItem>
  <MenuItem data='hola'>¡Hola!</MenuItem>
</Menu>
```
