Use an ActionMenu to show a list of actions. ActionMenus automatically switch their display between desktop and mobile.

### Classic

```
import ActionMenu, { ActionMenuItem } from 'cozy-ui/transpiled/react/ActionMenu';
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton';
import Icon from 'cozy-ui/transpiled/react/Icon';

initialState = { menuDisplayed: isTesting() };

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <DropdownButton onClick={showMenu}>Show action menu</DropdownButton>
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
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton';
import Icon from '../Icon';
import Filename from '../Filename';

initialState = { menuDisplayed: isTesting() };

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <DropdownButton onClick={showMenu}>Show action menu</DropdownButton>
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
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton';
import Icon from '../Icon';
import Filename from '../Filename';

initialState = { menuDisplayed: isTesting() };

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <DropdownButton onClick={showMenu}>Show action menu</DropdownButton>
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

### Placement

The `placement` and `anchorElRef` prop can be used to control the placement of the menu on desktop. `anchorElRef` should be a ref to a DOM element and not a react component.

```
import ActionMenu, { ActionMenuItem } from 'cozy-ui/transpiled/react/ActionMenu';
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton';
import Icon from 'cozy-ui/transpiled/react/Icon';

const testRef = React.createRef();

initialState = { menuDisplayed: isTesting() };

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

const anchorRef = React.createRef();

<div>
  <DropdownButton onClick={showMenu} ref={anchorRef}>Show action menu</DropdownButton>
  {state.menuDisplayed &&
    <ActionMenu
      anchorElRef={anchorRef}
      placement="bottom-end"
      buttonRef={testRef}
      onClose={hideMenu}>
      <ActionMenuItem left={<Icon icon='file' />}>Item 1</ActionMenuItem>
  </ActionMenu>}
</div>
```

### preventOverflow

Set `preventOverflow` to `true` to keep the ActionMenu visible on desktop, even if `anchorElRef` is outside the viewport.
