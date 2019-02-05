### Classic
```
const { ActionMenuItem } = require('.')
const Icon = require('../Icon').default;

const showMenu = () => setState({ menuDisplayed: true })
const hideMenu = () => setState({ menuDisplayed: false });

<div>
  <button onClick={showMenu}>Show action menu</button>
  {state.menuDisplayed &&
    <ActionMenu
      onClose={hideMenu}>
      <ActionMenuItem left={<Icon icon='file' />}>Item 1</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='forward' />}>Item 2</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='file' />}>Item 3</ActionMenuItem>
  </ActionMenu>}
</div>
```

### With Header
```
const { ActionMenuItem, ActionMenuHeader } = require('.')
const Icon = require('../Icon').default;
const Filename = require('../Filename').default;

const showMenu = () => setState({ menuDisplayed: true })
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
      <ActionMenuItem left={<Icon icon='forward' />}>Item 2</ActionMenuItem>
      <ActionMenuItem left={<Icon icon='file' />}>Item 3</ActionMenuItem>
  </ActionMenu>}
</div>
```
