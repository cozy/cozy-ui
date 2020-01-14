Use an ActionMenu to show a list of actions. ActionMenus automatically switch their display between desktop and mobile.

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

### With Header (mobile only)

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

### With dedicated click handler

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
