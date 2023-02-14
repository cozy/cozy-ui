The Layout component brings a strong context for apps with any screen resolution. It should be the base of your app

* `<Main />` is considered the wrapper of your app content. `<Content />` should be a direct children of it but you can add other components as well, like a toolbar and such.
* `<Content />` is the main content or your app.
* ⚠️ Secondary `<NavItem />` are not visible on mobile and tablets

```jsx
import { useState } from 'react'
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout';
import Sidebar from 'cozy-ui/transpiled/react/Sidebar';
import Nav, { NavItem, NavIcon, NavText, genNavLink } from 'cozy-ui/transpiled/react/Nav';
import cx from 'classnames'
import isEqual from 'lodash/isEqual'
import WarnIcon from 'cozy-ui/transpiled/react/Icons/Warn'
import CheckIcon from 'cozy-ui/transpiled/react/Icons/Check'
import DownloadIcon from 'cozy-ui/transpiled/react/Icons/Download'

/**
 * In a normal app, ExampleRouterNavLink is from react-router
 * 
 * import { NavLink } from 'react-router'
 * const NavLink = genNavLink(NavLink)
 */
const ExampleRouterNavLink = ({ children, className, active, activeClassName, onClick }) => (
  <a onClick={onClick} className={cx(className, active ? activeClassName : null)}>
    { children }
  </a>
)

const NavLink = genNavLink(ExampleRouterNavLink)

// Not necessary in a normal app
const styles = {
  layout: {
    position: 'relative',
    transform: 'translateZ(0)'
  }
};

const Example = () => {
  const [active, setActive] = useState(['Section 1', 'Subsection 1'])

  // makeProps is not necessary in a normal app since react-router sets active
  // and onClick by itself
  const makeProps = route => {
    const routeIsMatching = isEqual(active.slice(0, route.length), route)
    return { onClick: () => setActive(route), active: routeIsMatching }
  }
  return <Layout style={styles.layout}>
    <Sidebar>
      <Nav>
        <NavItem>
          <NavLink {...makeProps(['Section 1'])}>
            <NavIcon icon={WarnIcon} />
            <NavText>Section 1</NavText>
          </NavLink>
        </NavItem>
        <NavItem secondary>
          <NavLink {...makeProps(['Section 1', 'Subsection 1'])}>
            <NavText>Subsection 1</NavText>
          </NavLink>
        </NavItem>
        <NavItem secondary>
          <NavLink {...makeProps(['Section 1', 'Subsection 2'])}>
            <NavText>Subsection 2</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink {...makeProps(['Section 2'])}>
            <NavIcon icon={CheckIcon} />
            <NavText>Section 2</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink {...makeProps(['Section 3'])}>
            <NavIcon icon={DownloadIcon} />
            <NavText>Section 3</NavText>
          </NavLink>
        </NavItem>
      </Nav>
    </Sidebar>
    <Main>
      <Content className='u-p-1'>
        <h2 className='u-mt-0'>{ active.join(' / ') }</h2>
        { content.ada.short }
      </Content>
    </Main>
  </Layout>
}

<Example />
```

`monoColumn` option (without sidebar)

```jsx
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout';

<Layout monoColumn>
    <Main>
      <Content className='u-p-1'>
        { content.ada.short }
      </Content>
    </Main>
</Layout>
```
