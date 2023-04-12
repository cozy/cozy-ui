A menu to display choices to the user.

**This component is deprecated, please use ActionMenu instead. See below for informations on how to migrate.**

Pass data to the `MenuItem`s and use `onSelect` to handle user selecting
an item in the `Menu`.

`MenuItem`s can also have their own `onSelect`, in this case, the global
`onSelect` will not be called. `MenuItem`s `onSelect` is not called if
the item is `disabled`.

```jsx
import Menu, { MenuItem } from 'cozy-ui/transpiled/react/Menu';
import Icon from 'cozy-ui/transpiled/react/Icon';
import PaperplaneIcon from "cozy-ui/transpiled/react/Icons/Paperplane";
const showItem = itemData => alert(JSON.stringify(itemData));
const showWarning = itemData => alert(itemData + ' is disabled');

<Menu initialOpen={isTesting()} id='menu' label='Click me !' onSelect={ showItem } onSelectDisabled={ showWarning }>
  <MenuItem data='hello'>Hello !</MenuItem>
  <MenuItem disabled data='bonjour'>Bonjour !</MenuItem>
  <hr />
  <MenuItem icon={<Icon icon={PaperplaneIcon}/>} onSelect={x => alert('You clicked hola')} data='hola'>
    <div>¡Hola!</div>
    <div>¿Qué tal?</div>
  </MenuItem>
</Menu>
```

Use the `position` attribute to put the menu to the right.

```jsx
import Menu, { MenuItem } from 'cozy-ui/transpiled/react/Menu';

<Menu initialOpen={isTesting()} position='right' label='Click me !' onSelect={ itemData => alert(JSON.stringify(itemData)) }>
  <MenuItem data='hello'>Hello !</MenuItem>
  <MenuItem disabled data='bonjour'>Bonjour !</MenuItem>
  <MenuItem data='hola'>¡Hola!</MenuItem>
</Menu>
```

Use the `component` attribute if you want to use a custom component for the
opener.

```jsx
import Menu, { MenuItem } from 'cozy-ui/transpiled/react/Menu';
import Button from 'cozy-ui/transpiled/react/Button';

<Menu initialOpen={isTesting()} component={<Button label="Greetings with custom component"/>} onSelect={ itemData => alert(JSON.stringify(itemData)) }>
  <MenuItem data='hello'>Hello !</MenuItem>
  <MenuItem disabled data='bonjour'>Bonjour !</MenuItem>
  <MenuItem data='hola'>¡Hola!</MenuItem>
</Menu>
```

### Migrating from Menu to ActionMenu

#### 1. Replacing the Components

`Menu` and `MenuItem` need to be replaced by `ActionMenu` and `ActionMenuItem` respectively.

#### 2. Opening and closing the ActionMenu

`Menu` had a built-in state and toggle button that need to be replaced. The most straightforward replacements are a `useState` hook and a `Button` component.

#### 3. Handling clicks

Clicks are now handled on the `ActionMenuItem` directly through the `onClick` prop. Unlike `Menu`, `ActionMenu` doesn't close itself after a click on an item, but you can change the opening state in the callback if you wish to do it.

#### Putting it all together

```jsx
import ActionMenu, { ActionMenuItem } from 'cozy-ui/transpiled/react/ActionMenu';
import Button from 'cozy-ui/transpiled/react/Button';

initialState = { menuDisplayed: false };

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

const showItem = item => {
  alert(item);
  hideMenu();
}

<div>
  <Button onClick={showMenu} label="Click me !" theme="secondary" subtle />
  {state.menuDisplayed &&
    <ActionMenu onClose={hideMenu}>
      <ActionMenuItem onClick={() => showItem('Hello !')}>Hello !</ActionMenuItem>
      <ActionMenuItem onClick={() => showItem('Bonjour !')}>Bonjour !</ActionMenuItem>
      <ActionMenuItem onClick={() => showItem('¡Hola!')}>¡Hola!</ActionMenuItem>
  </ActionMenu>}
</div>
```

#### `position` and `popover`

`ActionMenu` relies on the Material-UI [Popover](https://v4.mui.com/components/popper/) component to handle both `position` and `popover`.

* `position='left'` is now `placement='bottom-start'`, and is still the default behavior.
* `position='right'` is now `placement='bottom-end'`.
* All other Popover.js placement options are also supported
* The Menu `popover` prop is now called `preventOverflow`
