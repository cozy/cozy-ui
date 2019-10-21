The Layout component brings a strong context for apps with any screen resolution. It should be the base of your app

* `<Main />` is considered the wrapper of your app content. `<Content />` should be a direct children of it but you can add other components as well, like a toolbar and such.
* `<Content />` is the main content or your app.

```jsx
import { Layout, Main, Content } from './index';
import Sidebar from '../Sidebar';
import Nav, { NavItem, NavIcon, NavText, genNavLink } from '../Nav';

const NavLink = genNavLink(({ children, className }) =>
  <a className={className}>{ children }</a>)

const styles = {
  layout: {
    position: 'relative',
    transform: 'translateZ(0)'
  }
};

<Layout style={styles.layout}>
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
    <Main>
      <Content className='u-p-1'>
        { content.ada.short }
      </Content>
    </Main>
</Layout>
```

`monoColumn` option (without sidebar)

```jsx
import { Layout, Main, Content } from './index';

<Layout monoColumn>
    <Main>
      <Content className='u-p-1'>
        { content.ada.short }
      </Content>
    </Main>
</Layout>
```
