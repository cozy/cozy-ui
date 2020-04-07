Use an ActionMenu to show a list of actions. ActionMenus automatically switch their display between desktop and mobile.

### Classic

```
import ActionMenu, { ActionMenuItem } from 'cozy-ui/transpiled/react/ActionMenu';
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton';
import Icon from 'cozy-ui/transpiled/react/Icon';
import { Caption } from 'cozy-ui/transpiled/react/Text';

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
      <ActionMenuItem left={<Icon icon='file' />}>
        <div>
          Item 3
          <Caption className="u-mt-half">
            Descriptive text to elaborate on what item 3 does.
          </Caption>
        </div>
      </ActionMenuItem>
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

### ActionMenu within other components and containerElRef

The ActionMenu component is rendered at the root of the DOM tree using a [Portal](https://reactjs.org/docs/portals.html) and a fixed z-index. Since Modals for example have a higher z-index than ActionMenus, an ActionMenu _inside_ a Modal will be displayed behind it, instead of over it.

In that case, we can use the `containerElRef` prop to provide a reference to an element where ActionMenu will be rendered. Here is an example for the most common case, an ActionMenu inside a Modal:

```
import ActionMenu, { ActionMenuItem, ActionMenuHeader } from './index';
import Icon from '../Icon';
import Modal, { ModalDescription } from '../Modal';
import Filename from '../Filename';

initialState = { modalDisplayed: isTesting(), menuDisplayed: isTesting() };

const showModal = () => setState({ modalDisplayed: true });
const hideModal = () => setState({ modalDisplayed: false });

const showMenu = () => setState({ menuDisplayed: true });
const hideMenu = () => setState({ menuDisplayed: false });

const insideModalRef = React.createRef();

<div>
  <button onClick={showModal}>Show modal</button>
  {state.modalDisplayed &&
    <Modal dismissAction={hideModal}>
      <ModalDescription>
        <div ref={insideModalRef}>
          <button onClick={showMenu}>Show action menu</button>
        </div>
        {state.menuDisplayed &&
          <ActionMenu
            containerElRef={insideModalRef}
            onClose={hideMenu}>
            <ActionMenuHeader>
              <Filename icon="file" filename="my_awesome_paper" extension=".pdf" />
            </ActionMenuHeader>
            <ActionMenuItem onClick={() => alert('click')}left={<Icon icon='file' />}>Item 1</ActionMenuItem>
        </ActionMenu>}
      </ModalDescription>
    </Modal>
  }
</div>
```

### preventOverflow

Set `preventOverflow` to `true` to keep the ActionMenu visible on desktop, even if `anchorElRef` is outside the viewport.
