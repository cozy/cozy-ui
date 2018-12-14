On desktop show a vertical menu on the left. On mobile, shows a
horizontal bottom nav.

⚠️ `NavLink` would be imported normally from `react-router-dom` and
used as follows.

```jsx static
import { NavLink as RRNavLink } from 'react-router'
import { genNavLink } from 'cozy-ui/react/Nav'

const NavLink = genNavLink(RRNavLink)
```

In action :

```
const _Nav = require('../Nav')
const { NavItem, NavIcon, NavText, genNavLink } = _Nav
const Nav = _Nav.default

const NavLink = genNavLink(({ children, className }) =>
  <a className={className}>{ children }</a>);

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
