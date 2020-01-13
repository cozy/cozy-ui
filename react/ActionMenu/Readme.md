Use an ActionMenu to show a list of actions. ActionMenu can be rendered for mobile or desktop (through the `inline` prop) and supports an optional header above the menu.

### Classic

```
import ActionMenu, { ActionMenuItem } from 'cozy-ui/transpiled/react/ActionMenu';
import Icon from 'cozy-ui/transpiled/react/Icon';

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <button onClick={showMenu}>Show action menu</button>
  {state.menuDisplayed &&
    <ActionMenu
      onClose={hideMenu}>
      <ActionMenuItem left={<Icon icon='file' />}>Item 1</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='right' />}>Item 2</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='file' />}>Item 3</ActionMenuItem>
  </ActionMenu>}
</div>
```

### With Header

```
import ActionMenu, { ActionMenuItem, ActionMenuHeader } from './index';
import Icon from '../Icon';
import Filename from '../Filename';

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <button onClick={showMenu}>Show action menu</button>
  {state.menuDisplayed &&
    <ActionMenu
      onClose={hideMenu}>
      <ActionMenuHeader>
        <Filename icon="file" filename="my_awesome_paper" extension=".pdf" />
      </ActionMenuHeader>
      <ActionMenuItem left={<Icon icon='file' />}>Item 1</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='right' />}>Item 2</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='file' />}>Item 3</ActionMenuItem>
  </ActionMenu>}
</div>
```

### With Header & onClick

```
import ActionMenu, { ActionMenuItem, ActionMenuHeader } from './index';
import Icon from '../Icon';
import Filename from '../Filename';

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <button onClick={showMenu}>Show action menu</button>
  {state.menuDisplayed &&
    <ActionMenu
      onClose={hideMenu}>
      <ActionMenuHeader>
        <Filename icon="file" filename="my_awesome_paper" extension=".pdf" />
      </ActionMenuHeader>
      <ActionMenuItem onClick={() => alert('click')}left={<Icon icon='file' />}>Item 1</ActionMenuItem>
  </ActionMenu>}
</div>
```

### Inline

Instead of displaying the menu in a `BottomDrawer` which is ideal for mobile, the menu is displayed as a pop-up menu better suited for desktop screens.

```
import ActionMenu, { ActionMenuItem } from 'cozy-ui/transpiled/react/ActionMenu';
import Icon from 'cozy-ui/transpiled/react/Icon';

const showMenu = () => setState({ menuDisplayed: true })
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <button onClick={showMenu}>Show action menu</button>
  {state.menuDisplayed &&
    <ActionMenu onClose={hideMenu} inline>
      <ActionMenuItem left={<Icon icon='file' />}>Item 1</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='right' />}>Item 2</ActionMenuItem>
  </ActionMenu>}
</div>
```
