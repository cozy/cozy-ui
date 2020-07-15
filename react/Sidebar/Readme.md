On desktop show a vertical menu on the left. On mobile, shows a
horizontal bottom nav.

⚠️ `NavLink` would be imported normally from `react-router-dom` and
used as follows.

```jsx static
import { NavLink as RRNavLink } from 'react-router'
import { genNavLink } from 'cozy-ui/transpiled/react/Nav'

const NavLink = genNavLink(RRNavLink)
```

In action :

```
import Sidebar from 'cozy-ui/transpiled/react/Sidebar';
import Nav, { NavItem, NavIcon, NavText, genNavLink } from 'cozy-ui/transpiled/react/Nav';
import cx from 'classnames';

const NavLink = genNavLink(({ children, className, active, activeClassName }) =>
  <a className={cx(className, active ? activeClassName : null)}>{ children }</a>);

<Sidebar id='sidebar'>
  <Nav>
    <NavItem id='nav-item'>
      <NavLink active>
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
