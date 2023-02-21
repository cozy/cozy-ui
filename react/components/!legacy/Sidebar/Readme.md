On desktop shows a vertical menu on the left. On mobile, shows a horizontal bottom nav.

⚠️ `NavLink` must be imported normally from `react-router-dom` and used as follows.

⚠️ You must use `genNavLinkForV6` instead of `genNavLink` for `react-router-dom` version 6.

```jsx static
import { NavLink as RouterLink } from 'react-router'
import { genNavLink } from 'cozy-ui/transpiled/react/Nav'

const NavLink = genNavLink(RouterLink)
```

In action :

```jsx
import Sidebar from 'cozy-ui/transpiled/react/Sidebar'
import Nav, { NavItem, NavIcon, NavText, genNavLink } from 'cozy-ui/transpiled/react/Nav'
import WarnIcon from 'cozy-ui/transpiled/react/Icons/Warn'
import CheckIcon from 'cozy-ui/transpiled/react/Icons/Check'
import DownloadIcon from 'cozy-ui/transpiled/react/Icons/Download'

// <-- only usefull for the documentation,
// should be `const NavLink = genNavLink(RouterLink)`
import cx from 'classnames'

const NavLink = genNavLink(
  ({ children, className, active, activeClassName }) => (
    <a className={cx(className, active ? activeClassName : null)}>{children}</a>
  )
)
// -->

;

<Sidebar id='sidebar'>
  <Nav>
    <NavItem id='nav-item'>
      <NavLink to="/warn" active>
        <NavIcon icon={WarnIcon} />
        <NavText>Warn</NavText>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/check">
        <NavIcon icon={CheckIcon} />
        <NavText>Check</NavText>
      </NavLink>
    </NavItem>
    <NavItem secondary>
      <NavLink to="/secondary">
        <NavText>Secondary link</NavText>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/download">
        <NavIcon icon={DownloadIcon} />
        <NavText>Download</NavText>
      </NavLink>
    </NavItem>
  </Nav>
</Sidebar>
```
