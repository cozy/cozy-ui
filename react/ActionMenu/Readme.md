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

### ActionMenu inside custom fixed elements

The ActionMenu component is rendered at the root of the DOM tree using a [Portal](https://reactjs.org/docs/portals.html) and a fixed z-index. Since Modals for example have a higher z-index than ActionMenus, an ActionMenu _inside_ a Modal would be displayed behind it, instead of over it. To fix this problem, the Popper instance
is given a reference to the Modal DOM node for its `container` option via a special
React context.

Any z-indexed element that will display action menus should use this technique to
provide a ref to a node inside this stacking context (CSS context, not React
context).

```
import { useRef, useState, useCallback } from 'react'
import PopperContainerContext from '../PopperContainerContext'
import ActionMenu, { ActionMenuItem, ActionMenuHeader } from './index';
import Icon from '../Icon';

const MyActionMenu = ({ anchorRef, buttonRef, onClose }) => {
  return <ActionMenu
      anchorElRef={anchorRef}
      placement="bottom-end"
      buttonRef={buttonRef}
      onClose={onClose}>
      <ActionMenuItem onClick={onClose} left={<Icon icon='file' />}>Item 1</ActionMenuItem>
  </ActionMenu>
}

const MyFixedElement = () => {
  const ref = useRef()
  const [shown, setShown] = useState(isTesting())
  const buttonRef = useRef()
  const show = useCallback(() => setShown(true), [setShown])
  const hide = useCallback(() => setShown(false), [setShown])
  return <PopperContainerContext.Provider value={ref}>
    <div style={{ position: 'fixed', height: 100, width: 100, bottom: 0, top: 0, margin: 'auto', left: 0, right: 0, zIndex: 1 }}>
      <div ref={ref} />
      <button onClick={show} ref={buttonRef}>Open action menu</button>
      {shown ? <MyActionMenu onClose={hide} buttonRef={buttonRef}/> : null}
    </div>
  </PopperContainerContext.Provider>
};

initialState = { shown: isTesting() };

<>
  <button onClick={() => setState({ shown: !state.shown })}>
    Toggle custom fixed element
  </button>
  { state.shown && <MyFixedElement /> }
</>
```

### ActionMenu within modals

The above technique is used in Modals, nothing is required from the developer
for ActionMenus inside modals to work correctly.

```
import { useState, useRef } from 'react'
import ActionMenu, { ActionMenuItem, ActionMenuHeader } from './index';
import Icon from '../Icon';
import Modal, { ModalDescription } from '../Modal';
import Filename from '../Filename';

initialState = { modalDisplayed: isTesting() };

const showModal = () => setState({ modalDisplayed: true });
const hideModal = () => setState({ modalDisplayed: false });


const ExampleModalContent = () => {
  const [menuDisplayed, setMenuDisplayed] = useState(isTesting())
    const showMenu = () => setMenuDisplayed(true);
    const hideMenu = () => setMenuDisplayed(false);
    return (
      <ModalDescription>
          <button onClick={showMenu}>Show action menu</button>
        {menuDisplayed &&
          <ActionMenu
            onClose={hideMenu}>
            <ActionMenuHeader>
              <Filename icon="file" filename="my_awesome_paper" extension=".pdf" />
            </ActionMenuHeader>
            <ActionMenuItem onClick={() => alert('click')}left={<Icon icon='file' />}>Item 1</ActionMenuItem>
        </ActionMenu>}
      </ModalDescription>
    )
}

<div>
  <button onClick={showModal}>Show modal</button>
  {state.modalDisplayed &&
    <Modal dismissAction={hideModal}>
      <ExampleModalContent />
    </Modal>
  }
</div>
```

### preventOverflow

Set `preventOverflow` to `true` to keep the ActionMenu visible on desktop, even if `anchorElRef` is outside the viewport.
