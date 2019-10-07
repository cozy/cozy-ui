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
import Sidebar from './index';
import Nav, { NavItem, NavIcon, NavText, genNavLink } from '../Nav';

const NavLink = genNavLink(({ children, className }) =>
  <a className={className}>{ children }</a>);

<Sidebar id='sidebar'>
  <Nav>
    <NavItem id='nav-item'>
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
