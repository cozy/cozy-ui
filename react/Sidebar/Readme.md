On desktop show a vertical menu on the left. On mobile, shows a
horizontal bottom nav.

⚠️ `NavLink` would be imported normally from `react-router-dom` and
used as follows.

```jsx static
import { NavLink as UINavLink } from 'cozy-ui/react'

<NavLink to={to} activeClassName={UINavLink.activeClassName} className={UINavLink.className}>
  {children}
</NavLink>
```

In action : 

```
const _Nav = require('../Nav')
const { NavItem, NavIcon, NavText, NavLink } = _Nav
const Nav = _Nav.default;

<Sidebar>
  <Nav>
    <NavItem>
      <NavLink>
        <NavIcon icon='warn' />
        <NavText>Warn</NavText>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink>
        <NavIcon icon='check' />
        <NavText>Check</NavText>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink>
        <NavIcon icon='download' />
        <NavText>Download</NavText>
      </NavLink>
    </NavItem>
  </Nav>
</Sidebar>
```
