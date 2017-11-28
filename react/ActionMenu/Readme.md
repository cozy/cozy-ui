```
const showMenu = () => setState({ menuDisplayed: true })
const hideMenu = () => setState({ menuDisplayed: false })
const itemStyle = {margin: '1rem'};

<div>
  <button onClick={showMenu}>Show action menu</button>
  {state.menuDisplayed &&
    <ActionMenu
      onClose={hideMenu}>
      <div style={itemStyle}>Item 1</div>
      <div style={itemStyle}>Item 2</div>
      <div style={itemStyle}>Item 3</div>
  </ActionMenu>}
</div>
```
