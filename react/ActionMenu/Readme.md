Use an ActionMenu to show a list of actions. ActionMenus automatically switch their display between desktop and mobile.

### Classic

```
import ActionMenu, { ActionMenuItem, ActionMenuRadio } from 'cozy-ui/transpiled/react/ActionMenu';
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton';
import Icon from 'cozy-ui/transpiled/react/Icon';
import { Text, Caption } from 'cozy-ui/transpiled/react/Text';

initialState = { menuDisplayed: isTesting() };

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <DropdownButton onClick={showMenu}>Show action menu</DropdownButton>
  {state.menuDisplayed &&
    <ActionMenu
      onClose={hideMenu}>
      <ActionMenuItem left={<Icon icon='file' />} right={<Icon icon='warning' />}>Item 1</ActionMenuItem>
      <ActionMenuItem left={<ActionMenuRadio />}>Item 2</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='file' />}>
        <Text>
          Item 3
        </Text>
        <Caption>
          Descriptive text to elaborate on what item 3 does.
        </Caption>
      </ActionMenuItem>
  </ActionMenu>}
</div>
```

### With Header (mobile only)

A header can be used to provide context on the menu actions. Since on
desktop, we display a popper and not a BottomDrawer, context for the
user is not lost, so the ActionMenuHeader would be redundant. This is
why it is not rendered unless we are on mobile.

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

### Placement on desktop

You can pass a reference to a custom DOM element through the `anchorElRef` prop to attach the menu to that element.
We use [popper.js](https://popper.js.org/docs/v2/) under the hood. You can use the `popperOptions` prop to pass options to the popper.js instance. This lets you control things like placement relative to the anchor, positioning strategies and more — refer to the popper doc for all the details.

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
      popperOptions={{ placement: 'bottom-end'}}
      onClose={hideMenu}>
      <ActionMenuItem left={<Icon icon='file' />}>Item 1</ActionMenuItem>
  </ActionMenu>}
</div>
```
